import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IconFlagUz from '@/assets/icons/flag-uz.svg?react';
import IconFlagRu from '@/assets/icons/flag-ru.svg?react';
import IconFlagEn from '@/assets/icons/flag-en.svg?react';
import { api } from '@/api/api';

type OtpFormType = {
  otp: string;
};

type VerifyResponse = {
  message?: string;
  detail?: string;
  tokens?: {
    access?: string;
    refresh?: string;
  };
};

const schema = yup.object({
  otp: yup.string().required('otp_code_required').default(''),
});

const getCookie = (name: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

export const usePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const contact = searchParams.get('contact') || '';
  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const [timeLeft, setTimeLeft] = useState(180);
const isExpired = timeLeft === 0;

  const {
    control,
    handleSubmit,
    setValue,
    setError,
  } = useForm<OtpFormType>({
    resolver: yupResolver(schema),
    defaultValues: schema.getDefault(),
  });


useEffect(() => {
  if (timeLeft === 0) return;

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft]);

const formatTime = `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;
  const handleOtpChange = (index: number, value: string) => {
    if (isExpired) return;

    const onlyNumber = value.replace(/\D/g, '');
    const newOtp = [...otpValues];
    newOtp[index] = onlyNumber.slice(-1);

    setOtpValues(newOtp);
    setValue('otp', newOtp.join(''));

    if (onlyNumber && index < otpValues.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const verifyMutation = useMutation({
    mutationFn: async (data: OtpFormType) => {
      const accessToken = getCookie('access_token');

      const payload = {
        contact,
        code: data.otp,
      };

      const res = await api.post<VerifyResponse>(
        'account/otp/verify/',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return res.data;
    },
    onSuccess: () => {
      navigate('/register/success');
    },
    onError: (error: any) => {
      const data = error?.response?.data;

      if (data?.code?.[0]) {
        setError('otp', {
          type: 'server',
          message: data.code[0],
        });
        return;
      }

      const message =
        data?.message ||
        data?.detail ||
        data?.error ||
        'otp_verify_failed';

      setError('otp', {
        type: 'server',
        message,
      });
    },
  });

  const onSubmit = (data: OtpFormType) => {
    if (isExpired) {
      setError('otp', {
        type: 'manual',
        message: 'otp_expired',
      });
      return;
    }

    if (!contact) {
      setError('otp', {
        type: 'manual',
        message: 'contact_not_found',
      });
      return;
    }

    if (data.otp.length < 5) {
      setError('otp', {
        type: 'manual',
        message: 'otp_code_required',
      });
      return;
    }

    verifyMutation.mutate(data);
  };

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem('lang', value);
  };
  const languages = [
    { value: 'uz', label: "O'zbekcha", Icon: IconFlagUz },
    { value: 'ru', label: 'Русский', Icon: IconFlagRu },
    { value: 'en', label: 'English', Icon: IconFlagEn },
  ];

  return {
    t,
    i18n,
    control,
    handleSubmit,
    onSubmit,
    verifyLoading: verifyMutation.isPending,
    contact,
    otpValues,
    handleOtpChange,
    inputRefs,
    handleLangChange,
    timeLeft,
    formatTime,
    isExpired,languages,
  };
};
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useBoolean } from '../../hook/useBoolean';

type SavedUser = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required('email_required')
    .email('email_invalid')
    .default(''),
  password: yup
    .string()
    .default('')
    .required('password_required')
    .min(6, 'password_min_length'),
});

export type SchemaType = yup.InferType<typeof schema>;

const getSavedUser = (): SavedUser | null => {
  const savedUser = localStorage.getItem('user');

  if (!savedUser) {
    return null;
  }

  try {
    const parsedUser = JSON.parse(savedUser) as Partial<SavedUser>;

    if (
      typeof parsedUser.email !== 'string' ||
      typeof parsedUser.password !== 'string'
    ) {
      return null;
    }

    return {
      email: parsedUser.email.trim().toLowerCase(),
      password: parsedUser.password,
    };
  } catch {
    return null;
  }
};

export const usePage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const rememberMe = useBoolean();
  const passwordVisibility = useBoolean();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<SchemaType>({
    resolver: yupResolver(schema),
    defaultValues: schema.cast({}),
  });

  const onSubmit = async (data: SchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = getSavedUser();

    if (!user) {
      setError('email', { message: 'user_not_found' });
      return;
    }

    if (data.email.trim().toLowerCase() !== user.email) {
      setError('email', { message: 'email_not_match' });
      return;
    }

    if (data.password !== user.password) {
      setError('password', { message: 'password_not_match' });
      return;
    }

    navigate('/home');
  };

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem('i18nextLng', value);
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    rememberMe,
    isValid,
    isDirty,
    passwordVisibility,
    t,
    i18n,
    handleLangChange,
  };
};

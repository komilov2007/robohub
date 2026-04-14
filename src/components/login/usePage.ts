import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useBoolean } from '../../hook/useBoolean';

const schema = yup.object({
  email: yup
    .string()
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

export const usePage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const rememberMe = useBoolean();

  const passwordVisibility = useBoolean();

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<SchemaType>({
    resolver: yupResolver(schema),
    defaultValues: schema.cast({}),
  });

  // inout validate 
  const onSubmit = async (data: SchemaType) => {
    await new Promise((r) => setTimeout(r, 1000));
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      setError('email', { message: 'Foydalanuvchi topilmadi' });
      return;
    }
    const user = JSON.parse(savedUser);
    if (data.email !== user.email) {
      setError('email', { message: 'Email noto’g’ri kiritilgan' });
      return;
    }
    setValue('email', 'admin@gmail.com', {
      shouldValidate: true,
    });
    if (data.password !== user.password) {
      setError('password', { message: 'Parolingiz noto’g’ri kiritilgan' });
      return;
    }
    navigate('/home');
  };
  //  i18N language
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

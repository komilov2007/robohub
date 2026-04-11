import { Box, CircularProgress } from '@mui/material';
import { memo, useState } from 'react';
import LoginRight from './login/loginright';
import {
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import turkey from '../assets/icons/turkey.png';
import { Bayroq, Eng, Rus } from '../assets/icons';

type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  createPassword: string;
  confirmPassword: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterType>({
    firstName: '',
    lastName: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
  });

  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    const { firstName, lastName, email, createPassword, confirmPassword } =
      formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !createPassword.trim() ||
      !confirmPassword.trim()
    ) {
      setError('Hammasiga yozing');
      return;
    }

    if (!email.includes('@')) {
      setError('Email xato kiritilgan');
      return;
    }

    if (createPassword.length < 6) {
      setError('Parol kamida 6 ta belgidan iborat bo‘lishi kerak');
      return;
    }

    if (createPassword !== confirmPassword) {
      setError('Parollar bir xil emas');
      return;
    }
    setSuccess("Ro'yxatdan o'tish muvaffaqiyatli");

    setLoading(true);

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.createPassword,
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);

    if (!agree) {
      setError('Shartlarga rozilik berishingiz kerak');
      return;
    }

    setSuccess("Ro'yxatdan o'tish muvaffaqiyatli bo'ldi");

    console.log('Register data:', {
      firstName,
      lastName,
      email,
      password: createPassword,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '97vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 550,
            p: 5,
            borderRadius: '12px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 2,
            }}
          >
            <Select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              size="small"
              sx={{
                ml: '16px',
                mt: '46px',
                height: '36px',
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                },
              }}
            >
              <MenuItem value="uz">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bayroq />
                  O'zbekcha
                </Box>
              </MenuItem>

              <MenuItem
                sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                value="ru"
              >
                <Rus />
                Русский
              </MenuItem>

              <MenuItem
                sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                value="en"
              >
                <Eng /> English
              </MenuItem>

              <MenuItem
                sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                value="tr"
              >
                <img src={turkey} alt="turkey" width={25} height={25} />
                Türkçe
              </MenuItem>
            </Select>
          </Box>

          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', fontSize: '32px' }}
          >
            {t('registerTitle')}
          </Typography>

          <Typography
            variant="body2"
            color="gray"
            sx={{ mb: 1, color: 'black', opacity: '50%' }}
          >
            {t('registerSubtitle')}
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                sx={{
                  width: '266px',
                }}
              >
                <Typography
                  sx={{ color: 'black', opacity: '50%', ml: '5px', mb: '5px' }}
                >
                  Ism
                </Typography>

                <TextField
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t('firstNamePlaceholder')}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      height: '40px',
                      borderRadius: '12px',
                      '&.Mui-focused fieldset': {
                        borderColor: '#60788f',
                        boxShadow: '0px 0px 3px green',
                      },
                    },
                    '& input': {
                      padding: '0 8px',
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '266px',
                }}
              >
                <Typography
                  sx={{ color: 'black', opacity: '50%', ml: '5px', mb: '5px' }}
                >
                  Familya
                </Typography>

                <TextField
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t('lastNamePlaceholder')}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      height: '40px',
                      borderRadius: '12px',
                      '&.Mui-focused fieldset': {
                        borderColor: '#60788f',
                        boxShadow: '0px 0px 3px green',
                      },
                    },
                    '& input': {
                      padding: '0 8px',
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                color: 'black',
                opacity: '50%',
                ml: '5px',
                mb: 'px',
                mt: 1,
              }}
            >
              Email
            </Typography>

            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('emailOrPhonePlaceholder')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': {
                    borderColor: '#60788f',
                    boxShadow: '0px 0px 3px green',
                  },
                },
                '& input': {
                  padding: '0 8px',
                },
              }}
            />

            <Typography
              sx={{
                color: 'black',
                opacity: '50%',
                ml: '5px',
                mb: 'px',
                mt: 1,
              }}
            >
              Parol
            </Typography>

            <TextField
              fullWidth
              name="createPassword"
              value={formData.createPassword}
              onChange={handleChange}
              placeholder={t('createPasswordPlaceholder')}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': {
                    borderColor: '#60788f',
                    boxShadow: '0px 0px 3px green',
                  },
                },
                '& input': {
                  padding: '0 8px',
                },
              }}
              type="password"
            />

            <Typography
              sx={{
                color: 'black',
                opacity: '50%',
                ml: '5px',
                mb: 'px',
                mt: 1,
              }}
            >
              Parolni tasdiqlang
            </Typography>

            <TextField
              fullWidth
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder={t('confirmPasswordPlaceholder')}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': {
                    borderColor: '#60788f',
                    boxShadow: '0px 0px 3px green',
                  },
                },
                '& input': {
                  padding: '0 8px',
                },
              }}
              type="password"
            />

            <FormControlLabel
              sx={{ mt: 1, fontSize: '10px' }}
              control={
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
              }
              label={t('termsText')}
            />

            {error && (
              <Typography sx={{ color: 'red', fontSize: '14px', mt: 1 }}>
                {error}
              </Typography>
            )}

            {success && (
              <Typography sx={{ color: 'green', fontSize: '14px', mt: 1 }}>
                {success}
              </Typography>
            )}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                width: '100%',
                height: 40,
                borderRadius: '12px',
                bgcolor: '#00524F',
                mt: '32px',
              }}
            >
              {loading ? (
                <CircularProgress size={22} sx={{ color: 'white' }} />
              ) : (
                t('registerBtn')
              )}
            </Button>
          </Box>

          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            {t('haveAccount')}{' '}
            <span
              style={{ color: '#0f6d5b', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              {t('loginNow')}
            </span>
          </Typography>
        </Box>
      </Box>

      <LoginRight />
    </Box>
  );
};

export default memo(Register);

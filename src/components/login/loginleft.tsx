import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Button,
  IconButton,
  CircularProgress,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { UserIcon, Bayroq, Qulf, Rus, Eng } from '../../assets/icons';
import turkey from '../../assets/icons/turkey.png';
type FormType = {
  email: string;
  password: string;
};
const textFieldSx = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    borderRadius: '12px',
    fontSize: '14px',
    '&.Mui-focused fieldset': {
      borderColor: '#60788f',
      boxShadow: '0px 0px 3px green',
    },
  },
};
const labelSx = { color: '#596881', mb: '3px', fontSize: '14px' };
const menuItemSx = { display: 'flex', alignItems: 'center', gap: '8px' };
const LoginLeft = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: FormType) => {
    await new Promise((r) => setTimeout(r, 1000));

    const savedUser = localStorage.getItem('registeredUser');
    if (!savedUser) {
      setError('email', { message: 'user topilmadi' });
    }
    const user = JSON.parse(savedUser);

    if (data.email === user.email && data.password === user.password) {
      navigate('/home');
    } else {
      setError('password', { message: t('error') });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        flex: 1,
        height: '100vh',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          size="small"
          sx={{
            height: '36px',
            width: '155px',
            '& .MuiSelect-select': menuItemSx,
          }}
        >
          <MenuItem value="uz" sx={menuItemSx}>
            <Bayroq /> O'zbekcha
          </MenuItem>
          <MenuItem value="ru" sx={menuItemSx}>
            <Rus /> Русский
          </MenuItem>
          <MenuItem value="en" sx={menuItemSx}>
            <Eng /> English
          </MenuItem>
          <MenuItem value="tr" sx={menuItemSx}>
            <img src={turkey} alt="turkey" width={25} height={25} />
            Türkçe
          </MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>
              {t('title')}
            </Typography>
            <Typography sx={{ color: '#596881' }}>
              {t('subtitleLine1')}
              <br />
              {t('subtitleLine2')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box>
              <Typography sx={labelSx}>{t('login')}</Typography>
              <Controller
                name="email"
                control={control}
                rules={{ required: t('error') }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder={t('loginPlaceholder')}
                    fullWidth
                    sx={textFieldSx}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <UserIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
              {errors.email && (
                <Typography color="error" sx={{ fontSize: '12px' }}>
                  {errors.email.message}
                </Typography>
              )}
            </Box>
            <Box>
              <Typography sx={labelSx}>{t('password')}</Typography>
              <Controller
                name="password"
                control={control}
                rules={{ required: t('error') }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('passwordPlaceholder')}
                    fullWidth
                    sx={textFieldSx}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Qulf />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
              {errors.password && (
                <Typography color="error" sx={{ fontSize: '12px' }}>
                  {errors.password.message}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    sx={{
                      color: '#C5CFDD',
                      mr: '-5px',
                      '&.Mui-checked': { color: '#00524F' },
                      '&:hover': { color: '#8796AF' },
                    }}
                  />
                }
                label={t('rememberMe')}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: '#3E4A60',
                    fontSize: '14px',
                  },
                }}
              />
              <Typography
                sx={{
                  color: '#00524F',
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '16px',
                }}
              >
                {t('forgotPassword')}
              </Typography>
            </Box>

            {/* Kirish tugmasi */}
            <Box>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  height: 40,
                  borderRadius: '12px',
                  bgcolor: '#00524F',
                  fontSize: '12px',
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  t('enter')
                )}
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: '10px',
                  gap: '10px',
                }}
              >
                <Typography sx={{ color: '#8796AF' }}>
                  {t('noAccount')}
                </Typography>
                <Typography
                  component={Link}
                  to="/register"
                  sx={{
                    color: '#00524F',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '14px',
                    mt: '2px',
                  }}
                >
                  {t('register')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            fontSize: '12px',
            color: '#596881',
            gap: '24px',
          }}
        >
          <Typography>© 2025 Robohub</Typography>
          <Typography>{t('privacyPolicy')}</Typography>
          <Typography component="span">{t('support')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginLeft;

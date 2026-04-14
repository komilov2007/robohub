import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import IconFlagUz from '@/assets/icons/flag-uz.svg?react';
import IconFlagRu from '@/assets/icons/flag-ru.svg?react';
import IconFlagEn from '@/assets/icons/flag-en.svg?react';
import IconLock from '@/assets/icons/lock.svg?react';
import IconUser from '@/assets/icons/user.svg?react';
import { usePage } from './usePage';
import {
  Container,
  LoginFormCenter,
  LoginFormOptions,
  AutofillOverride,
  StyledTextField,
  FieldLabel,
  StyledMenuItem,
  Loader,
} from './style';

const languages = [
  { value: 'uz', label: "O'zbekcha", Icon: IconFlagUz },
  { value: 'ru', label: 'Русский', Icon: IconFlagRu },
  { value: 'en', label: 'English', Icon: IconFlagEn },
];

const LoginLeft = () => {
  const {
    control,
    handleSubmit,
    isSubmitting,
    onSubmit,
    rememberMe,
    passwordVisibility,
    t,
    i18n,
    handleLangChange,
    isDirty,
    isValid,
  } = usePage();

  return (
    <AutofillOverride>
      <Container isLogin={true} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Select
            value={i18n.language}
            onChange={(e) => handleLangChange(e.target.value)}
            size="small"
            sx={{
              height: '36px',
              width: '155px',
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              },
            }}
          >
            {languages.map(({ value, label, Icon }) => (
              <StyledMenuItem key={value} value={value}>
                <Icon /> {label}
              </StyledMenuItem>
            ))}
          </Select>
        </Box>

        <LoginFormCenter>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>
                {t('title')}
              </Typography>

              <Typography sx={{ color: '#596881' }}>
                {t('subtitle_line_1')}
                <br />
                {t('subtitle_line_2')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box>
                <FieldLabel>{t('login')}</FieldLabel>

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <StyledTextField
                      {...field}
                      placeholder={t('login_placeholder')}
                      fullWidth
                      autoComplete="current-email"
                      error={fieldState.invalid}
                      helperText={t(fieldState.error?.message as string)}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconUser />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                />
              </Box>
              <Box>
                <FieldLabel>{t('password')}</FieldLabel>

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <StyledTextField
                      {...field}
                      type={passwordVisibility.value ? 'text' : 'password'}
                      placeholder={t('password_placeholder')}
                      autoComplete="current-password"
                      fullWidth
                      error={fieldState.invalid}
                      helperText={t(fieldState.error?.message as string)}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconLock />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={passwordVisibility.toggle}
                                edge="end"
                              >
                                {passwordVisibility.value ? (
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
              </Box>
              <LoginFormOptions>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe.value}
                      onChange={rememberMe.toggle}
                      sx={{
                        color: '#C5CFDD',
                        mr: '-5px',
                        '&.Mui-checked': {
                          color: '#00524F',
                        },
                      }}
                    />
                  }
                  label={t('remember_me')}
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
                    cursor: 'pointer',
                  }}
                >
                  {t('forgot_password')}
                </Typography>
              </LoginFormOptions>
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  disabled={isSubmitting || !isDirty || !isValid}
                  sx={{
                    height: 40,
                    borderRadius: '12px',
                    bgcolor: '#00524F',
                    fontSize: '12px',
                  }}
                >
                  {isSubmitting ? (
                    <Loader isLogin={true} size={24} />
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
                    {t('no_account')}
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
        </LoginFormCenter>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              fontSize: '12px',
              color: '#596881',
              gap: '24px',
            }}
          >
            <Typography>© {new Date().getFullYear()} Robohub</Typography>
            <Typography>{t('privacy_policy')}</Typography>
            <Typography component="span">{t('support')}</Typography>
          </Box>
        </Box>
      </Container>
    </AutofillOverride>
  );
};

export default LoginLeft;

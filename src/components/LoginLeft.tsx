import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserIcon, Bayroq, Qulf, Rus, Eng } from '../assets/icons';
import turkey from '../assets/icons/turkey.png';

const LoginLeft = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const savedUser = localStorage.getItem('registeredUser');

      if (!savedUser) {
        setError("Ro'yxatdan o'tgan user topilmadi");
        setLoading(false);
        return;
      }

      const parsedUser = JSON.parse(savedUser);

      if (login === parsedUser.email && password === parsedUser.password) {
        navigate('/home');
      } else {
        setError(t('error'));
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        flex: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: '37px' }}>
        <Select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          size="small"
          sx={{
            ml: '16px',
            mt: '16px',
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

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '86vh',
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                fontSize: '32px',
                fontWeight: '600',
                mb: '10px',
              }}
            >
              {t('title')}
            </Typography>

            <Typography
              sx={{
                color: '#596881',
                mb: '30px',
              }}
            >
              {t('subtitleLine1')}
              <br />
              {t('subtitleLine2')}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ mb: '16px' }}>
              <Typography
                sx={{
                  color: '#8796AF',
                  mb: '6px',
                }}
              >
                {t('login')}
              </Typography>

              <TextField
                placeholder={t('loginPlaceholder')}
                variant="outlined"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  width: 464,

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

            <Box sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  color: '#8796AF',
                  mb: '6px',
                }}
              >
                {t('password')}
              </Typography>

              <TextField
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder={t('passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{
                  width: 464,
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            {error && (
              <Typography color="error" sx={{ mt: 1, mb: 1 }}>
                {error}
              </Typography>
            )}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: '10px',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: '#8796AF' }}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                }
                label={t('rememberMe')}
              />

              <Typography sx={{ color: '#00524F' }}>
                {t('forgotPassword')}
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  width: 464,
                  height: 40,
                  borderRadius: '12px',
                  bgcolor: '#00524F',
                  mt: '32px',
                }}
                variant="contained"
                type="submit"
                fullWidth
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  t('enter')
                )}
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  mt: '16px',
                }}
              >
                <Typography sx={{ color: '#8796AF' }}>
                  {t('noAccount')}
                </Typography>
                <Button
                  sx={{ color: '#00524F', fontWeight: '750', mt: '-6px' }}
                  onClick={() => navigate('/register')}
                >
                  {' '}
                  {t('register')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '12px',
          gap: '26px',
          color: '#596881',
        }}
      >
        <Typography>© 2025 Robohub</Typography>
        <Typography>{t('privacyPolicy')}</Typography>
        <Typography component="span">{t('support')}</Typography>
      </Box>
    </Box>
  );
};

export default LoginLeft;

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
import { UserIcon, Bayroq, Qulf } from '../assets/icons';

const LoginLeft = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const [lang, setLang] = useState('uz');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (login === 'admin123' && password === '12345') {
        setError('');
        navigate('/dashboard');
      } else {
        setError('Login yoki parol noto‘g‘ri');
      }

      setLoading(false);
    }, 1500);
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
          value={lang}
          onChange={(e) => setLang(e.target.value)}
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
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="en">English</MenuItem>
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
              Hisobingizga kiring
            </Typography>

            <Typography
              sx={{
                color: '#596881',
                mb: '30px',
              }}
            >
              Kirish uchun elektron pochta yoki telefon raqamiongiz va <br />
              parolingizni kiriting
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
                Login
              </Typography>

              <TextField
                placeholder="Telefon raqam yoki elektron pochtangizni kiriting"
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
                Parol
              </Typography>

              <TextField
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder="Parolni kiriting"
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
                label="Meni eslab qoling"
              />

              <Typography sx={{ color: '#00524F' }}>
                Parolni unutdingizmi?
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
                  'Kirish'
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
                  Hisobingiz yo&apos;qmi?
                </Typography>
                <Typography sx={{ color: '#00524F', fontWeight: '750' }}>
                  Ro&apos;yxatdan o&apos;tish
                </Typography>
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
        <Typography>Maxfiylik siyosati</Typography>
        <Typography component="span">Qo&apos;llab-quvvatlash</Typography>
      </Box>
    </Box>
  );
};

export default LoginLeft;

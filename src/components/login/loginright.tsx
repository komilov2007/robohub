import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import robostack from '../../assets/img/robo-stack.png';
import { Logo } from '../../assets/icons';
const LoginRight = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        border: 'none',
        padding: '16px',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #00524F, #0f8484)',
          width: '100%',
          borderRadius: '15px',
          height: '100%',
          padding: '40px 55px',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <Box>
              <Logo />
            </Box>
            <Typography
              sx={{
                fontSize: '42px',
                color: '#B8FFB0',
                fontWeight: '600',
                mt: '-10px',
              }}
            >
              robohub
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '32px',
                color: '#ffffff',
                fontWeight: '600',
              }}
            >
              {t('rtitle')}
            </Typography>
            <Typography
              sx={{
                color: '#ffffff',
                opacity: '70%',
                fontWeight: '400',
                lineHeight: '21px',
              }}
            >
              {t('rtext')}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img src={robostack} alt="stacks" width={'70%'} />
          </Box>
          <Typography sx={{ color: '#FFFFFF', fontSize: '18px' }}>
            {t('rtextBtm')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(LoginRight);

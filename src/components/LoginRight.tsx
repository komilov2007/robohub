import { Box, Typography } from '@mui/material';
import { Logo } from '../assets/icons';
import roboImg from '../assets/img/robo-stack.png';
const LoginRight = () => {
  return (
    <Box
      sx={{
        flex: 1,
        background: 'linear-gradient(to bottom, #00524F, #186c6c)',
        borderRadius: '16px',
        m: '16px',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#B8FFB0',
            fontSize: '41px',
            fontWeight: 'bold',
            mt: 6,
            ml: '74px',
          }}
        >
          <Logo /> robohub
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: '74px',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            Robohub orqali barchasi oson
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '21px',
              opzacity: 70,
            }}
          >
            Platformamiz orqali barcha marketplace laringizni bir joyda
            ishlating. Vaqtingizni tejang. Platformamiz orqali barcha
            marketplace laringizni bir joyda ishlating. Vaqtingizni tejang.
          </Typography>
        </Box>
        <Box
          component="img"
          src={roboImg}
          alt="robot"
          sx={{
            width: '450px',
            display: 'flex',

            mt: 4,
            ml: '144px',
          }}
        />
        <Typography
          sx={{
            color: 'white',
            fontSize: '19px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '24px',
            textAlign: 'center',
            mt: '40px',
          }}
        >
          Platformamiz orqali barcha marketplace laringizni bir joyda <br />{' '}
          ishlating. Vaqtingizni tejang.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginRight;

import { createTheme } from '@mui/material/styles';
import './themeType';
const theme = createTheme({
   typography: {
    fontFamily: 'Inter, sans-serif',
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'forgetText' },
          style: {
            fontSize: '12px',
            color: '#00524F',
            fontWeight: 500,
            lineHeight: '16px',
            textDecoration: 'none',
          },
        },
        {
          props: { vocab: 'loginTitle' },
          style: { fontSize: '32px', fontWeight: '600'
           },
        },
        { props: { vocab: 'loginSubTitle' }, style: { color: '#596881' } },
        {
          props: { vocab: 'noAccaunt' },
          style: { color: '#8796AF', fontSize: '14px' },
        },
        {
          props: { vocab: 'loginRgt' },
          style: {
            color: '#00524F',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '14px',
            mt: '2px',
          },
        },
        {
          props: { vocab: 'loginBtm' },
          style: { fontSize: '12px', color: '#596881' },
        },
        {
          props: { vocab: 'loginRightTitle' },
          style: { fontSize: '32px', color: '#ffffff', fontWeight: '600' },
        },
        {
          props: { vocab: 'loginRightLogoText' },
          style: {
            fontSize: '42px',
            color: '#B8FFB0',
            fontWeight: '600',
            mt: '-10px',
          },
        },
        {
          props: { vocab: 'loginRightText' },
          style: {
            color: '#ffffff',
            opacity: '70%',
            fontWeight: '400',
            lineHeight: '21px',
          },
        },
        {
          props: { vocab: 'loginRightTextBtm' },
          style: { color: '#FFFFFF', fontSize: '18px' },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#C5CFDD',
          marginRight: '-5px',
          border: '1.5px',
          fontSize: '140px',
          '&.Mui-checked': {
            color: '#00524F',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',
          color: '#3E4A60',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '36px',
          width: '155px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { vocab: 'loginBtn' },
          style: {
            position: 'relative',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0)), #00524F',
            padding: '10px 20px',
            borderRadius: '20px',

            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '1.5px',
              backgroundColor: 'rgba(255,255,255,0.33)',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            },

            width: '464px',
            height: '40px',
            textTransform: 'none',
            marginBottom: '20px',
            boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.4)',
          },
        },
      ],
    },
  },
});

export default theme;

import '@mui/material/Typography';
import '@mui/material/Button';
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    forgetText: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    loginBtn: true;
  }
}

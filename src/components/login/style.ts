import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "@mui/lab/LoadingButton";
import { Select } from "@mui/material";
import { keyframes } from "@mui/material/styles";

const enter = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.55);
  }
  70% {
    opacity: 1;
    transform: scale(1.06);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -8px;
  }
`;

const dashMove = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const linePulse = keyframes`
  0%, 100% {
    opacity: .45;
  }
  50% {
    opacity: .9;
  }
`;

export const HeroWrapper = styled(Box)({
  position: "relative",
  width: 800,
  height: 548,
  overflow: "hidden",
  background: "transperent",
});
export const LinesSvg = styled("svg")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  pointerEvents: "none",

  path: {
    stroke: "rgba(255,255,255,0.72)",
    strokeWidth: 1.2,
    strokeDasharray: "4 5",
    strokeLinecap: "round",
    animation: "dashMove 18s linear infinite",
  },

  "@keyframes dashMove": {
    from: {
      strokeDashoffset: 0,
    },
    to: {
      strokeDashoffset: -120,
    },
  },
});
export const CenterLogo = styled(Box)({
  position: "absolute",
  left: 321,
  top: 193,
  width: 173,
  height: 173,
  borderRadius: "50%",
  background: "#FFFFFF",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${enter} .75s ease both`,

  img: {
    width: 118,
    height: "auto",
  },
});

export const LogoBubble = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  background: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 5,
  animation: `${enter} .75s ease both, ${float} 4s ease-in-out infinite`,

  img: {
    maxWidth: "68%",
    maxHeight: "68%",
    objectFit: "contain",
    zIndex: 2,
  },

  "&.robosell": {
    width: 94,
    height: 94,
    left: 96,
    top: 178,
    animationDelay: ".1s, 0s",
  },

  "&.m-top": {
    width: 92,
    height: 92,
    left: 286,
    top: 78,
    animationDelay: ".2s, .4s",
  },

  "&.wb": {
    width: 61,
    height: 61,
    left: 459,
    top: 84,
    animationDelay: ".3s, .8s",
  },

  "&.ozon-big": {
    width: 92,
    height: 92,
    left: 594,
    top: 127,
    animationDelay: ".4s, 1.1s",
  },

  "&.uzum-big": {
    width: 92,
    height: 92,
    left: 584,
    top: 274,
    animationDelay: ".5s, 1.4s",
  },

  "&.red": {
    width: 94,
    height: 94,
    left: 128,
    top: 377,
    animationDelay: ".6s, 1.7s",
  },

  "&.ozon-small": {
    width: 59,
    height: 59,
    left: 210,
    top: 279,
    animationDelay: ".7s, 2s",
  },

  "&.uzum-small": {
    width: 58,
    height: 58,
    left: 303,
    top: 400,
    animationDelay: ".8s, 2.2s",
  },

  "&.m-small": {
    width: 58,
    height: 58,
    left: 487,
    top: 400,
    animationDelay: ".9s, 2.4s",
  },
});

export const DashedCircle = styled(Box)({
  position: "absolute",
  inset: -14,
  borderRadius: "50%",
  border: "2px dashed rgba(255,255,255,.82)",
  animation: `${dashMove} 18s linear infinite`,
});

export const CurveLine = styled(Box)({
  position: "absolute",
  border: "1.5px dashed rgba(255,255,255,.55)",
  borderColor: "rgba(255,255,255,.55) transparent transparent transparent",
  borderRadius: "50%",
  zIndex: 1,
  animation: `${linePulse} 3s ease-in-out infinite`,

  "&.curve-1": {
    width: 200,
    height: 110,
    left: 166,
    top: 216,
    transform: "rotate(-22deg)",
  },

  "&.curve-2": {
    width: 190,
    height: 110,
    left: 345,
    top: 132,
    transform: "rotate(104deg)",
  },

  "&.curve-3": {
    width: 210,
    height: 115,
    left: 487,
    top: 180,
    transform: "rotate(21deg)",
  },

  "&.curve-4": {
    width: 210,
    height: 125,
    left: 224,
    top: 300,
    transform: "rotate(-38deg)",
  },

  "&.curve-5": {
    width: 190,
    height: 130,
    left: 386,
    top: 304,
    transform: "rotate(72deg)",
  },
});
export const Container = styled("form")<{ isLogin: boolean }>`
  flex: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
`;

export const LoginFormCenter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LoginFormOptions = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AutofillOverride = styled("div")`
  display: contents;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 12px;
    font-size: 14px;
    background-color: white;

    &.Mui-focused fieldset {
      border-color: #60788f;
      box-shadow: 0px 0px 3px #60788f;
    }
  }
`;

export const FieldLabel = styled(Typography)`
  color: #111625;
  margin-bottom: 3px;
  font-size: 14px;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Loader = styled(CircularProgress)<{ isLogin: boolean }>(
  ({ isLogin }) => ({
    color: isLogin ? "gray" : "blue",
  }),
);

export const StyledLoginButton = styled(LoadingButton)`
  width: 100%;
  min-height: 40px;
  border-radius: 12px;
  text-transform: none;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export const RightWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  border: none;
  padding: 16px;
`;

export const RightCard = styled(Box)`
  background: linear-gradient(to bottom, #00524f, #0f8484);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 40px 55px;
`;

export const RightContent = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  min-height: 0;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoBox = styled(Box)``;

export const TitleBlock = styled(Box)``;

export const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledImage = styled("img")`
  width: 70%;
`;

export const LoginRightLogoText = styled(Typography)`
  font-size: 42px !important;
  font-weight: 600;
  mt: "-10px";
  color: #b8ffb0;
`;

export const LoginRightTitle = styled(Typography)`
  color: white;
  font-weight: 600;

  font-size: 32px !important;
`;
export const LoginRightText = styled(Typography)`
  color: white;
`;

export const LoginRightTextBtm = styled(Typography)`
  color: white;
`;

export const LoginLeftNoAcc = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LanguageSelectWrap = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const LanguageSelect = styled(Select)`
  height: 36px;
  border-radius: 8px;
  background-color: #F5F5F5;
  border: #E4E4E4 solid 1px;
  '&::before': {
    border: 'none',
  },
`;

export const LoginOuter = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginTitleWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginFieldsWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterWrap = styled(Box)`
  display: flex;
  justify-content: center;
  text-size: 10px !important;
  color: #7d879c;
`;

export const FooterInner = styled(Box)`
  display: flex;
  text-size: 10px !important;

  gap: 24px;
`;

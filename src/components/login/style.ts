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

export const Container = styled("form")<{ isLogin: boolean }>`
  flex: 1;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(16px, 2vw, 24px);
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
  gap: 12px;

  @media (max-width: 430px) {
    align-items: flex-start;
    flex-direction: column;
  }
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
  min-height: 100vh;
  border: none;
  padding: clamp(10px, 1vw, 16px);
  box-sizing: border-box;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightCard = styled(Box)`
  background: linear-gradient(to bottom, #00524f, #0f8484);
  width: 100%;
  height: calc(100vh - clamp(20px, 2vw, 32px));
  border-radius: 15px;
  padding: clamp(28px, 3vw, 55px);
  box-sizing: border-box;
  overflow: hidden;
`;

export const RightContent = styled(Box)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  gap: clamp(10px, 1.3vw, 22px);
  overflow: hidden;
  min-height: 0;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoBox = styled(Box)`
  display: flex;
  align-items: center;

  svg {
    width: clamp(58px, 4vw, 82px);
    height: auto;
  }
`;

export const TitleBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HeroWrapper = styled(Box)`
  position: relative;
  width: min(800px, 100%);
  aspect-ratio: 800 / 548;
  height: auto;
  max-height: 100%;
  overflow: hidden;
  background: transparent;
  margin: 0 auto;
  transform-origin: center;

  @media (max-height: 850px) {
    width: min(720px, 100%);
  }

  @media (max-height: 760px) {
    width: min(640px, 100%);
  }

  @media (max-height: 680px) {
    width: min(560px, 100%);
  }

  @media (max-width: 1200px) {
    width: min(680px, 100%);
  }

  @media (max-width: 1050px) {
    width: min(600px, 100%);
  }
`;

export const LinesSvg = styled("svg")`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  path {
    stroke: rgba(255, 255, 255, 0.72);
    stroke-width: 1.2;
    stroke-dasharray: 4 5;
    stroke-linecap: round;
    animation: dashMove 18s linear infinite;
  }

  @keyframes dashMove {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -120;
    }
  }
`;

export const CenterLogo = styled(Box)`
  position: absolute;
  left: 40.125%;
  top: 35.22%;
  width: 21.625%;
  aspect-ratio: 1;
  height: auto;
  border-radius: 50%;
  background: #ffffff;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${enter} 0.75s ease both;

  svg,
  img {
    width: 68%;
    height: auto;
  }
`;

export const LogoBubble = styled(Box)`
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  animation:
    ${enter} 0.75s ease both,
    ${float} 4s ease-in-out infinite;

  svg,
  img {
    max-width: 68%;
    max-height: 68%;
    object-fit: contain;
    z-index: 2;
  }

  &.robosell {
    width: 11.75%;
    aspect-ratio: 1;
    left: 12%;
    top: 32.48%;
    animation-delay: 0.1s, 0s;
  }

  &.m-top {
    width: 11.5%;
    aspect-ratio: 1;
    left: 35.75%;
    top: 14.23%;
    animation-delay: 0.2s, 0.4s;
  }

  &.wb {
    width: 7.625%;
    aspect-ratio: 1;
    left: 57.37%;
    top: 15.33%;
    animation-delay: 0.3s, 0.8s;
  }

  &.ozon-big {
    width: 11.5%;
    aspect-ratio: 1;
    left: 74.25%;
    top: 23.18%;
    animation-delay: 0.4s, 1.1s;
  }

  &.uzum-big {
    width: 11.5%;
    aspect-ratio: 1;
    left: 73%;
    top: 50%;
    animation-delay: 0.5s, 1.4s;
  }

  &.red {
    width: 11.75%;
    aspect-ratio: 1;
    left: 16%;
    top: 68.8%;
    animation-delay: 0.6s, 1.7s;
  }

  &.ozon-small {
    width: 7.375%;
    aspect-ratio: 1;
    left: 26.25%;
    top: 50.91%;
    animation-delay: 0.7s, 2s;
  }

  &.uzum-small {
    width: 7.25%;
    aspect-ratio: 1;
    left: 37.87%;
    top: 72.99%;
    animation-delay: 0.8s, 2.2s;
  }

  &.m-small {
    width: 7.25%;
    aspect-ratio: 1;
    left: 60.87%;
    top: 72.99%;
    animation-delay: 0.9s, 2.4s;
  }
`;

export const DashedCircle = styled(Box)`
  position: absolute;
  inset: -15%;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.82);
  animation: ${dashMove} 18s linear infinite;
`;

export const CurveLine = styled(Box)`
  position: absolute;
  border: 1.5px dashed rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.55) transparent transparent transparent;
  border-radius: 50%;
  z-index: 1;
  animation: ${linePulse} 3s ease-in-out infinite;

  &.curve-1 {
    width: 200px;
    height: 110px;
    left: 166px;
    top: 216px;
    transform: rotate(-22deg);
  }

  &.curve-2 {
    width: 190px;
    height: 110px;
    left: 345px;
    top: 132px;
    transform: rotate(104deg);
  }

  &.curve-3 {
    width: 210px;
    height: 115px;
    left: 487px;
    top: 180px;
    transform: rotate(21deg);
  }

  &.curve-4 {
    width: 210px;
    height: 125px;
    left: 224px;
    top: 300px;
    transform: rotate(-38deg);
  }

  &.curve-5 {
    width: 190px;
    height: 130px;
    left: 386px;
    top: 304px;
    transform: rotate(72deg);
  }
`;

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
  font-size: clamp(30px, 3vw, 42px) !important;
  font-weight: 600;
  color: #b8ffb0;
  line-height: 1;
`;

export const LoginRightTitle = styled(Typography)`
  color: white;
  font-weight: 600;
  font-size: clamp(24px, 2.3vw, 32px) !important;
  line-height: 1.2;
`;
export const LoginRightText = styled(Typography)({
  color: "white",
  fontSize: "16px",
  lineHeight: 1.45,
  opacity: 0.7,
  fontWeight: 400,
  fontFamily: "inter",
});

export const LoginRightTextBtm = styled(Typography)`
  color: white;
  font-size: 18px !important;
`;

export const LoginLeftNoAcc = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

export const LanguageSelectWrap = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const LanguageSelect = styled(Select)`
  height: 36px;
  border-radius: 8px;
  background-color: #f5f5f5;
  border: #e4e4e4 solid 1px;

  &::before {
    border: none;
  }
`;

export const LoginOuter = styled(Box)`
  width: min(100%, 540px);
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
  color: #7d879c;
`;

export const FooterInner = styled(Box)`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

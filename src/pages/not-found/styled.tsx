// styled.ts

import styled from "styled-components";
import { Box, Button } from "@mui/material";

interface GlowProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const PageWrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 24px;
`;

export const GradientBlur = styled(Box)`
  position: absolute;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle,
    rgba(0, 82, 79, 0.08) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  filter: blur(10px);
  pointer-events: none;
`;

export const GlowCircle = styled(Box)<GlowProps>`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(0, 82, 79, 0.12) 0%,
    rgba(255, 255, 255, 0) 72%
  );

  filter: blur(18px);

  top: ${({ top }) => top || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  right: ${({ right }) => right || "unset"};

  pointer-events: none;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const ContentCard = styled(Box)`
  width: 100%;
  max-width: 760px;

  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 40px;

  padding: 64px;

  position: relative;
  overflow: hidden;

  box-shadow:
    0 10px 40px rgba(0, 82, 79, 0.06),
    0 2px 10px rgba(0, 82, 79, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.95),
      rgba(240, 255, 250, 0.7)
    );

    z-index: 0;
  }

  @media (max-width: 992px) {
    padding: 56px 40px;
    border-radius: 32px;
  }

  @media (max-width: 600px) {
    padding: 42px 24px;
    border-radius: 28px;
  }
`;

export const ContentWrap = styled(Box)`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const SmallBadge = styled(Box)`
  position: absolute;
  top: 28px;
  left: 28px;
  z-index: 3;

  height: 34px;
  padding: 0 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(220, 235, 234, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;

  color: #00524f;

  box-shadow: 0 8px 24px rgba(0, 82, 79, 0.06);

  @media (max-width: 600px) {
    top: 20px;
    left: 20px;
  }
`;

export const CodeText = styled.h1`
  margin: 0;
  line-height: 1;

  font-size: clamp(110px, 18vw, 210px);
  font-weight: 900;
  letter-spacing: -0.08em;

  color: #00524f;

  text-shadow: 0 12px 40px rgba(0, 82, 79, 0.12);

  @media (max-width: 600px) {
    font-size: 110px;
  }
`;

export const Title = styled.h2`
  margin: 18px 0 14px;

  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.04em;

  color: #111827;
`;

export const Description = styled.p`
  max-width: 560px;
  margin: 0 auto;

  font-size: 16px;
  line-height: 1.8;
  font-weight: 500;

  color: #667085;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const Actions = styled(Box)`
  margin-top: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled(Button)`
  height: 56px !important;
  padding: 0 26px !important;

  border-radius: 18px !important;
  text-transform: none !important;

  font-size: 15px !important;
  font-weight: 700 !important;

  background: #00524f !important;
  color: #ffffff !important;

  box-shadow:
    0 14px 30px rgba(0, 82, 79, 0.22),
    0 6px 14px rgba(0, 82, 79, 0.12) !important;

  &:hover {
    background: #006b66 !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled(Button)`
  height: 56px !important;
  padding: 0 24px !important;

  border-radius: 18px !important;
  text-transform: none !important;

  font-size: 15px !important;
  font-weight: 700 !important;

  background: #ffffff !important;

  border: 1px solid rgba(0, 82, 79, 0.14) !important;

  color: #00524f !important;

  box-shadow:
    0 8px 24px rgba(0, 82, 79, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;

  &:hover {
    background: #f7fffe !important;
    border-color: rgba(0, 82, 79, 0.22) !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

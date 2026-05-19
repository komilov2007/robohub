import { Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import IconArrow from "@/assets/icons/icon-arrow.svg?react";

import {
  Arrow,
  CenterWrap,
  Description,
  FormWrap,
  OtpInput,
  OtpRow,
  ResendText,
  SubmitButton,
  TimeText,
  Title,
} from "@/pages/auth/otp-verificate/styled";

const OtpForm = ({
  t,
  control,
  handleSubmit,
  onSubmit,
  verifyLoading,
  contact,
  otpValues,
  handleOtpChange,
  inputRefs,
  isExpired,
  formatTime,
}: any) => {
  const navigate = useNavigate();

  return (
    <CenterWrap>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <FormWrap>
          <Arrow onClick={() => navigate(-1)}>
            <IconArrow />
          </Arrow>

          <Title>{t("otp_verify_title") || "OTP tasdiqlash"}</Title>

          <Description>
            {t("otp_sent_text") || "Tasdiqlash kodini sizning"} <b>{contact}</b>{" "}
            {t("otp_sent_text_end") || "ga yubordik, kodni kiriting"}
          </Description>

          <Controller
            name="otp"
            control={control}
            render={() => (
              <OtpRow>
                {otpValues.map((value: string, index: number) => (
                  <OtpInput
                    key={index}
                    disabled={isExpired}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    value={value}
                    maxLength={1}
                    inputMode="numeric"
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !otpValues[index] &&
                        index > 0
                      ) {
                        inputRefs.current[index - 1]?.focus();
                      }
                    }}
                  />
                ))}
              </OtpRow>
            )}
          />

          <SubmitButton type="submit" disabled={verifyLoading || isExpired}>
            {verifyLoading
              ? "Loading..."
              : t("otp_verify_button") || "Tasdiqlash"}
          </SubmitButton>

          <ResendText>
            {t("otp_resend_text") || "Agar kelmagan bo‘lsa"}{" "}
            <TimeText>{formatTime}</TimeText>
          </ResendText>
        </FormWrap>
      </form>
    </CenterWrap>
  );
};

export default OtpForm;

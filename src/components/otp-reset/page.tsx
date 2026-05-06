import Container from "@mui/material/Container";

import useMediaQuery from "@mui/material/useMediaQuery";

import { Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { LoginRight } from "../login/loginright";

import { usePage } from "./usePage";

import IconArrow from "@/assets/icons/icon-arrow.svg?react";

import {
  PageWrap,
  LeftSide,
  RightSide,
  CenterWrap,
  FormWrap,
  Title,
  Description,
  OtpRow,
  OtpInput,
  SubmitButton,
  ResendText,
  TimeText,
  Footer,
  FooterText,
  Arrow,
  LanguageSelectWrap,
  LanguageSelect,
  StyledMenuItem,
} from "./styled";

const OtpVerifyPage = () => {
  const {
    t,

    control,
    handleSubmit,
    onSubmit,
    i18n,

    languages,

    handleLangChange,
    verifyLoading,

    contact,

    otpValues,

    handleOtpChange,

    handleKeyDown,

    inputRefs,

    isExpired,
    formatTime,
  } = usePage();

  const isMobile = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate();

  return (
    <Container maxWidth={false} disableGutters>
      <PageWrap>
        <LeftSide
          sx={{
            width: isMobile ? "100%" : "50%",
          }}
        >
          {/* HEADER */}
          <LanguageSelectWrap>
            <LanguageSelect
              value={i18n.language}
              onChange={(e) => handleLangChange(e.target.value as string)}
            >
              {languages.map(({ value, label, Icon }) => (
                <StyledMenuItem key={value} value={value}>
                  <Icon /> {label}
                </StyledMenuItem>
              ))}
            </LanguageSelect>
          </LanguageSelectWrap>

          {/* CENTER */}
          <CenterWrap>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <FormWrap>
                {/* BACK */}
                <Arrow onClick={() => navigate(-1)}>
                  <IconArrow />
                </Arrow>

                {/* TITLE */}
                <Title>{t("otp_verify_title")}</Title>

                {/* DESCRIPTION */}
                <Description>
                  {t("otp_sent_text")} <b>{contact}</b> {t("otp_sent_text_end")}
                </Description>

                {/* OTP INPUTS */}
                <Controller
                  name="otp"
                  control={control}
                  render={() => (
                    <OtpRow>
                      {otpValues.map((value, index) => (
                        <OtpInput
                          key={index}
                          disabled={isExpired}
                          ref={(el) => {
                            inputRefs.current[index] = el;
                          }}
                          value={value}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          maxLength={1}
                          inputMode="numeric"
                        />
                      ))}
                    </OtpRow>
                  )}
                />

                {/* BUTTON */}
                <SubmitButton
                  type="submit"
                  disabled={verifyLoading || isExpired}
                >
                  {verifyLoading ? t("loading") : t("otp_verify_button")}
                </SubmitButton>

                {/* TIMER */}
                <ResendText>
                  {t("otp_resend_text")} <TimeText>{formatTime}</TimeText>
                </ResendText>
              </FormWrap>
            </form>
          </CenterWrap>

          {/* FOOTER */}
          <Footer>
            <FooterText>© {new Date().getFullYear()} Robohub</FooterText>

            <FooterText>{t("privacy_policy")}</FooterText>

            <FooterText>{t("support")}</FooterText>
          </Footer>
        </LeftSide>

        {/* RIGHT */}
        {!isMobile && (
          <RightSide>
            <LoginRight />
          </RightSide>
        )}
      </PageWrap>
    </Container>
  );
};

export default OtpVerifyPage;

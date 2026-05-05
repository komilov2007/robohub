import Container from "@mui/material/Container";
import { Controller } from "react-hook-form";
import { LoginRight } from "../login/loginright";
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
  Footer,
  FooterText,
  Arrow,
} from "./styled";

import useMediaQuery from "@mui/material/useMediaQuery";
import { HeaderArea } from "../register/styled";
import {
  LanguageSelect,
  LanguageSelectWrap,
  StyledMenuItem,
} from "../login/style";
import { useNavigate } from "react-router-dom";
import { usePage } from "./usePage";

const OtpVerifyPage = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    verifyLoading,
    contact,
    otpValues,
    handleOtpChange,
    inputRefs,
    handleLangChange,
  } = usePage();

  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} disableGutters>
      <PageWrap>
        <LeftSide sx={{ width: isMobile ? "100%" : "50%" }}>
          <HeaderArea>
            <LanguageSelectWrap>
              <LanguageSelect
                defaultValue="uz"
                onChange={(e) => handleLangChange(e.target.value as string)}
              >
                <StyledMenuItem value="uz">UZ</StyledMenuItem>
                <StyledMenuItem value="ru">RU</StyledMenuItem>
                <StyledMenuItem value="en">EN</StyledMenuItem>
              </LanguageSelect>
            </LanguageSelectWrap>
          </HeaderArea>

          <CenterWrap>
            <form style={{ width: "100%", maxWidth: "400px" }}>
              <FormWrap>
                <Arrow onClick={() => navigate(-1)}>
                  <IconArrow />
                </Arrow>

                <Title>OTP tasdiqlash</Title>

                <Description>
                  Kod yuborildi <b>{contact}</b>
                </Description>

                <Controller
                  name="otp"
                  control={control}
                  render={() => (
                    <OtpRow>
                      {otpValues.map((value, index) => (
                        <OtpInput
                          key={index}
                          ref={(el: HTMLInputElement | null) => {
                            inputRefs.current[index] = el;
                          }}
                          value={value}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          maxLength={1}
                        />
                      ))}
                    </OtpRow>
                  )}
                />

                <SubmitButton
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={verifyLoading}
                >
                  {verifyLoading ? "Loading..." : "Tasdiqlash"}
                </SubmitButton>
              </FormWrap>
            </form>
          </CenterWrap>

          <Footer>
            <FooterText>© {new Date().getFullYear()} Robohub</FooterText>
          </Footer>
        </LeftSide>

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

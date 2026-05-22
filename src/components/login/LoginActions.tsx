import {
  StyledLoginButton,
  LoginLeftNoAcc,
  Typo,
  NoAccountText,
} from "./style";
import { ROUTERS } from "@/constants/router";

const LoginActions = ({ isSubmitting, t }: any) => {
  return (
    <>
      <StyledLoginButton
        fullWidth
        type="submit"
        loading={isSubmitting}
        loadingPosition="center"
      >
        <span style={{ opacity: isSubmitting ? 0 : 1 }}>{t("enter")}</span>
      </StyledLoginButton>

      <LoginLeftNoAcc>
        <NoAccountText>{t("no_account")}</NoAccountText>

        <Typo to={ROUTERS.register}>{t("register")}</Typo>
      </LoginLeftNoAcc>
    </>
  );
};

export default LoginActions;

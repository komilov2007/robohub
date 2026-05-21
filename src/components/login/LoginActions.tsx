import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { StyledLoginButton, LoginLeftNoAcc } from "./style";
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
        <Typography vocab="noAccaunt">{t("no_account")}</Typography>

        <Typography component={Link} to={ROUTERS.register} vocab="loginRgt">
          {t("register")}
        </Typography>
      </LoginLeftNoAcc>
    </>
  );
};

export default LoginActions;

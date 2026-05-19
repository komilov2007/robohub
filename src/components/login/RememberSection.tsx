import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Link } from "react-router-dom";

import IconChecBox from "@/assets/icons/icon-cheakbox-box.svg?react";
import IconChecBoxActive from "@/assets/icons/icon-cheakbox-active.svg?react";

import { RemeberForgetText, CheckboxIconWrapper } from "./style";

const RememberSection = ({ rememberMe, t }: any) => {
  return (
    <RemeberForgetText>
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe.value}
            onChange={rememberMe.toggle}
            disableRipple
            icon={
              <CheckboxIconWrapper>
                <IconChecBox />
              </CheckboxIconWrapper>
            }
            checkedIcon={
              <CheckboxIconWrapper>
                <IconChecBoxActive />
              </CheckboxIconWrapper>
            }
          />
        }
        label={<Typography variant="body2">{t("remember_me")}</Typography>}
      />

      <Typography component={Link} to="/forget-password" variant="forgetText">
        {t("forgot_password")}
      </Typography>
    </RemeberForgetText>
  );
};

export default RememberSection;

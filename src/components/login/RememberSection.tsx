import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconChecBox from "@/assets/icons/icon-cheakbox-box.svg?react";
import IconChecBoxActive from "@/assets/icons/icon-cheakbox-active.svg?react";

import { RemeberForgetText, CheckboxIconWrapper, TYPO } from "./style";

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

      <TYPO to="/forget-password">{t("forgot_password")}</TYPO>
    </RemeberForgetText>
  );
};

export default RememberSection;

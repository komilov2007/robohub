import { Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import IconUser from "@/assets/icons/user.svg?react";
import IconLock from "@/assets/icons/lock.svg?react";

import { StyledTextField, FieldLabel } from "./style";

const LoginFields = ({ control, t, passwordVisibility }: any) => {
  return (
    <>
      <Box>
        <FieldLabel>{t("login")}</FieldLabel>

        <Controller
          name="contact"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              {...field}
              fullWidth
              placeholder={t("login_placeholder")}
              error={fieldState.invalid}
              helperText={t(fieldState.error?.message as string)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconUser />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
      </Box>

      <Box>
        <FieldLabel>{t("password")}</FieldLabel>

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              {...field}
              fullWidth
              type={passwordVisibility.value ? "text" : "password"}
              placeholder={t("password_placeholder")}
              error={fieldState.invalid}
              helperText={t(fieldState.error?.message as string)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconLock />
                    </InputAdornment>
                  ),

                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={passwordVisibility.toggle}
                      >
                        {passwordVisibility.value ? (
                          <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                        ) : (
                          <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
      </Box>
    </>
  );
};

export default LoginFields;

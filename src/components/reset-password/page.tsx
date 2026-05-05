import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { usePage } from "./usePage";

import {
  PageWrap,
  FormWrap,
  Title,
  Description,
  FieldWrap,
  StyledTextField,
  PasswordEyeButton,
  StrengthBar,
  RuleWrap,
  RuleItem,
  RuleDot,
  SubmitButton,
} from "./styled";

type FormValues = {
  password: string;
  confirm: string;
};

const ResetPasswordPage = () => {
  const { control, handleSubmit, watch } = useForm<FormValues>();
  const { onSubmit, loading, getPasswordChecks, getStrength } = usePage();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const password = watch("password") || "";

  const checks = getPasswordChecks(password);
  const strength = getStrength(checks);

  return (
    <PageWrap>
      <FormWrap>
        <Title>Parolingizni yangilang</Title>
        <Description>Yangi parolingizni kiriting.</Description>

        <form onSubmit={handleSubmit((d) => onSubmit(d.password, d.confirm))}>
          {/* 🔥 PASSWORD */}
          <FieldWrap>Yangi parol</FieldWrap>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                {...field}
                type={show ? "text" : "password"}
                placeholder="Parol"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <PasswordEyeButton onClick={() => setShow((p) => !p)}>
                          {show ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </PasswordEyeButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />

          {/* 🔥 STRENGTH */}
          <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
            {[1, 2, 3, 4].map((l) => (
              <StrengthBar key={l} active={strength.score >= l} />
            ))}
          </div>

          <div style={{ fontSize: 12, color: "#00524F" }}>{strength.label}</div>

          {/* 🔥 RULES */}
          <RuleWrap>
            <RuleItem>
              <RuleDot active={checks.minLength}>
                {checks.minLength && "✓"}
              </RuleDot>
              <span>Kamida 8 ta belgi</span>
            </RuleItem>

            <RuleItem>
              <RuleDot active={checks.hasNumber}>
                {checks.hasNumber && "✓"}
              </RuleDot>
              <span>Raqamlar</span>
            </RuleItem>

            <RuleItem>
              <RuleDot active={checks.hasUppercase}>
                {checks.hasUppercase && "✓"}
              </RuleDot>
              <span>Katta harf</span>
            </RuleItem>

            <RuleItem>
              <RuleDot active={checks.hasSpecial}>
                {checks.hasSpecial && "✓"}
              </RuleDot>
              <span>Maxsus belgi</span>
            </RuleItem>
          </RuleWrap>

          {/* 🔥 CONFIRM PASSWORD */}
          <FieldWrap>Parolni tasdiqlang</FieldWrap>

          <Controller
            name="confirm"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                {...field}
                type={show2 ? "text" : "password"}
                placeholder="Parolni qayta kiriting"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <PasswordEyeButton onClick={() => setShow2((p) => !p)}>
                          {show2 ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </PasswordEyeButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Loading..." : "Parolni yangilash"}
          </SubmitButton>
        </form>
      </FormWrap>
    </PageWrap>
  );
};

export default ResetPasswordPage;

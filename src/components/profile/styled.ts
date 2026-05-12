import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  background: "#FFFFFF",
  padding: "0 20px 20px",
  fontFamily: "Inter, sans-serif",
  overflowX: "hidden",

  "@media (max-width: 768px)": {
    padding: "0 14px 18px",
  },

  "@media (max-width: 480px)": {
    padding: "0 12px 16px",
  },
});

export const TabsRow = styled(Box)({
  height: 58,
  display: "flex",
  alignItems: "flex-end",
  gap: 14,
  borderBottom: "1px solid #CBD5E1",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 768px)": {
    height: "auto",
    minHeight: 56,
    alignItems: "flex-end",
    gap: 8,
  },
});

export const TabButton = styled(Button)<{ active?: boolean }>(({ active }) => ({
  height: 42,
  padding: "0 10px 12px",
  minWidth: "auto",
  borderRadius: 0,
  background: "transparent",
  color: active ? "#006B64" : "#7585A3",
  fontSize: 16,
  fontWeight: active ? 700 : 500,
  textTransform: "none",
  gap: 8,
  borderBottom: active ? "2px solid #006B64" : "2px solid transparent",
  marginLeft: "20px",
  whiteSpace: "nowrap",
  flexShrink: 0,

  "&:hover": {
    background: "transparent",
  },

  "@media (max-width: 768px)": {
    height: 40,
    padding: "0 8px 10px",
    marginLeft: 0,
    fontSize: 14,
    gap: 6,
  },

  "@media (max-width: 420px)": {
    fontSize: 13,
  },
}));

export const Separator = styled(Box)({
  width: 1,
  height: 22,
  background: "#CBD5E1",
  marginBottom: 15,
  flexShrink: 0,

  "@media (max-width: 768px)": {
    height: 18,
    marginBottom: 13,
  },
});

export const ContentCard = styled(Box)({
  maxWidth: "100%",

  "&& > .MuiBox-root": {
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  "@media (max-width: 700px)": {
    "&& > .MuiBox-root": {
      width: "100%",
      padding: "16px 14px 18px",
    },
  },
});

export const FormGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
  marginBottom: 18,
  position: "relative",
  width: "610px",
  maxWidth: "100%",

  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
    width: "100%",
    gap: 14,
  },
});

export const FieldBox = styled(Box)({
  minWidth: 0,

  "@media (max-width: 700px)": {
    "& > .MuiBox-root": {
      flexDirection: "column",
      gap: "12px",
    },
  },
});

export const FieldLabel = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#101828",
  marginBottom: 8,
});
export const ProfileInputPhone = styled(TextField)({
  width: "67%",
  minWidth: 0,

  ".MuiInputBase-root": {
    height: 38,
    borderRadius: 8,
    fontSize: 14,
    color: "#101828",
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#00524F",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
    transition: "background-color 5000s ease-in-out 0s",
  },

  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },

  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },

  "@media (max-width: 700px)": {
    width: "100%",
  },
});
export const ProfileInput = styled(TextField)({
  width: "100%",
  minWidth: 0,

  ".MuiInputBase-root": {
    height: 38,
    borderRadius: 8,
    fontSize: 14,
    color: "#101828",
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#00524F",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
    transition: "background-color 5000s ease-in-out 0s",
  },

  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },

  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },
});

export const EmailText = styled(Typography)({
  fontSize: 14,
  color: "#8A9BB8",
});

export const ActionsRow = styled(Box)({
  display: "flex",
  gap: 10,
  marginTop: 22,
  paddingRight: 8,

  "@media (max-width: 700px)": {
    marginTop: 18,
    paddingRight: 0,

    "& > .MuiBox-root": {
      width: "100%",
      flexWrap: "wrap",
    },
  },
});

export const CancelButton = styled(Button)({
  height: 38,
  padding: "0 18px",
  border: "1px solid #D8E2F0",
  borderRadius: 8,
  color: "#101828",
  background: "#FFFFFF",
  fontSize: 14,
  fontWeight: 500,
  textTransform: "none",
  marginBottom: "-10px",
  "&:hover": {
    background: "#F8FAFC",
  },

  "@media (max-width: 480px)": {
    width: "100%",
    minWidth: 0,
  },
});

export const SaveButton = styled(Button)({
  height: 38,
  padding: "0 18px",
  borderRadius: 8,
  color: "#FFFFFF",
  background: "#006B64",
  fontSize: 14,
  fontWeight: 500,
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
  transition: "all 0.2s ease",

  "&:hover": {
    background: "#00524F",
  },

  "&:active": {
    transform: "scale(0.97)",
  },

  "&.Mui-disabled": {
    background: "#0A3F3C",
    color: "#A7D1CE",
  },

  "@media (max-width: 480px)": {
    width: "100%",
    minWidth: 0,
    justifyContent: "center",
  },
});
export const LanguageList = styled(Box)({
  width: 240,
  marginTop: 22,
  display: "flex",
  flexDirection: "column",
  gap: 22,

  "@media (max-width: 480px)": {
    width: "100%",
    gap: 18,
  },
});

export const LanguageItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  fontWeight: 600,
  color: "#101828",
  cursor: "pointer",
});
export const LanguageLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});
export const LangRadio = styled(Box)<{ checked?: boolean }>(({ checked }) => ({
  width: 18,
  height: 18,
  borderRadius: "50%",
  border: checked ? "1px solid #006B64" : "1px solid #CBD5E1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&::after": {
    content: '""',
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: checked ? "#006B64" : "transparent",
  },
}));

export const PasswordInput = styled(TextField)({
  maxWidth: 630,
  width: "100%",

  ".MuiInputBase-root": {
    height: 40,
    borderRadius: 12,
    fontSize: 14,
    color: "#101828",
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#D8E2F0",
  },

  input: {
    padding: "0 16px",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
    transition: "background-color 5000s ease-in-out 0s",
  },

  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },

  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
  },

  "@media (max-width: 480px)": {
    ".MuiInputBase-root": {
      height: 38,
      borderRadius: 8,
    },
  },
});

export const EyeButton = styled(Box)({
  color: "#8A9BB8",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});
export const StrengthRow = styled(Box)({
  width: "100%",
  maxWidth: 630,
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginTop: 24,

  "@media (max-width: 480px)": {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 8,
    marginTop: 20,
  },
});

export const StrengthBar = styled(Box)({
  flex: 1,
  height: 5,
  background: "#E2E8F0",
  borderRadius: 999,
  overflow: "hidden",
});

export const StrengthFill = styled(Box)<{
  value: number;
  strengthcolor: string;
}>(({ value, strengthcolor }) => ({
  width: `${value}%`,
  height: "100%",
  background: strengthcolor,
  borderRadius: 999,
  transition: "width 0.25s ease",
}));

export const StrengthText = styled(Typography)<{ strengthcolor: string }>(
  ({ strengthcolor }) => ({
    fontSize: 15,
    fontWeight: 500,
    color: strengthcolor,
    minWidth: 52,

    "@media (max-width: 480px)": {
      fontSize: 14,
    },
  }),
);
export const StrengthLine = styled(Box)({
  width: 140,
  height: 5,
  background: "#E2E8F0",
  borderRadius: 999,
});

export const RulesGrid = styled(Box)({
  maxWidth: 620,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 14,
  columnGap: 80,
  marginTop: 20,

  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
    rowGap: 12,
    columnGap: 0,
  },
});

export const RuleItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const RuleText = styled(Typography)({
  fontSize: 15,
  color: "#63728C",

  "@media (max-width: 480px)": {
    fontSize: 14,
  },
});
export const FooterWrap = styled(Box)`
  display: flex;
  justify-content: center;
  color: #7d879c;
  @media (max-width: 350px) {
    display: flex;
    font-size: 1px;
  }
`;
export const FooterInner = styled(Box)`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1px;
`;

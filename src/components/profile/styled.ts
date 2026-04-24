// // import {
// //   Box,
// //   Button,
// //   LinearProgress,
// //   TextField,
// //   Typography,
// // } from "@mui/material";
// // import { styled } from "@mui/material/styles";

// // export const PageWrapper = styled(Box)(() => ({}));

// // export const PageTitle = styled(Typography)(() => ({
// //   height: "48px",
// //   width: "100%",
// //   borderBottom: "1px solid #E0E6F0",
// //   padding: "15px",
// //   fontWeight: 600,
// //   fontFamily: "inter",
// //   boxSizing: "border-box",
// // }));

// // export const ProfileCard = styled(Box)(() => ({
// //   width: 570,
// //   height: 236,
// //   borderRadius: "8px",
// //   border: "1px solid #E0E6F0",
// //   padding: "16px",
// //   display: "flex",
// //   flexDirection: "column",
// //   gap: "16px",
// //   boxSizing: "border-box",
// //   fontFamily: "inter",
// //   margin: "16px",
// // }));

// // export const Row = styled(Box)(() => ({
// //   display: "flex",
// //   gap: "16px",
// // }));

// // export const FieldBox = styled(Box)(() => ({
// //   flex: 1,
// // }));

// // export const Label = styled(Typography)(() => ({
// //   fontSize: 14,
// //   fontFamily: "inter",
// //   marginBottom: "6px",
// // }));

// // export const ProfileInput = styled(TextField)(() => ({
// //   "& .MuiOutlinedInput-root": {
// //     height: 36,
// //     borderRadius: "10px",
// //     "& fieldset": {
// //       border: "1px solid #E0E6F0",
// //     },
// //   },
// //   "& input": {
// //     padding: "10px",
// //     fontSize: 14,
// //     fontFamily: "inter",
// //   },
// // }));

// // export const BetweenRow = styled(Box)(() => ({
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "center",
// // }));

// // export const MutedText = styled(Typography)(() => ({
// //   fontSize: 14,
// //   fontFamily: "inter",
// //   color: "#98A2B3",
// // }));

// // export const OutlineBtn = styled(Button)(() => ({
// //   height: 36,
// //   borderRadius: "10px",
// //   border: "1px solid #E0E6F0",
// //   textTransform: "none",
// //   fontSize: 14,
// //   fontFamily: "inter",
// //   color: "#344054",
// // }));

// // export const ModalBox = styled(Box)(() => ({
// //   width: 502,
// //   height: 478,
// //   background: "#fff",
// //   borderRadius: "8px",
// //   outline: "none",
// //   display: "flex",
// //   flexDirection: "column",
// //   boxShadow: "0px 12px 32px rgba(16, 24, 40, 0.18)",
// // }));

// // export const ModalHeader = styled(Box)(() => ({
// //   height: 60,
// //   padding: "0 20px",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "space-between",
// //   borderBottom: "1px solid #E0E6F0",
// // }));

// // export const ModalTitle = styled(Typography)(() => ({
// //   fontSize: 16,
// //   fontWeight: 600,
// //   fontFamily: "inter",
// //   color: "#101828",
// // }));

// // export const CloseButton = styled(Button)(() => ({
// //   minWidth: 32,
// //   width: 32,
// //   height: 32,
// //   padding: 0,
// //   border: "1px solid #E0E6F0",
// //   borderRadius: "8px",
// //   color: "#667085",
// // }));

// // export const ModalContent = styled(Box)(() => ({
// //   flex: 1,
// //   padding: "16px 20px",
// //   boxSizing: "border-box",
// // }));

// // export const PasswordField = styled(TextField)(() => ({
// //   "& .MuiOutlinedInput-root": {
// //     height: 36,
// //     borderRadius: "8px",
// //     "& fieldset": {
// //       border: "1px solid #E0E6F0",
// //     },
// //   },
// //   "& input": {
// //     padding: "9px 12px",
// //     fontSize: 14,
// //     fontFamily: "inter",
// //   },
// // }));

// // export const StrengthRow = styled(Box)(() => ({
// //   display: "flex",
// //   alignItems: "center",
// //   gap: "8px",
// //   marginTop: "10px",
// // }));

// // export const StrengthProgress = styled(LinearProgress)<{
// //   strengthcolor: string;
// // }>(({ strengthcolor }) => ({
// //   flex: 1,
// //   height: 4,
// //   borderRadius: "6px",
// //   backgroundColor: "#E0E6F0",
// //   "& .MuiLinearProgress-bar": {
// //     backgroundColor: strengthcolor,
// //     borderRadius: "6px",
// //   },
// // }));

// // export const StrengthText = styled(Typography)<{
// //   strengthcolor: string;
// // }>(({ strengthcolor }) => ({
// //   fontSize: 12,
// //   fontWeight: 500,
// //   fontFamily: "inter",
// //   color: strengthcolor,
// // }));

// // export const RulesGrid = styled(Box)(() => ({
// //   display: "grid",
// //   gridTemplateColumns: "1fr 1fr",
// //   gap: "8px 28px",
// //   marginTop: "10px",
// //   marginBottom: "16px",
// // }));

// // export const RuleItem = styled(Box)(() => ({
// //   display: "flex",
// //   alignItems: "center",
// //   gap: "6px",
// // }));

// // export const RuleText = styled(Typography)(() => ({
// //   fontSize: 12,
// //   fontFamily: "inter",
// //   color: "#667085",
// // }));

// // export const ModalFooter = styled(Box)(() => ({
// //   height: 60,
// //   padding: "0 20px",
// //   display: "flex",
// //   justifyContent: "flex-end",
// //   alignItems: "center",
// //   gap: "10px",
// //   borderTop: "1px solid #E0E6F0",
// // }));

// // export const SubmitButton = styled(Button)(() => ({
// //   height: 36,
// //   borderRadius: "8px",
// //   background: "#0B6E69",
// //   color: "#fff",
// //   textTransform: "none",
// //   fontFamily: "inter",
// //   "&:hover": {
// //     background: "#0B6E69",
// //   },
// // }));

// import { Box, Button, TextField, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

// export const PageWrapper = styled(Box)({
//   padding: 24,
// });

// export const TabsRow = styled(Box)({
//   display: "flex",
//   gap: 24,
//   borderBottom: "1px solid #E5E7EB",
// });

// export const TabItem = styled(Typography)<{ active?: boolean }>(
//   ({ active }) => ({
//     paddingBottom: 12,
//     cursor: "pointer",
//     fontWeight: 500,
//     borderBottom: active ? "2px solid #0B6E69" : "2px solid transparent",
//     color: active ? "#0B6E69" : "#667085",
//   }),
// );

// export const ContentBox = styled(Box)({
//   marginTop: 24,
// });

// export const Row = styled(Box)({
//   display: "flex",
//   gap: 16,
// });

// export const FieldBox = styled(Box)({
//   flex: 1,
// });

// export const Label = styled(Typography)({
//   fontSize: 14,
//   marginBottom: 6,
// });

// export const ProfileInput = styled(TextField)({
//   width: "100%",
// });

// export const EmailRow = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: 20,
// });

// export const EmailText = styled(Typography)({
//   fontSize: 14,
//   color: "#667085",
// });

// export const OutlineBtn = styled(Button)({
//   border: "1px solid #D0D5DD",
// });

// export const FooterRow = styled(Box)({
//   display: "flex",
//   justifyContent: "flex-end",
//   gap: 12,
//   marginTop: 24,
// });

// export const CancelBtn = styled(Button)({
//   border: "1px solid #D0D5DD",
// });

// export const SaveBtn = styled(Button)({
//   background: "#0B6E69",
//   color: "#fff",
//   "&:hover": {
//     background: "#095B57",
//   },
// });

// export const RadioRow = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   marginBottom: 12,
// });
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  background: "#FFFFFF",
  padding: "0 20px 20px",
  borderLeft: "4px solid #006B64",
  fontFamily: "Inter, sans-serif",
});

export const TabsRow = styled(Box)({
  height: 58,
  display: "flex",
  alignItems: "flex-end",
  gap: 14,
  borderBottom: "1px solid #CBD5E1",
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

  "&:hover": {
    background: "transparent",
  },
}));

export const Separator = styled(Box)({
  width: 1,
  height: 22,
  background: "#CBD5E1",
  marginBottom: 15,
});

export const ContentCard = styled(Box)({
  position: "relative",
  marginTop: 16,
  width: 620,
  border: "1px solid #D8E2F0",
  borderRadius: 8,
  padding: "18px 18px 20px",
});

export const FormGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
  marginBottom: 18,
});

export const FieldBox = styled(Box)({});

export const FieldLabel = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#101828",
  marginBottom: 8,
});

export const ProfileInput = styled(TextField)({
  width: "100%",

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
  marginLeft: "25%",
  gap: 10,
  marginTop: 22,
  paddingRight: 8,
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

  "&:hover": {
    background: "#F8FAFC",
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

  "&:hover": {
    background: "#00524F",
  },
});

export const LanguageList = styled(Box)({
  width: 240,
  marginTop: 22,
  display: "flex",
  flexDirection: "column",
  gap: 22,
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
});

export const EyeButton = styled(Box)({
  color: "#8A9BB8",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const StrengthRow = styled(Box)({
  maxWidth: 630,
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginTop: 24,
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
}));

export const StrengthLine = styled(Box)({
  width: 140,
  height: 5,
  background: "#E2E8F0",
  borderRadius: 999,
});

export const StrengthText = styled(Typography)<{ strengthcolor: string }>(
  ({ strengthcolor }) => ({
    fontSize: 15,
    fontWeight: 500,
    color: strengthcolor,
    minWidth: 52,
  }),
);

export const RulesGrid = styled(Box)({
  maxWidth: 620,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 14,
  columnGap: 80,
  marginTop: 20,
});

export const RuleItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const RuleText = styled(Typography)({
  fontSize: 15,
  color: "#63728C",
});

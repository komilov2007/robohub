import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "@/api/api";
import toast from "react-hot-toast";
import { handleLangChange } from "@/assets/locales/i18n";

const OTP_LENGTH = 5;

export const usePage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const contact = params.get("contact") || "";

  const [verifyLoading, setVerifyLoading] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { control, handleSubmit } = useForm();

  // 🔥 INPUT CHANGE
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otpValues];

    // paste support
    if (value.length > 1) {
      const values = value.slice(0, OTP_LENGTH).split("");
      setOtpValues(values);
      return;
    }

    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // 🔥 BACKSPACE
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // 🔥 SUBMIT (FIXED)
  const onSubmit = async () => {
    const code = otpValues.join("");

    if (code.length < OTP_LENGTH) {
      toast.error("Kod 5 xonali bo‘lishi kerak");
      return;
    }

    try {
      setVerifyLoading(true);

      const res = await api.post("/account/otp/verify/", {
        contact,
        code,
      });

      console.log("✅ VERIFY RESPONSE:", res.data);

      // 🔥 TOKEN BOR-YO‘QLIGIGA QARAMAY O‘TADI
      const resetToken =
        res.data?.reset_token || res.data?.token || res.data?.data?.reset_token;

      toast.success("Tasdiqlandi");

      if (resetToken) {
        navigate(`/reset-password?token=${encodeURIComponent(resetToken)}`);
      } else {
        // 🔥 TOKEN BO‘LMASA HAM O‘TKAZAMIZ
        navigate(`/reset-password`);
      }
    } catch (err: any) {
      console.log("❌ VERIFY ERROR:", err?.response?.data);

      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "Kod noto‘g‘ri",
      );
    } finally {
      setVerifyLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    verifyLoading,
    contact,
    otpValues,
    handleOtpChange,
    handleKeyDown,
    inputRefs,
    handleLangChange,
  };
};

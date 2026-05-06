import { useEffect, useRef, useState } from "react";
import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";
import { useForm } from "react-hook-form";

import { useNavigate, useSearchParams } from "react-router-dom";

import { api } from "@/api/api";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";

import { handleLangChange } from "@/assets/locales/i18n";

const OTP_LENGTH = 5;

export const usePage = () => {
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const { t, i18n } = useTranslation();

  const contact = params.get("contact") || "";

  const [verifyLoading, setVerifyLoading] = useState(false);

  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(180);
  const isExpired = timeLeft === 0;
  const formatTime = `${Math.floor(timeLeft / 60)}:${String(
    timeLeft % 60,
  ).padStart(2, "0")}`;
  const { control, handleSubmit } = useForm();
  useEffect(() => {
    if (isExpired) return;
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isExpired]);
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otpValues];
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
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      const newOtp = [...otpValues];
      if (otpValues[index]) {
        newOtp[index] = "";
        setOtpValues(newOtp);
        return;
      }
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = "";
        setOtpValues(newOtp);
      }
    }
  };
  const onSubmit = async () => {
    const code = otpValues.join("");
    if (code.length < OTP_LENGTH) {
      toast.error(t("otp_invalid_length"));
      return;
    }
    try {
      setVerifyLoading(true);
      const resetToken = localStorage.getItem("reset_access_token") || "";
      const res = await api.post(
        "/account/otp/verify/",
        {
          contact,
          code,
        },
        {
          headers: {
            Authorization: `Bearer ${resetToken}`,
          },
        },
      );
      const newResetToken =
        res.data?.reset_token ||
        res.data?.token ||
        res.data?.tokens?.access ||
        res.data?.data?.reset_token;
      toast.success(t("otp_verified_success"));
      if (newResetToken) {
        localStorage.setItem("reset_access_token", newResetToken);
        navigate(`/reset-password?token=${encodeURIComponent(newResetToken)}`);
      } else {
        toast.error(t("token_not_received"));
        navigate("/reset-password");
      }
    } catch (err: any) {
      const detail = err?.response?.data?.detail;
      if (detail === "Invalid code provided.") {
        toast.error(t("invalid_code_provided"));
        return;
      }
      toast.error(detail || err?.response?.data?.message || t("otp_invalid"));
    } finally {
      setVerifyLoading(false);
    }
  };
  const languages = [
    { value: "uz", label: "O'zbekcha", Icon: IconFlagUz },
    { value: "ru", label: "Русский", Icon: IconFlagRu },
    { value: "en", label: "English", Icon: IconFlagEn },
  ];
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
    isExpired,
    formatTime,
    languages,
    t,
    i18n,
  };
};

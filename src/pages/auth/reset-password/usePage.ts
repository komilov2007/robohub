import { useState } from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { api } from "@/api/api";

import toast from "react-hot-toast";

import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";

export type FormValues = {
  password: string;
  confirm_password: string;
};

export const usePage = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [params] = useSearchParams();

  // ✅ QUERY TOKEN
  const queryToken = params.get("token") || "";

  // ✅ LOCAL TOKEN
  const localToken = localStorage.getItem("reset_access_token") || "";

  // ✅ TOKEN
  const token = queryToken || localToken;

  // 🔥 FORM
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  // 🔥 LOADING
  const [registerLoading, setRegisterLoading] = useState(false);

  // 🔥 SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🔥 WATCH
  const password = watch("password") || "";

  // 🔥 RULES
  const getPasswordChecks = (value: string) => ({
    minLength: value.length >= 8,

    hasNumber: /\d/.test(value),

    hasUppercase: /[A-Z]/.test(value),

    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  });

  const passwordChecks = getPasswordChecks(password);

  // 🔥 STRENGTH
  const getStrength = (checks: ReturnType<typeof getPasswordChecks>) => {
    const score = Object.values(checks).filter(Boolean).length;

    if (score <= 1) {
      return {
        score,
        label: t("password_weak"),
      };
    }

    if (score === 2) {
      return {
        score,
        label: t("password_medium"),
      };
    }

    if (score === 3) {
      return {
        score,
        label: t("password_good"),
      };
    }

    return {
      score,
      label: t("password_strong"),
    };
  };

  const passwordStrength = getStrength(passwordChecks);

  // 🔥 SUBMIT
  const onSubmit = async (data: FormValues) => {
    const { password, confirm_password } = data;

    if (!password || !confirm_password) {
      toast.error(t("fill_all_fields"));

      return;
    }

    if (password !== confirm_password) {
      toast.error(t("passwords_not_match"));

      return;
    }

    if (passwordStrength.score < 4) {
      toast.error(t("password_too_weak"));

      return;
    }

    if (!token) {
      toast.error(t("token_not_found"));

      return;
    }

    try {
      setRegisterLoading(true);

      console.log("📤 RESET REQUEST:", {
        password,
        confirm_password,
        token,
      });

      const res = await api.post(
        "/account/reset-password/",
        {
          password,
          confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("✅ RESET RESPONSE:", res.data);

      toast.success(t("password_reset_success"));

      // ✅ LOCAL CLEAR
      localStorage.removeItem("reset_access_token");

      localStorage.removeItem("reset_refresh_token");

      navigate("/");
    } catch (err: any) {
      console.log("❌ RESET ERROR:", err?.response?.data);

      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          t("something_went_wrong"),
      );
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);

    localStorage.setItem("lang", value);
  };

  const languages = [
    {
      value: "uz",
      label: "O'zbekcha",
      Icon: IconFlagUz,
    },

    {
      value: "ru",
      label: "Русский",
      Icon: IconFlagRu,
    },

    {
      value: "en",
      label: "English",
      Icon: IconFlagEn,
    },
  ];

  return {
    control,
    handleSubmit,
    onSubmit,

    registerLoading,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    passwordChecks,
    passwordStrength,

    t,
    i18n,

    handleLangChange,

    languages,

    navigate,
  };
};

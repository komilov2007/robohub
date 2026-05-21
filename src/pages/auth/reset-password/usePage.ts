import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "@/api/api";
import toast from "react-hot-toast";
import { ROUTERS } from "@/constants/router";
export type FormValues = {
  password: string;
  confirm_password: string;
};

export const usePage = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [params] = useSearchParams();
  const queryToken = params.get("token") || "";
  const localToken = localStorage.getItem("reset_access_token") || "";
  const token = queryToken || localToken;
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });
  const [registerLoading, setRegisterLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password") || "";
  const getPasswordChecks = (value: string) => ({
    minLength: value.length >= 8,
    hasNumber: /\d/.test(value),
    hasUppercase: /[A-Z]/.test(value),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  });

  const passwordChecks = getPasswordChecks(password);
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
      console.log("res:", res.data);
      toast.success(t("password_reset_success"));
      localStorage.removeItem("reset_access_token");
      localStorage.removeItem("reset_refresh_token");
      navigate(`/${ROUTERS.home}`);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          t("something_went_wrong"),
      );
    } finally {
      setRegisterLoading(false);
    }
  };
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

    navigate,
  };
};

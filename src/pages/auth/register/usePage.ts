import { useMemo, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "@tanstack/react-query";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import { api } from "@/api/api";

import type {
  RegisterFormType,
  RegisterPayload,
  RegisterResponse,
} from "@/@type/type";

import toast from "react-hot-toast";

import { useBoolean } from "@/hook/useBoolean";
import { ROUTERS } from "@/constants/router";

export const usePage = () => {
  const privacyAccepted = useBoolean();

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup.object({
    first_name: yup.string().required("first_name_required").default(""),

    last_name: yup.string().required("last_name_required").default(""),

    contact: yup.string().required("contact_required").default(""),

    password: yup
      .string()
      .required("password_required")
      .min(8, "password_min_length")
      .matches(/[A-Z]/, "password_uppercase_required")
      .matches(/[0-9]/, "password_number_required")
      .matches(
        /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/,
        "password_special_required",
      )
      .default(""),

    confirm_password: yup
      .string()
      .required("confirm_password_required")
      .oneOf([yup.ref("password")], "confirm_password_not_match")
      .default(""),

    privacy: yup
      .boolean()
      .oneOf([true], "privacy_required")
      .required("privacy_required")
      .default(false),
  });

  const {
    control,
    handleSubmit,

    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(schema),

    mode: "onChange",

    defaultValues: schema.getDefault(),
  });

  const passwordValue = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const passwordChecks = useMemo(() => {
    const value = passwordValue || "";

    return {
      minLength: value.length >= 8,

      hasNumber: /[0-9]/.test(value),

      hasUppercase: /[A-Z]/.test(value),

      hasSpecial: /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/.test(value),
    };
  }, [passwordValue]);

  const passedCount = Object.values(passwordChecks).filter(Boolean).length;

  const passwordStrength = useMemo(() => {
    if (!passwordValue) {
      return {
        score: 0,
        label: "",
      };
    }

    if (passedCount <= 1) {
      return {
        score: 1,
        label: t("password_strength_easy"),
      };
    }

    if (passedCount === 2) {
      return {
        score: 2,
        label: t("password_strength_medium"),
      };
    }

    if (passedCount === 3) {
      return {
        score: 3,
        label: t("password_strength_good"),
      };
    }

    return {
      score: 4,
      label: t("password_strength_excellent"),
    };
  }, [passedCount, passwordValue, t]);

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterFormType) => {
      const payload: RegisterPayload = {
        first_name: data.first_name,

        last_name: data.last_name,

        contact: data.contact,

        password: data.password,

        confirm_password: data.confirm_password,
      };

      const res = await api.post<RegisterResponse>(
        "account/register/",
        payload,
      );

      return res.data;
    },

    onSuccess: (res, variables) => {
      console.log("✅ REGISTER RESPONSE:", res);

      // 🔥 LOGIN TOKENLARNI O‘CHIRAMIZ
      document.cookie =
        "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

      document.cookie =
        "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

      localStorage.removeItem("access_token");

      localStorage.removeItem("refresh_token");

      const registerToken = res?.tokens?.access;

      if (registerToken) {
        localStorage.setItem("register_access_token", registerToken);

        console.log("✅ REGISTER TOKEN LOCALSTORAGEGA SAQLANDI");
      }

      toast.success(t("register_success"));

      navigate(`/${ROUTERS.otp_verify}`, {
        state: {
          contact: variables.contact,
        },
      });
    },
    onError: (error: any) => {
      const status = error?.response?.status;

      const data = error?.response?.data;

      if (status === 400) {
        toast.error(t(data?.message || "invalid_request"));

        return;
      }

      if (status === 401) {
        toast.error(t("unauthorized"));

        return;
      }

      if (status === 409) {
        toast.error(t("user_already_exists"));

        return;
      }

      if (data?.detail === "This phone number is already registered.") {
        toast.error(t("server_number_error"));

        return;
      }

      toast.error(t("register_failed"));
    },
  });

  const onSubmit = (data: RegisterFormType) => {
    registerMutation.mutate(data);
  };

  return {
    t,
    i18n,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isDirty,
    isValid,
    isSubmitting,
    registerLoading: registerMutation.isPending,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordChecks,
    passwordStrength,
    navigate,
    privacyAccepted,
  };
};

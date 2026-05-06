import { useState } from "react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { api } from "@/api/api";

import toast from "react-hot-toast";

type FormValues = {
  contact: string;
};

export const usePage = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      contact: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (loading) return;

    const contact = data.contact.trim();

    // 🔥 EMPTY
    if (!contact) {
      toast.error(t("phone_required"));

      return;
    }

    // 🔥 PHONE VALIDATION
    const phoneRegex = /^\+998\d{9}$/;

    if (!phoneRegex.test(contact)) {
      toast.error(t("phone_invalid"));

      return;
    }

    try {
      setLoading(true);

      // 🔥 LOCAL TOKEN CLEAR
      localStorage.removeItem("reset_access_token");

      localStorage.removeItem("reset_refresh_token");

      const res = await api.post("/account/forgot-password/", {
        contact,
      });

      console.log("========== FORGOT DEBUG ==========");

      console.log("DATA:", res.data);

      console.log("==================================");

      // 🔥 ACCESS TOKEN
      const accessToken = res.data?.tokens?.access;

      // 🔥 REFRESH TOKEN
      const refreshToken = res.data?.tokens?.refresh;

      // ✅ ACCESS LOCALSTORAGE
      if (accessToken) {
        localStorage.setItem("reset_access_token", accessToken);

        console.log("✅ ACCESS TOKEN LOCALSTORAGEGA SAQLANDI");
      } else {
        console.warn("⚠️ ACCESS TOKEN KELMADI");

        toast.error(t("token_not_received"));

        return;
      }

      // ✅ REFRESH LOCALSTORAGE
      if (refreshToken) {
        localStorage.setItem("reset_refresh_token", refreshToken);

        console.log("✅ REFRESH TOKEN LOCALSTORAGEGA SAQLANDI");
      }

      toast.success(t("sms_sent"));

      navigate(`/otp?contact=${encodeURIComponent(contact)}`);
    } catch (err: any) {
      console.log("========== ERROR ==========");

      console.log(err?.response?.data);

      console.log("===========================");

      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          t("something_went_wrong"),
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);

    localStorage.setItem("lang", value);
  };

  return {
    control,
    handleSubmit,
    onSubmit,

    loading,

    t,
    i18n,

    handleLangChange,

    errors,
  };
};

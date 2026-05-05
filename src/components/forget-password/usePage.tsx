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

    try {
      setLoading(true);

      // 🔥 eski tokenni o‘chirib yuboramiz
      localStorage.removeItem("reset_access_token");

      const contact = data.contact.trim();

      const res = await api.post("/account/forgot-password/", {
        contact,
      });

      console.log("========== FORGOT DEBUG ==========");
      console.log("DATA:", res.data);
      console.log("==================================");

      const token = res.data?.tokens?.access;

      if (token) {
        localStorage.setItem("reset_access_token", token);
        console.log("✅ TOKEN SAQLANDI");
      } else {
        console.warn("⚠️ TOKEN KELMADI");
        toast.error("Token olinmadi, qaytadan urinib ko‘ring");
        return;
      }

      toast.success("SMS yuborildi");

      navigate(`/otp?contact=${encodeURIComponent(contact)}`);
    } catch (err: any) {
      console.log("========== ERROR ==========");
      console.log(err?.response?.data);
      console.log("===========================");

      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "Xatolik yuz berdi",
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

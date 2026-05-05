import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "@/api/api";
import toast from "react-hot-toast";

export const usePage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const queryToken = params.get("token") || "";
  const localToken = localStorage.getItem("reset_access_token");

  const token = queryToken || localToken;

  const [loading, setLoading] = useState(false);

  const getPasswordChecks = (password: string) => ({
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  });

  const getStrength = (checks: any) => {
    const score = Object.values(checks).filter(Boolean).length;

    if (score <= 1) return { score, label: "Zaif" };
    if (score === 2) return { score, label: "O‘rtacha" };
    if (score === 3) return { score, label: "Yaxshi" };
    return { score, label: "Kuchli" };
  };

  const onSubmit = async (password: string, confirm: string) => {
    const checks = getPasswordChecks(password);
    const strength = getStrength(checks);

    if (!password || !confirm) {
      toast.error("Barcha maydonlarni to‘ldiring");
      return;
    }

    if (password !== confirm) {
      toast.error("Parollar mos emas");
      return;
    }

    if (strength.score < 4) {
      toast.error("Parol yetarlicha kuchli emas");
      return;
    }

    try {
      setLoading(true);

      await api.post("/account/reset-password/", {
        token,
        password,
      });

      toast.success("Parol yangilandi");

      localStorage.removeItem("reset_access_token");

      navigate("/login");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "Xatolik",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    onSubmit,
    loading,
    getPasswordChecks,
    getStrength,
  };
};

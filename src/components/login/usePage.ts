import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";

import { useBoolean } from "@/hook/useBoolean";
import { api } from "@/api/api";

export interface UserProps {
  email: string;
  phone: string;
  user_id: number;
  full_name: string;
  last_name: string;
  first_name: string;
  is_verified: boolean;
  isExpiredAccess?: boolean;
  isExpiredRefresh?: boolean;
  tokens: {
    access: string;
    refresh: string;
  };
}
import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";
import toast from "react-hot-toast";
const schema = yup.object({
  contact: yup.string().trim().required("contact_required").default(""),
  password: yup
    .string()
    .required("password_required")
    .min(6, "password_min_length")
    .default(""),
});
const languages = [
  { value: "uz", label: "O'zbekcha", Icon: IconFlagUz },
  { value: "ru", label: "Русский", Icon: IconFlagRu },
  { value: "en", label: "English", Icon: IconFlagEn },
];
export type SchemaType = yup.InferType<typeof schema>;

export const usePage = () => {
  const { t, i18n } = useTranslation();

  const rememberMe = useBoolean();
  const passwordVisibility = useBoolean();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<SchemaType>({
    resolver: yupResolver(schema),
    defaultValues: schema.cast({}),
    mode: "onChange",
  });

  const loginMutation = useMutation({
    mutationFn: async (data: SchemaType) => {
      const res = await api.post<UserProps>("account/login/", data);
      return res.data;
    },
    onSuccess: (user) => {
      const expires = rememberMe.value ? `; max-age=${60 * 60 * 24 * 7}` : "";

      document.cookie = `access_token=${user.tokens.access}; path=/; samesite=strict${expires}`;

      if (user.tokens.refresh) {
        document.cookie = `refresh_token=${user.tokens.refresh}; path=/; samesite=strict${expires}`;
      }
      toast.success(t("login_toast"));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "login_failed";
      toast.error(t("login_error_toast"));
      setError("root", {
        type: "server",
        message,
      });
    },
  });
  const onSubmit = async (data: SchemaType) => {
    await loginMutation.mutateAsync(data);
  };
  return {
    control,
    handleSubmit,
    errors,
    isSubmitting: loginMutation.isPending,
    onSubmit,
    rememberMe,
    isValid,
    isDirty,
    passwordVisibility,
    t,
    i18n,
    languages,
  };
};

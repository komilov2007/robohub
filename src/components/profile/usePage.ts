import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useBoolean } from "@/hook/useBoolean";
import { api } from "@/api/api";
import toast from "react-hot-toast";

interface ChangePasswordForm {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

interface ProfileForm {
  first_name: string;
  last_name: string;
}

type ProfileResponse = {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  phone?: string;
  email?: string;
};

const passwordSchema: yup.ObjectSchema<ChangePasswordForm> = yup.object({
  old_password: yup.string().required(),
  new_password: yup.string().required().min(8),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("new_password")]),
});

const profileSchema: yup.ObjectSchema<ProfileForm> = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
});

export const usePage = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<
    "profile" | "password" | "language"
  >("profile");
  const { value: open, setTrue, setFalse } = useBoolean();
  const logoutModal = useBoolean();
  const passwordVisible = useBoolean();
  const confirmPasswordVisible = useBoolean();
  const oldPasswordVisible = useBoolean();

  const form = useForm<ChangePasswordForm>({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const profileForm = useForm<ProfileForm>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });

  const { data: profile } = useQuery<ProfileResponse>({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await api.get("account/profile/");
      return data;
    },
  });
  useEffect(() => {
    if (profile) {
      profileForm.reset({
        first_name: profile.first_name ?? "",
        last_name: profile.last_name ?? "",
      });
    }
  }, [profile, profileForm]);

  const newPassword = form.watch("new_password");

  const passwordRules = useMemo(
    () => [
      {
        text: t("password_rule_min"),
        active: newPassword.length >= 8,
      },
      {
        text: t("password_rule_number"),
        active: /\d/.test(newPassword),
      },
      {
        text: t("password_rule_uppercase"),
        active: /[A-Z]/.test(newPassword),
      },
      {
        text: t("password_rule_symbol"),
        active: /[!@#$%^&*]/.test(newPassword),
      },
    ],
    [newPassword, t],
  );

  const activeRulesCount = passwordRules.filter((item) => item.active).length;

  const passwordStrength = activeRulesCount * 25;

  const passwordStrengthText =
    activeRulesCount <= 1
      ? t("password_strength_weak")
      : activeRulesCount <= 3
        ? t("password_strength_medium")
        : t("password_strength_good");

  const passwordStrengthColor =
    activeRulesCount <= 1
      ? "#D92D20"
      : activeRulesCount <= 3
        ? "#F79009"
        : "#0B6E69";

  const changePasswordMutation = useMutation({
    mutationFn: async (values: ChangePasswordForm) => {
      const payload = {
        old_password: values.old_password,
        password: values.new_password,
        confirm_password: values.confirm_password,
      };

      const { data } = await api.post("account/change-password/", payload);
      return data;
    },
    onSuccess: () => {
      form.reset();
      setFalse();
    },
    onError: (error: any) => {
      console.log("STATUS:", error?.response?.status);
      console.log("DATA:", error?.response?.data);
    },
  });
  const handleLogout = () => {
    document.cookie =
      "access_token=; Max-Age=0; path=/; secure; samesite=strict";

    document.cookie =
      "refresh_token=; Max-Age=0; path=/; secure; samesite=strict";
    toast.success("Siz tizimdan chiqdingiz");
    setTimeout(() => {
      window.location.replace("/");
    }, 800);
  };
  const updateProfileMutation = useMutation({
    mutationFn: async (values: ProfileForm) => {
      const { data } = await api.patch("account/profile/", values);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error: any) => {
      console.log("PROFILE STATUS:", error?.response?.status);
      console.log("PROFILE DATA:", error?.response?.data);
    },
  });

  const handleOpenModal = () => {
    setTrue();
  };

  const handleCloseModal = () => {
    form.reset();
    setFalse();
  };

  const handleSubmit = form.handleSubmit((values) => {
    changePasswordMutation.mutate(values);
  });

  const handleUpdateProfile = profileForm.handleSubmit((values) => {
    updateProfileMutation.mutate(values);
  });

  return {
    t,

    profile,
    profileForm,
    handleUpdateProfile,
    isProfileUpdating: updateProfileMutation.isPending,
    handleLogout,
    form,
    open,
    passwordRules,
    passwordStrength,
    passwordStrengthText,
    passwordStrengthColor,
    isLoading: changePasswordMutation.isPending,
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    logoutModal,
    passwordVisible,
    confirmPasswordVisible,
    oldPasswordVisible,
    activeTab,
    setActiveTab,
  };
};

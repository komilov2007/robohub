import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "js-cookie";

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
  phone: string;
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
  first_name: yup.string().required("Ism kiritilishi shart"),
  last_name: yup.string().required("Familiya kiritilishi shart"),
  phone: yup
    .string()
    .required("Telefon raqam kiritilishi shart")
    .matches(/^\+?\d{9,15}$/, "Telefon raqam noto‘g‘ri"),
});

export const usePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
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
        phone: profile.phone ?? "",
      });
    }
  }, [profile]);
  const profileForm = useForm<ProfileForm>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
    },
  });
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
  const changeContactMutation = useMutation({
    mutationFn: async (phone: string) => {
      const payload = {
        type: "phone",
        value: phone,
      };

      const { data } = await api.post(
        "account/profile/change-contact/",
        payload,
      );

      return data;
    },

    onSuccess: () => {
      toast.success(t("otp_sent"));
    },

    onError: (error: any) => {
      console.log(error?.response?.data);

      toast.error(t("something_went_wrong"));
    },
  });
  const changePasswordMutation = useMutation({
    mutationFn: async (values: ChangePasswordForm) => {
      if (values.old_password === values.new_password) {
        toast.error(t("edit_password_same"));
        throw new Error("Same password");
      }

      const payload = {
        old_password: values.old_password,
        password: values.new_password,
        confirm_password: values.confirm_password,
      };

      const { data } = await api.post("account/change-password/", payload);
      return data;
    },

    onSuccess: () => {
      toast.success(t("edit_password_success"));
      form.reset();
      setFalse();
    },

    onError: (error: any) => {
      const data = error?.response?.data;

      if (data?.old_password) {
        const msg = Array.isArray(data.old_password)
          ? data.old_password[0]
          : data.old_password;

        toast.error(msg);
        return;
      }

      if (data?.detail) {
        toast.error(t("edit_password_old_incorrect"));

        return;
      }
    },
  });
  const handleLogout = () => {
    Cookies.remove("user");

    localStorage.removeItem("reset_access_token");
    localStorage.removeItem("register_access_token");

    toast.success(t("logout_toast"));

    setTimeout(() => {
      window.location.replace("/");
    }, 700);
  };
  const updateProfileMutation = useMutation({
    mutationFn: async (values: ProfileForm) => {
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
      };

      const { data } = await api.patch("account/profile/", payload);

      return data;
    },

    onSuccess: () => {
      toast.success(t("profile_updated"));

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },

    onError: (error: any) => {
      console.log(error?.response?.data);

      toast.error(t("something_went_wrong"));
    },
  });

  const handleUpdateProfile = profileForm.handleSubmit((values) => {
    updateProfileMutation.mutate(values);
  });

  const handleOpenModal = () => {
    setTrue();
  };

  const handleCloseModal = () => {
    form.reset();
    setFalse();
  };
  const onSubmit = (data: ProfileForm) => {
    console.log("SUBMIT DATA:", data);

    updateProfileMutation.mutate(data); // 🔥 API shu yerda ketadi
  };
  const handleSubmit = form.handleSubmit((values) => {
    changePasswordMutation.mutate(values);
  });
  const confirmContactMutation = useMutation({
    mutationFn: async ({ phone, otp }: { phone: string; otp: string }) => {
      const { data } = await api.post("account/profile/confirm-contact/", {
        phone,
        otp,
      });

      return data;
    },

    onSuccess: () => {
      toast.success(t("profile_updated"));

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },

    onError: (error: any) => {
      console.log(error?.response?.data);

      toast.error(t("invalid_otp"));
    },
  });
  const handleChangeContact = () => {
    const phone = profileForm.getValues("phone");

    changeContactMutation.mutate(phone);
  };
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
    onSubmit,
    isEditing,
    setIsEditing,
    changeContactMutation,
    confirmContactMutation,
    handleChangeContact,
    isPhoneEditing,
    setIsPhoneEditing,
  };
};

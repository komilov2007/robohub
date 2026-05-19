import { Modal } from "@mui/material";

import { LogoutOutlined } from "@mui/icons-material";

import {
  LogoutButtons,
  LogoutCancelButton,
  LogoutConfirmButton,
  LogoutDescription,
  LogoutIconWrap,
  LogoutModalBox,
  LogoutTitle,
} from "@/pages/admin/sidebar/styled";

const LogoutModal = ({ t, logoutModal, handleLogout }: any) => {
  return (
    <Modal
      open={logoutModal.value}
      onClose={logoutModal.setFalse}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LogoutModalBox>
        <LogoutIconWrap>
          <LogoutOutlined
            sx={{
              fontSize: 28,
              color: "#D92D20",
            }}
          />
        </LogoutIconWrap>

        <LogoutTitle>{t("logout_modal_title")}</LogoutTitle>

        <LogoutDescription>{t("logout_modal_description")}</LogoutDescription>

        <LogoutButtons>
          <LogoutCancelButton fullWidth onClick={logoutModal.setFalse}>
            {t("logout_cancel")}
          </LogoutCancelButton>

          <LogoutConfirmButton fullWidth onClick={handleLogout}>
            {t("logout_confirm")}
          </LogoutConfirmButton>
        </LogoutButtons>
      </LogoutModalBox>
    </Modal>
  );
};

export default LogoutModal;

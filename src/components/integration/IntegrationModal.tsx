import { Button, Modal } from "@mui/material";

import { CloseOutlined, VisibilityOffOutlined } from "@mui/icons-material";

import {
  EyeIconBox,
  InputLabel,
  InstructionImage,
  ItemTitle,
  ModalBox,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalIconBox,
  ModalInfoBox,
  ModalLabel,
  ModalTitle,
  PasswordInput,
  PasswordWrapper,
  StyledInput,
  TextBox,
} from "@/pages/admin/integration/styled";

const IntegrationModal = ({
  t,
  openModal,
  handleCloseModal,
  selectedItem,
}: any) => {
  const SelectedIcon = selectedItem?.Icon;

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalBox>
        <ModalHeader>
          <ModalTitle>{t("integration_modal_title")}</ModalTitle>

          <Button
            onClick={handleCloseModal}
            sx={{
              minWidth: 32,
              width: 32,
              height: 32,
              p: 0,
              border: "1px solid #D0D5DD",
              borderRadius: "8px",
              color: "#667085",
            }}
          >
            <CloseOutlined sx={{ fontSize: 18 }} />
          </Button>
        </ModalHeader>

        <ModalContent>
          <ModalInfoBox>
            <ModalIconBox>{SelectedIcon && <SelectedIcon />}</ModalIconBox>

            <TextBox>
              <ItemTitle>
                {selectedItem ? t(selectedItem.titleKey) : ""}
              </ItemTitle>

              <ModalDescription>
                {selectedItem ? t(selectedItem.descriptionKey) : ""}
              </ModalDescription>
            </TextBox>
          </ModalInfoBox>

          <ModalLabel>{t("integration_instruction")}</ModalLabel>

          <InstructionImage />

          <InputLabel>{t("integration_login")}</InputLabel>

          <StyledInput placeholder={t("integration_login_placeholder")} />

          <InputLabel>{t("integration_password")}</InputLabel>

          <PasswordWrapper>
            <PasswordInput
              type="password"
              placeholder={t("integration_password_placeholder")}
            />

            <EyeIconBox>
              <VisibilityOffOutlined sx={{ fontSize: 18 }} />
            </EyeIconBox>
          </PasswordWrapper>
        </ModalContent>

        <ModalFooter>
          <Button vocab="cancelBtn" onClick={handleCloseModal}>
            {t("integration_cancel")}
          </Button>

          <Button vocab="shareBtn">{t("integration_save")}</Button>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
};

export default IntegrationModal;

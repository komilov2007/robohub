import { Button, Modal, ThemeProvider } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { CloseOutlined, VisibilityOffOutlined } from "@mui/icons-material";

import IconEdit from "@/assets/icons/icon-pencil.svg?react";
import IconDelete from "@/assets/icons/icon-delete.svg?react";
import theme from "@/theme/theme";

import { usePage } from "./usePage";
import {
  ButtonGroup,
  CardLeft,
  ContentStack,
  EyeIconBox,
  HeaderTitle,
  InputLabel,
  InstructionImage,
  IntegrationCard,
  ItemDescription,
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
  PageWrapper,
  PasswordInput,
  PasswordWrapper,
  SectionTitle,
  SectionWrapper,
  StyledInput,
  TextBox,
} from "./styled";

const Integration = () => {
  const { t } = useTranslation();

  const {
    sections,
    openModal,
    selectedItem,
    handleOpenModal,
    handleCloseModal,
  } = usePage();

  const SelectedIcon = selectedItem?.Icon;

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <HeaderTitle>{t("integration_title")}</HeaderTitle>

        <ContentStack>
          {sections.map((section) => (
            <SectionWrapper key={section.id}>
              <SectionTitle>{t(section.titleKey)}</SectionTitle>

              {section.items.map((item) => {
                const Icon = item.Icon;

                return (
                  <IntegrationCard key={`${section.id}-${item.id}`}>
                    <CardLeft>
                      <Icon />

                      <TextBox>
                        <ItemTitle>{t(item.titleKey)}</ItemTitle>
                        <ItemDescription>
                          {t(item.descriptionKey)}
                        </ItemDescription>
                      </TextBox>
                    </CardLeft>

                    <ButtonGroup>
                      {item.action === "connected" ? (
                        <>
                          <Button vocab="editBtn">
                            <IconEdit />
                            {t("integration_edit")}
                          </Button>

                          <Button vocab="deleteBtn">
                            <IconDelete />
                            {t("integration_delete")}
                          </Button>
                        </>
                      ) : (
                        <Button
                          vocab="shareBtn"
                          onClick={() => handleOpenModal(item)}
                        >
                          {t("integration_connect")}
                        </Button>
                      )}
                    </ButtonGroup>
                  </IntegrationCard>
                );
              })}
            </SectionWrapper>
          ))}
        </ContentStack>

        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          open={openModal}
          onClose={handleCloseModal}
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
                  placeholder={t("integration_password_placeholder")}
                  type="password"
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
      </PageWrapper>
    </ThemeProvider>
  );
};

export default memo(Integration);

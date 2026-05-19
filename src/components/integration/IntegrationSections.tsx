import { Button } from "@mui/material";

import IconEdit from "@/assets/icons/icon-pencil.svg?react";
import IconDelete from "@/assets/icons/icon-delete.svg?react";

import {
  ButtonGroup,
  CardLeft,
  IntegrationCard,
  ItemDescription,
  ItemTitle,
  SectionTitle,
  SectionWrapper,
  TextBox,
} from "@/pages/dashboard/integration/styled";

const IntegrationSections = ({ sections, handleOpenModal, t }: any) => {
  return (
    <>
      {sections.map((section: any) => (
        <SectionWrapper key={section.id}>
          <SectionTitle>{t(section.titleKey)}</SectionTitle>

          {section.items.map((item: any) => {
            const Icon = item.Icon;

            return (
              <IntegrationCard key={`${section.id}-${item.id}`}>
                <CardLeft>
                  <Icon />

                  <TextBox>
                    <ItemTitle>{t(item.titleKey)}</ItemTitle>

                    <ItemDescription>{t(item.descriptionKey)}</ItemDescription>
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
    </>
  );
};

export default IntegrationSections;

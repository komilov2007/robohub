import IconArrow from "@/assets/icons/icon-arrow.svg?react";
import IconArrowRight from "@/assets/icons/icon-right-arrow.svg?react";
import IconSku from "@/assets/icons/icon-sku.svg?react";
import IconSee from "@/assets/icons/icon-see.svg?react";
import Iconbox from "@/assets/icons/icon-add-box.svg?react";
import IconKaspiy from "@/assets/icons/icon-kaspiy.svg?react";
import IconRobo from "@/assets/icons/icon-robo.svg?react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Arrow } from "../otp-verificate/styled";
import usePage from "./usePage";
import {
  BackButton,
  BreadcrumbText,
  BreadcrumbsRow,
  ContentLayout,
  FieldBlock,
  FieldLabel,
  HiddenFileInput,
  HintText,
  MainColumn,
  MarketplaceBadge,
  MarketplaceItem,
  MarketplaceList,
  MarketplaceName,
  MarktBtn,
  MarktPlace,
  MediaPreviewRow,
  MediaThumb,
  PageWrapper,
  PlusThumb,
  RequiredMark,
  RichInput,
  RichToolbar,
  SectionBody,
  SectionCard,
  SectionHeader,
  SectionTitle,
  Sidebar,
  SidebarCard,
  SidebarDescription,
  SidebarTitle,
  Spacer12,
  StepBorder,
  StepCaption,
  StepCircle,
  StepContent,
  StepLabel,
  StepList,
  StepRow,
  StrongHead,
  StrongHeadLink,
  StyledCheckbox,
  StyledFormControl,
  StyledMenuItem,
  StyledSelect,
  StyledTextField,
  SubmitButton,
  ToolbarText,
  TopBar,
  UploadArea,
  UploadDescription,
  UploadIconWrap,
  UploadTitle,
  VideoButton,
} from "./styled";

export default function Page() {
  const { t } = useTranslation();

  const {
    fileInputRef,
    marketplaces,
    form,
    media,
    toggleMarketplace,
    handleChange,
    openFileDialog,
    handleFilesChange,
    handleBadgeClick,
  } = usePage();

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <TopBar>
        <BreadcrumbsRow>
          <BackButton>
            <Arrow onClick={() => navigate(-1)}>
              <IconArrow />
            </Arrow>
          </BackButton>

          <BreadcrumbText>
            <StrongHeadLink to="/dashboard/products">
              {t("products")}
            </StrongHeadLink>
            <IconArrowRight />
            <StrongHead>{t("create_product_card_text")}</StrongHead>
          </BreadcrumbText>
        </BreadcrumbsRow>

        <SubmitButton>{t("save_and_continue")}</SubmitButton>
      </TopBar>

      <ContentLayout>
        <Sidebar>
          <SidebarCard>
            <SidebarTitle>{t("create_product_card_title")}</SidebarTitle>

            <SidebarDescription>
              {t("create_product_card_description")}
            </SidebarDescription>

            <StepList>
              <StepRow>
                <StepBorder sx={{ border: "1px solid #00524F" }}>
                  <StepCircle sx={{ background: "#00524F" }}>
                    <Iconbox />
                  </StepCircle>
                </StepBorder>

                <StepContent>
                  <StepCaption>{t("step_1")}</StepCaption>
                  <StepLabel sx={{ color: "#00524F" }}>
                    {t("product_card")}
                  </StepLabel>
                </StepContent>
              </StepRow>

              <StepRow>
                <StepBorder>
                  <StepCircle>
                    <IconSku />
                  </StepCircle>
                </StepBorder>

                <StepContent>
                  <StepCaption>{t("step_2")}</StepCaption>
                  <StepLabel>{t("prices_and_sku")}</StepLabel>
                </StepContent>
              </StepRow>

              <StepRow>
                <StepBorder>
                  <StepCircle>
                    <IconSee />
                  </StepCircle>
                </StepBorder>

                <StepContent>
                  <StepCaption>{t("step_3")}</StepCaption>
                  <StepLabel>{t("review")}</StepLabel>
                </StepContent>
              </StepRow>
            </StepList>
          </SidebarCard>

          <SidebarCard>
            <SidebarTitle>{t("product_card_guide_title")}</SidebarTitle>

            <SidebarDescription>
              {t("product_card_guide_description")}
            </SidebarDescription>

            <VideoButton startIcon={<PlayArrowRoundedIcon />}>
              {t("watch_video")}
            </VideoButton>
          </SidebarCard>
        </Sidebar>

        <MainColumn>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("marketplace")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldLabel>
                {t("select_marketplaces_question")}{" "}
                <RequiredMark>*</RequiredMark>
              </FieldLabel>

              <HintText>{t("select_at_least_one")}</HintText>

              <MarketplaceList>
                {marketplaces.map((item) => (
                  <MarketplaceItem key={item.id}>
                    <StyledCheckbox
                      checked={item.checked}
                      onChange={() => toggleMarketplace(item.id)}
                    />

                    <MarketplaceName>{item.name}</MarketplaceName>

                    {item.badge ? (
                      <MarketplaceBadge
                        tone={item.badgeTone}
                        onClick={() => handleBadgeClick(item)}
                        sx={{ cursor: item.isShare ? "pointer" : "default" }}
                      >
                        {item.isShare ? t("share") : item.badge}
                      </MarketplaceBadge>
                    ) : null}
                  </MarketplaceItem>
                ))}

                <MarktPlace>
                  <IconKaspiy />
                  Kaspiy
                  <MarktBtn>{t("share")}</MarktBtn>
                </MarktPlace>

                <MarktPlace>
                  <IconRobo />
                  Robosell
                  <MarktBtn>{t("share")}</MarktBtn>
                </MarktPlace>
              </MarketplaceList>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("product_name")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  {t("product_name_uz")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <StyledTextField
                  placeholder={t("enter_product_name")}
                  value={form.nameUz}
                  onChange={(e) => handleChange("nameUz", e.target.value)}
                />
              </FieldBlock>

              <FieldBlock>
                <FieldLabel>
                  {t("product_name_ru")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <StyledTextField
                  placeholder={t("enter_product_name")}
                  value={form.nameRu}
                  onChange={(e) => handleChange("nameRu", e.target.value)}
                />
              </FieldBlock>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("category")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  {t("ozon_category")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryOzon}
                    onChange={(e) =>
                      handleChange("categoryOzon", String(e.target.value))
                    }
                  >
                    <StyledMenuItem value="chairs">
                      {t("chairs")}
                    </StyledMenuItem>
                    <StyledMenuItem value="tables">
                      {t("tables")}
                    </StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>

              <FieldBlock>
                <FieldLabel>
                  {t("wildberries_category")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryWb}
                    onChange={(e) =>
                      handleChange("categoryWb", String(e.target.value))
                    }
                  >
                    <StyledMenuItem value="chairs">
                      {t("chairs")}
                    </StyledMenuItem>
                    <StyledMenuItem value="tables">
                      {t("tables")}
                    </StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>

              <FieldBlock>
                <FieldLabel>
                  {t("uzum_category")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryUzum}
                    onChange={(e) =>
                      handleChange("categoryUzum", String(e.target.value))
                    }
                  >
                    <StyledMenuItem value="chairs">
                      {t("chairs")}
                    </StyledMenuItem>
                    <StyledMenuItem value="tables">
                      {t("tables")}
                    </StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("product_media")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <UploadArea onClick={openFileDialog}>
                <UploadIconWrap>
                  <CloudUploadOutlinedIcon sx={{ fontSize: 18 }} />
                </UploadIconWrap>

                <UploadTitle>{t("upload_file")}</UploadTitle>

                <UploadDescription>
                  {t("upload_file_description")}
                </UploadDescription>
              </UploadArea>

              <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={(e) => handleFilesChange(e.target.files)}
              />

              <MediaPreviewRow>
                {media.map((item) => (
                  <MediaThumb key={item.id} image={item.preview} />
                ))}

                <PlusThumb onClick={openFileDialog}>
                  <AddRoundedIcon sx={{ fontSize: 18 }} />
                </PlusThumb>
              </MediaPreviewRow>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("product_description")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  {t("description_ru")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <RichToolbar>
                  <ToolbarText>Paragraph</ToolbarText>
                  <ToolbarText>B</ToolbarText>
                  <ToolbarText>I</ToolbarText>
                  <ToolbarText>U</ToolbarText>
                  <ToolbarText>•</ToolbarText>
                </RichToolbar>

                <RichInput
                  multiline
                  placeholder={t("write_about_product")}
                  value={form.descriptionRu}
                  onChange={(e) =>
                    handleChange("descriptionRu", e.target.value)
                  }
                />
              </FieldBlock>

              <Spacer12 />

              <FieldBlock>
                <FieldLabel>
                  {t("description_uz")} <RequiredMark>*</RequiredMark>
                </FieldLabel>

                <RichToolbar>
                  <ToolbarText>Paragraph</ToolbarText>
                  <ToolbarText>B</ToolbarText>
                  <ToolbarText>I</ToolbarText>
                  <ToolbarText>U</ToolbarText>
                  <ToolbarText>•</ToolbarText>
                </RichToolbar>

                <RichInput
                  multiline
                  placeholder={t("write_about_product")}
                  value={form.descriptionUz}
                  onChange={(e) =>
                    handleChange("descriptionUz", e.target.value)
                  }
                />
              </FieldBlock>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("additional")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldBlock>
                <FieldLabel>{t("brand")}</FieldLabel>
                <StyledTextField placeholder={t("enter_brand")} />
              </FieldBlock>
            </SectionBody>
          </SectionCard>

          <SectionCard>
            <SectionHeader>
              <SectionTitle>{t("variants")}</SectionTitle>
            </SectionHeader>

            <SectionBody>
              <FieldBlock>
                <FieldLabel>{t("variant")}</FieldLabel>
                <StyledTextField placeholder={t("enter_variant")} />
              </FieldBlock>
            </SectionBody>
          </SectionCard>
        </MainColumn>
      </ContentLayout>
    </PageWrapper>
  );
}

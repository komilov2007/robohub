import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import IconKaspiy from "@/assets/icons/icon-kaspiy.svg?react";
import IconRobo from "@/assets/icons/icon-robo.svg?react";

import {
  FieldBlock,
  FieldLabel,
  HiddenFileInput,
  HintText,
  MarketplaceBadge,
  MarketplaceItem,
  MarketplaceList,
  MarketplaceName,
  MarktBtn,
  MarktPlace,
  MediaPreviewRow,
  MediaThumb,
  PlusThumb,
  RequiredMark,
  SectionBody,
  SectionCard,
  SectionHeader,
  SectionTitle,
  StyledCheckbox,
  StyledTextField,
  UploadArea,
  UploadDescription,
  UploadIconWrap,
  UploadTitle,
} from "@/pages/dashboard/product-card-add/styled";

const ProductSections = ({
  t,
  marketplaces,
  toggleMarketplace,
  handleBadgeClick,
  form,
  handleChange,
  fileInputRef,
  openFileDialog,
  handleFilesChange,
  media,
}: any) => {
  return (
    <>
      <SectionCard>
        <SectionHeader>
          <SectionTitle>{t("marketplace")}</SectionTitle>
        </SectionHeader>

        <SectionBody>
          <FieldLabel>
            {t("select_marketplaces_question")} <RequiredMark>*</RequiredMark>
          </FieldLabel>

          <HintText>{t("select_at_least_one")}</HintText>

          <MarketplaceList>
            {marketplaces.map((item: any) => (
              <MarketplaceItem key={item.id}>
                <StyledCheckbox
                  checked={item.checked}
                  onChange={() => toggleMarketplace(item.id)}
                />

                <MarketplaceName>{item.name}</MarketplaceName>

                {item.badge ? (
                  <MarketplaceBadge
                    tone={item.badgeTone}
                    sx={{
                      cursor: item.isShare ? "pointer" : "default",
                    }}
                    onClick={() => handleBadgeClick(item)}
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
              value={form.nameUz}
              placeholder={t("enter_product_name")}
              onChange={(e) => handleChange("nameUz", e.target.value)}
            />
          </FieldBlock>

          <FieldBlock>
            <FieldLabel>
              {t("product_name_ru")} <RequiredMark>*</RequiredMark>
            </FieldLabel>

            <StyledTextField
              value={form.nameRu}
              placeholder={t("enter_product_name")}
              onChange={(e) => handleChange("nameRu", e.target.value)}
            />
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
              <CloudUploadOutlinedIcon
                sx={{
                  fontSize: 18,
                }}
              />
            </UploadIconWrap>

            <UploadTitle>{t("upload_file")}</UploadTitle>

            <UploadDescription>
              {t("upload_file_description")}
            </UploadDescription>
          </UploadArea>

          <HiddenFileInput
            multiple
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={(e) => handleFilesChange(e.target.files)}
          />

          <MediaPreviewRow>
            {media.map((item: any) => (
              <MediaThumb key={item.id} image={item.preview} />
            ))}

            <PlusThumb onClick={openFileDialog}>
              <AddRoundedIcon
                sx={{
                  fontSize: 18,
                }}
              />
            </PlusThumb>
          </MediaPreviewRow>
        </SectionBody>
      </SectionCard>
    </>
  );
};

export default ProductSections;

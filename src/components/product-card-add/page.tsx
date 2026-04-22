import IconArrow from '@/assets/icons/icon-arrow.svg?react';
import IconArrowRight from '@/assets/icons/icon-right-arrow.svg?react';
import IconSku from '@/assets/icons/icon-sku.svg?react';
import IconSee from '@/assets/icons/icon-see.svg?react';
import Iconbox from '@/assets/icons/icon-add-box.svg?react';
import IconKaspiy from '@/assets/icons/icon-kaspiy.svg?react';
import IconRobo from '@/assets/icons/icon-robo.svg?react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Arrow } from '../otp-verificate/styled';
import { useNavigate } from 'react-router-dom';
import { BackButton, BreadcrumbText, BreadcrumbsRow, ContentLayout, FieldBlock, FieldLabel, HiddenFileInput, HintText, MainColumn, MarketplaceBadge, MarketplaceItem, MarketplaceList, MarketplaceName, MarktBtn, MarktPlace, MediaPreviewRow, MediaThumb, PageWrapper, PlusThumb, RequiredMark, RichInput, RichToolbar, SectionBody, SectionCard, SectionHeader, SectionTitle, Sidebar, SidebarCard, SidebarDescription, SidebarTitle, Spacer12, StepBorder, StepCaption, StepCircle, StepContent, StepLabel, StepList, StepRow, StrongHead, StrongHeadLink, StyledCheckbox, StyledFormControl, StyledMenuItem, StyledSelect, StyledTextField, SubmitButton, ToolbarText, TopBar, UploadArea, UploadDescription, UploadIconWrap, UploadTitle, VideoButton,} from './styled';
import usePage from './usePage';
export default function Page() {
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
            <StrongHeadLink to="/dashboard/products">Mahsulotlar</StrongHeadLink>
            <IconArrowRight />
            <StrongHead>Tovar kartochkasini yaratish</StrongHead>
          </BreadcrumbText>
        </BreadcrumbsRow>
        <SubmitButton>Saqlash va davom etish</SubmitButton>
      </TopBar>
      <ContentLayout>
        <Sidebar>
          <SidebarCard>
            <SidebarTitle>Tovar kartochkasi yaratish</SidebarTitle>
            <SidebarDescription>
              Tovar kartochkasini yaratish uchun quyidagi bosqichlardan o‘tishingiz kerak
            </SidebarDescription>
            <StepList>
              <StepRow>
                <StepBorder sx={{ border: '1px solid #00524F' }}>
                  <StepCircle sx={{ background: '#00524F' }}>
                    <Iconbox />
                  </StepCircle>
                </StepBorder>
                <StepContent>
                  <StepCaption>1-bosqich</StepCaption>
                  <StepLabel sx={{ color: '#00524F' }}>Tovar kartochkasi</StepLabel>
                </StepContent>
              </StepRow>
              <StepRow>
                <StepBorder>
                  <StepCircle>
                    <IconSku />
                  </StepCircle>
                </StepBorder>
                <StepContent>
                  <StepCaption>2-bosqich</StepCaption>
                  <StepLabel>Narxlar va SKU</StepLabel>
                </StepContent>
              </StepRow>
              <StepRow>
                <StepBorder>
                  <StepCircle>
                    <IconSee />
                  </StepCircle>
                </StepBorder>
                <StepContent>
                  <StepCaption>3-bosqich</StepCaption>
                  <StepLabel>Ko‘rib chiqish</StepLabel>
                </StepContent>
              </StepRow>
            </StepList>
          </SidebarCard>
          <SidebarCard>
            <SidebarTitle>Tovar kartochka yaratish bo‘yicha qo‘llanma</SidebarTitle>
            <SidebarDescription>
              Tovar kartochka yaratish bo‘yicha to‘liq video ishlanmamiz. Ushbu yo‘riqnomadan foydalanishingiz mumkin.
            </SidebarDescription>
            <VideoButton startIcon={<PlayArrowRoundedIcon />}>
              Videoni ko‘rish
            </VideoButton>
          </SidebarCard>
        </Sidebar>
        <MainColumn>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Marketplace</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldLabel>
                Qaysi marketplacelar uchun kartochka yaratmoqchisiz? <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <HintText>Kamida 1 tasi tanlanishi kerak</HintText>
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
                        sx={{ cursor: item.isShare ? 'pointer' : 'default' }}
                      >
                        {item.badge}
                      </MarketplaceBadge>
                    ) : null}
                  </MarketplaceItem>
                ))}
                <MarktPlace>
                  <IconKaspiy />
                  Kaspiy
                  <MarktBtn>Ulash</MarktBtn>
                </MarktPlace>
                <MarktPlace>
                  <IconRobo />
                  Robosell
                  <MarktBtn>Ulash</MarktBtn>
                </MarktPlace>
              </MarketplaceList>
            </SectionBody>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Mahsulot nomi</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  Mahsulot nomi (O‘zbekcha) <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <StyledTextField
                  placeholder="Mahsulot nomini kiriting"
                  value={form.nameUz}
                  onChange={(e) => handleChange('nameUz', e.target.value)}
                />
              </FieldBlock>
              <FieldBlock>
                <FieldLabel>
                  Mahsulot nomi (Ruscha) <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <StyledTextField
                  placeholder="Mahsulot nomini kiriting"
                  value={form.nameRu}
                  onChange={(e) => handleChange('nameRu', e.target.value)}
                />
              </FieldBlock>
            </SectionBody>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Kategoriya</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  Ozon uchun kategoriya <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryOzon}
                    onChange={(e) => handleChange('categoryOzon', String(e.target.value))}
                  >
                    <StyledMenuItem value="chairs">Chairs</StyledMenuItem>
                    <StyledMenuItem value="tables">Tables</StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>
              <FieldBlock>
                <FieldLabel>
                  Wildberries uchun kategoriya <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryWb}
                    onChange={(e) => handleChange('categoryWb', String(e.target.value))}
                  >
                    <StyledMenuItem value="chairs">Chairs</StyledMenuItem>
                    <StyledMenuItem value="tables">Tables</StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>
              <FieldBlock>
                <FieldLabel>
                  Uzum Market uchun kategoriya <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <StyledFormControl>
                  <StyledSelect
                    value={form.categoryUzum}
                    onChange={(e) => handleChange('categoryUzum', String(e.target.value))}
                  >
                    <StyledMenuItem value="chairs">Chairs</StyledMenuItem>
                    <StyledMenuItem value="tables">Tables</StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FieldBlock>
            </SectionBody>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Mahsulot umumiy rasmi va videolari</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <UploadArea onClick={openFileDialog}>
                <UploadIconWrap>
                  <CloudUploadOutlinedIcon sx={{ fontSize: 18 }} />
                </UploadIconWrap>
                <UploadTitle>Fayl yuklash</UploadTitle>
                <UploadDescription>
                  Rasm yoki videoni shu yerga tashlang yoki tanlang
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
              <SectionTitle>Mahsulot tavsifi</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldBlock>
                <FieldLabel>
                  Tavsif (Ruscha) <RequiredMark>*</RequiredMark>
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
                  placeholder="Mahsulot haqida yozing"
                  value={form.descriptionRu}
                  onChange={(e) => handleChange('descriptionRu', e.target.value)}
                />
              </FieldBlock>
              <Spacer12 />
              <FieldBlock>
                <FieldLabel>
                  Tavsif (O‘zbekcha) <RequiredMark>*</RequiredMark>
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
                  placeholder="Mahsulot haqida yozing"
                  value={form.descriptionUz}
                  onChange={(e) => handleChange('descriptionUz', e.target.value)}
                />
              </FieldBlock>
            </SectionBody>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Qo‘shimcha</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldBlock>
                <FieldLabel>Brend</FieldLabel>
                <StyledTextField placeholder="Brendni kiriting" />
              </FieldBlock>
            </SectionBody>
          </SectionCard>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>Variantlar</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldBlock>
                <FieldLabel>Variant</FieldLabel>
                <StyledTextField placeholder="Variantni kiriting" />
              </FieldBlock>
            </SectionBody>
          </SectionCard>
        </MainColumn>
      </ContentLayout>
    </PageWrapper>
  );
}
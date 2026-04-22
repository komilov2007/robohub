import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import IconStar from '@/assets/icons/icon-star.svg?react'
import IconAdd from '@/assets/icons/icon-add.svg?react'
import usePage from './usePage';

import {
  CardTop,
  CreateButton,
  EmptyStateBox,
  EmptyStateButton,
  EmptyStateDescription,
  EmptyStateIconBox,
  EmptyStateTitle,
  EmptyStateWrapper,
  Grid,
  Header,
  MarketName,
  MarketRow,
  MarketsColumn,
  MarketsWrapper,
  MiniBadge,
  PageWrapper,
  PlatformTab,
  PlatformTabs,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductMain,
  ProductMeta,
  ProductName,
  ProductPrice,
  SearchBox,
  SearchInput,
  SearchLeft,
  SearchRow,
  ShortcutBox,
  StatDivider,
  StatItem,
  StatLabel,
  StatsBox,
  StatsRow,
  StatTop,
  StatValue,
  StatusBadge,
  StatusRow,
  StyledTab,
  StyledTabs,
  TabCount,
  TabLabel,
  TabsWrapper,
  Title,
  TopRightAction,
} from './styled';
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const { tab, setTab, search, setSearch, tabs, filteredProducts } = usePage();

  const navigate = useNavigate()
  return (
    <PageWrapper>
      <Header>
        <Title>Mening tovarlarim</Title>

        <CreateButton to={'/dashboard/products/add'}>
          <IconAdd />
      Tovar kartochkasini yaratish
        </CreateButton>
      </Header>

      <TabsWrapper>
        <StyledTabs
          value={tab}
          onChange={(_, value: number) => setTab(value)}
          variant="scrollable"
          scrollButtons={false}
        >
          {tabs.map((item, index) => (
            <StyledTab
              key={item.label}
              value={index}
              label={
                <TabLabel>
                  <span>{item.label}</span>
                  <TabCount>{item.count}</TabCount>
                </TabLabel>
              }
            />
          ))}
        </StyledTabs>
      </TabsWrapper>

      <SearchRow>
        <SearchBox>
          <SearchLeft>
            <SearchIcon fontSize="small" />
          </SearchLeft>

          <SearchInput
            placeholder="Nomi, SKU yoki barcode bo'yicha izlash"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ShortcutBox>
            <KeyboardCommandKeyIcon style={{ fontSize: 14 }} />
            <span>K</span>
          </ShortcutBox>
        </SearchBox>
      </SearchRow>

      {filteredProducts.length > 0 ? (
        <Grid>
          {filteredProducts.map((item) => {
            const leftColumn = item.platforms.slice(0, 3);
            const rightColumn = item.platforms.slice(3);

            return (
              <ProductCard key={item.id}>
                <CardTop>
                  <ProductMain>
                    <ProductImage src={item.image} alt={item.name} />

                    <ProductInfo>
                      <StatusRow>
                        <StatusBadge
                          status={item.status}>
                         Status: {item.status}
                        </StatusBadge>
                      </StatusRow>

                      <ProductName>{item.name}</ProductName>

                      <ProductMeta>
                        ID: {item.articleId} &nbsp;&nbsp; SKU: {item.sku}
                      </ProductMeta>

                      <ProductPrice>Narx: {item.price}</ProductPrice>

                      <MarketsWrapper>
  <MarketsColumn>
    {leftColumn.map((platform, index) => {
      const isShareButton = platform.status === 'Ulash';
 
      return (
        <MarketRow key={`${platform.name}-${index}`}>
          <MarketName>{platform.name}</MarketName>

         <MiniBadge tone={platform.tone}onClick={() => {
              if (isShareButton) {
                navigate('/dashboard/integration');
              }
            }}
              sx={{
              borderRadius:'10px',
              padding:'1px 6px',
              fontSize:'12px',

              cursor: isShareButton ? 'pointer' : 'default',
            }}>
             {platform.status}
              </MiniBadge>
        </MarketRow>
      );
    })}
  </MarketsColumn>

  <MarketsColumn>
    {rightColumn.map((platform, index) => {
      const isShareButton = platform.status === 'Ulash';

      return (
        <MarketRow key={`${platform.name}-${index}`}>
          <MarketName>{platform.name}</MarketName>

          <MiniBadge
            tone={platform.tone}
            onClick={() => {
              if (isShareButton) {
                navigate('/dashboard/integration');
              }
            }}
              sx={{
              borderRadius:'10px',
              padding:'2px 6px',
              fontSize:'12px',
              cursor: isShareButton ? 'pointer' : 'default',
            }}
          >
            {platform.status}
          </MiniBadge>
        </MarketRow>
      );
    })}
  </MarketsColumn>
</MarketsWrapper>
                      <PlatformTabs>
                        <PlatformTab>Ozon</PlatformTab>
                        <PlatformTab active>Wildberries</PlatformTab>
                        <PlatformTab>Uzum Market</PlatformTab>
                      </PlatformTabs>

                  <StatsBox>
  <StatsRow>
    <StatItem>
      <StatTop>
        <IconStar />
        <StatValue>{item.stats.rating}</StatValue>
      </StatTop>
      <StatLabel>Reyting</StatLabel>
      <StatDivider />
    </StatItem>

    <StatItem>
      <StatTop>
        <StatValue>{item.stats.views}</StatValue>
      </StatTop>
      <StatLabel>Ko‘rishlar</StatLabel>
      <StatDivider />
    </StatItem>

    <StatItem>
      <StatTop>
        <StatValue>{item.stats.conversion}</StatValue>
      </StatTop>
      <StatLabel>Konversiya</StatLabel>
      <StatDivider />
    </StatItem>

    <StatItem>
      <StatTop>
        <StatValue>{item.stats.sold}</StatValue>
      </StatTop>
      <StatLabel>Sotilgan</StatLabel>
      <StatDivider />
    </StatItem>

    <StatItem>
      <StatTop>
        <StatValue>{item.stats.returned}</StatValue>
      </StatTop>
      <StatLabel>Qaytarilgan</StatLabel>
      <StatDivider />
    </StatItem>

    <StatItem>
      <StatTop>
        <StatValue>{item.stats.invalid}</StatValue>
      </StatTop>
      <StatLabel>Yaroqsiz</StatLabel>
    </StatItem>
  </StatsRow>
</StatsBox>
                    </ProductInfo>
                  </ProductMain>

                  <TopRightAction>
                    <MoreHorizIcon style={{ fontSize: 18 }} />
                  </TopRightAction>
                </CardTop>
              </ProductCard>
            );
          })}
        </Grid>
      ) : (
        <EmptyStateWrapper>
          <EmptyStateBox>
            <EmptyStateIconBox>
              <Inventory2OutlinedIcon
                sx={{
                  fontSize: 34,
                  color: '#D0D5DD',
                }}
              />
            </EmptyStateIconBox>

            <EmptyStateTitle>Mahsulotlar ro‘yxati bo‘sh</EmptyStateTitle>

            <EmptyStateDescription>
              Mahsulot joylashtirishni vaqt va nervlardan asrang.
            </EmptyStateDescription>

            <EmptyStateButton>
              Yana bir tovar qo‘shish
            </EmptyStateButton>
          </EmptyStateBox>
        </EmptyStateWrapper>
      )}
    </PageWrapper>
  );
}
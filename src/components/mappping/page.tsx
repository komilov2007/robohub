import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

import { usePage } from "./usePage";
import {
  AddSideColumn,
  AddSideInner,
  CenterColumn,
  Column,
  ColumnTitle,
  Content,
  DarkButton,
  DropBox,
  DropGrid,
  GroupCard,
  GroupName,
  GroupNameWrap,
  GroupTop,
  Header,
  Page,
  PageTitle,
  SaveButton,
} from "./styled";

export default function MappingPage() {
  const { title, handleSave, handleAddMarketplace, handleCreateGroup } =
    usePage();

  return (
    <Page>
      <Header>
        <PageTitle>Mapping</PageTitle>

        <SaveButton onClick={handleSave}>O‘zgarishlarni saqlash</SaveButton>
      </Header>

      <Content>
        <Column>
          <DarkButton onClick={handleAddMarketplace} startIcon={<AddIcon />}>
            Marketplace qo‘shish
          </DarkButton>
        </Column>

        <CenterColumn>
          <ColumnTitle>Robohub Guruhlari (Mapping)</ColumnTitle>

          <GroupCard>
            <GroupTop>
              <GroupNameWrap>
                <GroupName>{title}</GroupName>
                <EditOutlinedIcon
                  sx={{
                    fontSize: 17,
                    color: "#009B7B",
                    cursor: "pointer",
                  }}
                />
              </GroupNameWrap>

              <DarkButton
                onClick={handleCreateGroup}
                startIcon={<FormatListBulletedOutlinedIcon />}
              >
                Guruh yaratish
              </DarkButton>
            </GroupTop>

            <DropGrid>
              <DropBox>Bu yerga tashlang</DropBox>
              <DropBox>Bu yerga tashlang</DropBox>
            </DropGrid>
          </GroupCard>
        </CenterColumn>

        <Column>
          <DarkButton onClick={handleAddMarketplace} startIcon={<AddIcon />}>
            Marketplace qo‘shish
          </DarkButton>
        </Column>

        <AddSideColumn>
          <AddSideInner>
            <ViewModuleOutlinedIcon />
            Add
          </AddSideInner>
        </AddSideColumn>
      </Content>
    </Page>
  );
}

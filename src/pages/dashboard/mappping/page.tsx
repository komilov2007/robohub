import AddIcon from "@mui/icons-material/Add";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";

import { usePage } from "./usePage";

import {
  AddSideColumn,
  AddSideInner,
  CenterColumn,
  Column,
  ColumnTitle,
  Content,
  DarkButton,
  Header,
  Page,
  PageTitle,
  SaveButton,
} from "./styled";
import MappingGroup from "@/components/mappping/MappingGroup";

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
          <DarkButton startIcon={<AddIcon />} onClick={handleAddMarketplace}>
            Marketplace qo‘shish
          </DarkButton>
        </Column>

        <CenterColumn>
          <ColumnTitle>Robohub Guruhlari (Mapping)</ColumnTitle>

          <MappingGroup title={title} handleCreateGroup={handleCreateGroup} />
        </CenterColumn>

        <Column>
          <DarkButton startIcon={<AddIcon />} onClick={handleAddMarketplace}>
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

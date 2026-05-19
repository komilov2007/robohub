import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

import {
  DarkButton,
  DropBox,
  DropGrid,
  GroupCard,
  GroupName,
  GroupNameWrap,
  GroupTop,
} from "@/pages/admin/mappping/styled";

const MappingGroup = ({ title, handleCreateGroup }: any) => {
  return (
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
          startIcon={<FormatListBulletedOutlinedIcon />}
          onClick={handleCreateGroup}
        >
          Guruh yaratish
        </DarkButton>
      </GroupTop>

      <DropGrid>
        <DropBox>Bu yerga tashlang</DropBox>

        <DropBox>Bu yerga tashlang</DropBox>
      </DropGrid>
    </GroupCard>
  );
};

export default MappingGroup;

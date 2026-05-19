import { SearchRounded } from "@mui/icons-material";

import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

import IconFilter from "@/assets/icons/icon-filter.svg?react";

import {
  FilterButton,
  InputIcon,
  SearchBox,
  SearchInput,
  ShortcutText,
  ToolbarRow,
} from "@/pages/admin/order/styled";

const OrdersToolbar = ({ t, search, setSearch, open }: any) => {
  return (
    <ToolbarRow>
      <SearchBox>
        <SearchRounded
          sx={{
            fontSize: 18,
            color: "#98A2B3",
          }}
        />

        <SearchInput
          value={search}
          placeholder={t("search_placeholder")}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ShortcutText>
          <KeyboardCommandKeyIcon />

          <InputIcon>+K</InputIcon>
        </ShortcutText>
      </SearchBox>

      <FilterButton onClick={open}>
        <IconFilter />

        {t("filter")}
      </FilterButton>
    </ToolbarRow>
  );
};

export default OrdersToolbar;

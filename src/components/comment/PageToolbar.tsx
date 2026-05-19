import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import IconFilter from "@/assets/icons/icon-filter.svg?react";

import {
  FilterButton,
  SearchBox,
  SearchInput,
  Shortcut,
  Toolbar,
} from "@/pages/dashboard/comment/styled";

const PageToolbar = ({ t, search, setSearch }: any) => {
  return (
    <Toolbar>
      <SearchBox>
        <SearchRoundedIcon
          sx={{
            fontSize: 19,
            color: "#8EA0B8",
          }}
        />

        <SearchInput
          value={search}
          placeholder={t("review_search_placeholder")}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Shortcut>⌘ + K</Shortcut>
      </SearchBox>

      <FilterButton startIcon={<IconFilter />}>
        {t("review_filter")}
      </FilterButton>
    </Toolbar>
  );
};

export default PageToolbar;

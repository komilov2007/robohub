import SearchIcon from "@mui/icons-material/Search";

import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

import {
  SearchBox,
  SearchInput,
  SearchLeft,
  SearchRow,
  ShortcutBox,
} from "@/pages/dashboard/product/styled";

const ProductsToolbar = ({ t, search, setSearch }: any) => {
  return (
    <SearchRow>
      <SearchBox>
        <SearchLeft>
          <SearchIcon fontSize="small" />
        </SearchLeft>

        <SearchInput
          value={search}
          placeholder={t("product_search_placeholder")}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ShortcutBox>
          <KeyboardCommandKeyIcon style={{ fontSize: 14 }} />

          <span>K</span>
        </ShortcutBox>
      </SearchBox>
    </SearchRow>
  );
};

export default ProductsToolbar;

import { Box, IconButton } from "@mui/material";

import { Close } from "@mui/icons-material";

import IconFilterOrder from "@/assets/icons/icon-filter-order.svg?react";

import {
  FilterApplyButton,
  FilterBody,
  FilterCancelButton,
  FilterContainer,
  FilterContent,
  FilterFooter,
  FilterHeader,
  FilterHeaderText,
  FilterIconBox,
  FilterModalWrapper,
  FilterSidebar,
  FilterSidebarItem,
} from "@/pages/dashboard/order/styled";

const OrdersFilterModal = ({ isOpen, close, filterItems }: any) => {
  return (
    <FilterModalWrapper open={isOpen} onClose={close}>
      <FilterContainer>
        <FilterHeader>
          <FilterHeaderText>
            <h3 style={{ margin: 0 }}>Filtrlar</h3>

            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "#777",
              }}
            >
              Bu yerda tanlangan filtrlaringiz asosida natijani ko‘ring
            </p>
          </FilterHeaderText>

          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </FilterHeader>

        <FilterBody>
          <FilterSidebar>
            {filterItems.map((item: any, i: number) => (
              <FilterSidebarItem key={i}>
                {item.icon}
                {item.label}
              </FilterSidebarItem>
            ))}
          </FilterSidebar>

          <FilterContent>
            <Box />

            <FilterIconBox>
              <IconFilterOrder />
            </FilterIconBox>

            <h3 style={{ margin: 0 }}>Filtrni tanlang</h3>

            <p
              style={{
                color: "#777",
                fontSize: 13,
              }}
            >
              Natijalarni ko‘rish uchun chap paneldan filtrni tanlang.
            </p>
          </FilterContent>
        </FilterBody>

        <FilterFooter>
          <FilterCancelButton vocab="editBtn" onClick={close}>
            Bekor
          </FilterCancelButton>

          <FilterApplyButton vocab="shareBtn">
            Filtrlarni qo‘llash
          </FilterApplyButton>
        </FilterFooter>
      </FilterContainer>
    </FilterModalWrapper>
  );
};

export default OrdersFilterModal;

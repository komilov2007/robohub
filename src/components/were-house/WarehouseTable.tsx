import { TableBody } from "@mui/material";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import {
  BodyCell,
  BodyCellText,
  BodyRow,
  GroupCell,
  GroupCellText,
  GroupRow,
  HeaderCell,
  HeaderCellText,
  ProductCellWrap,
  ProductImage,
  ProductText,
  QuantityInput,
  SortHeaderWrap,
  StyledHeaderRow,
  StyledTable,
  StyledTableContainer,
  StyledTableHead,
} from "@/pages/admin/were-house/styled";

type Props = {
  tableItems: any[];

  quantities: Record<number, number>;

  setQuantity: (id: number, value: string) => void;
};

const WarehouseTable = ({ tableItems, quantities, setQuantity }: Props) => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledHeaderRow>
            <HeaderCell sx={{ width: "380px" }}>
              <HeaderCellText>Product</HeaderCellText>
            </HeaderCell>

            <HeaderCell sx={{ width: "150px" }}>
              <HeaderCellText>SKU</HeaderCellText>
            </HeaderCell>

            <HeaderCell sx={{ width: "160px" }}>
              <HeaderCellText>IKPU</HeaderCellText>
            </HeaderCell>

            <HeaderCell sx={{ width: "120px" }}>
              <SortHeaderWrap>
                <HeaderCellText>Buy price</HeaderCellText>

                <KeyboardArrowUpRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#98A2B3",
                  }}
                />
              </SortHeaderWrap>
            </HeaderCell>

            <HeaderCell sx={{ width: "120px" }}>
              <SortHeaderWrap>
                <HeaderCellText>Sell price</HeaderCellText>

                <KeyboardArrowUpRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#98A2B3",
                  }}
                />
              </SortHeaderWrap>
            </HeaderCell>

            <HeaderCell sx={{ width: "120px" }}>
              <SortHeaderWrap>
                <HeaderCellText>Quantity</HeaderCellText>

                <KeyboardArrowUpRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#98A2B3",
                  }}
                />
              </SortHeaderWrap>
            </HeaderCell>

            <HeaderCell sx={{ width: "160px" }}>
              <SortHeaderWrap>
                <HeaderCellText>Added time</HeaderCellText>

                <KeyboardArrowUpRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#98A2B3",
                  }}
                />
              </SortHeaderWrap>
            </HeaderCell>
          </StyledHeaderRow>
        </StyledTableHead>

        <TableBody>
          {tableItems.map((item, index) => {
            if (item.type === "group") {
              return (
                <GroupRow key={`group-${item.group}-${index}`}>
                  <GroupCell colSpan={7}>
                    <GroupCellText>{item.group}</GroupCellText>
                  </GroupCell>
                </GroupRow>
              );
            }

            const row = item.row;

            return (
              <BodyRow key={row.id}>
                <BodyCell>
                  <ProductCellWrap>
                    <ProductImage src={row.image} alt={row.productName} />

                    <ProductText>{row.productName}</ProductText>
                  </ProductCellWrap>
                </BodyCell>

                <BodyCell>
                  <BodyCellText>{row.sku}</BodyCellText>
                </BodyCell>

                <BodyCell>
                  <BodyCellText>{row.ikpu}</BodyCellText>
                </BodyCell>

                <BodyCell>
                  <BodyCellText>{row.buyPrice}</BodyCellText>
                </BodyCell>

                <BodyCell>
                  <BodyCellText>{row.sellPrice}</BodyCellText>
                </BodyCell>

                <BodyCell>
                  <QuantityInput
                    value={quantities[row.id] ?? 0}
                    onChange={(e) => setQuantity(row.id, e.target.value)}
                  />
                </BodyCell>

                <BodyCell>
                  <BodyCellText>{row.addedAt}</BodyCellText>
                </BodyCell>
              </BodyRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default WarehouseTable;

import { InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

import { Controller } from "react-hook-form";

import IconMapping from "@/assets/icons/icon-mapping.svg?react";
import IconManual from "@/assets/icons/icon-manual.svg?react";
import IconBasket from "@/assets/icons/icon-basket.svg?react";
import IconFilter from "@/assets/icons/icon-filter.svg?react";
import IconCancel from "@/assets/icons/icon-cancel.svg?react";
import IconInfo from "@/assets/icons/icon-info.svg?react";

import { InputIcon } from "@/pages/admin/order/styled";

import {
  FilterAction,
  ModalCancelButton,
  ModalCard,
  ModalCloseButton,
  ModalFieldSection,
  ModalFieldTitle,
  ModalFooter,
  ModalHeader,
  ModalInfoBox,
  ModalInfoIconWrap,
  ModalInfoText,
  ModalSaveButton,
  ModalTitle,
  StyledField,
  StyledInput,
  StyledModal,
  ToolbarAction,
  ToolbarLeft,
  ToolbarLink,
  ToolbarRight,
  ToolbarSection,
  ToolbarText,
} from "@/pages/admin/were-house/styled";

type Props = {
  modal: any;
  control: any;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  handleSubmit: any;
  onSubmit: any;
};

const WarehouseToolbar = ({
  modal,
  control,
  handleCloseModal,
  handleOpenModal,
  handleSubmit,
  onSubmit,
}: Props) => {
  return (
    <ToolbarSection>
      <ToolbarLeft>
        <StyledInput
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <KeyboardCommandKeyIcon />
              <InputIcon>+K</InputIcon>
            </InputAdornment>
          }
        />

        <FilterAction>
          <IconFilter />
          <ToolbarText>Filter</ToolbarText>
        </FilterAction>
      </ToolbarLeft>

      <ToolbarRight>
        <ToolbarLink to="/admin/warehouse/mapping">
          <IconMapping />
          <ToolbarText>Mapping</ToolbarText>
        </ToolbarLink>

        <ToolbarLink to="/admin/warehouse/manual">
          <IconManual />
          <ToolbarText>manual</ToolbarText>
        </ToolbarLink>

        <ToolbarAction onClick={handleOpenModal}>
          <IconBasket />
          <ToolbarText>stoplist</ToolbarText>
        </ToolbarAction>
      </ToolbarRight>

      <StyledModal
        open={modal.value}
        onSubmit={handleSubmit(onSubmit)}
        onClose={handleCloseModal}
      >
        <ModalCard>
          <ModalHeader>
            <ModalTitle>Stoplist</ModalTitle>

            <ModalCloseButton onClick={handleCloseModal}>
              <IconCancel />
            </ModalCloseButton>
          </ModalHeader>

          <ModalInfoBox>
            <ModalInfoIconWrap>
              <IconInfo />
            </ModalInfoIconWrap>

            <ModalInfoText>Stoplist description</ModalInfoText>
          </ModalInfoBox>

          <ModalFieldSection>
            <ModalFieldTitle>Minimum quantity</ModalFieldTitle>

            <Controller
              control={control}
              name="text"
              render={({ field }) => (
                <StyledField {...field} placeholder="Enter quantity" />
              )}
            />
          </ModalFieldSection>

          <ModalFooter>
            <ModalCancelButton onClick={handleCloseModal}>
              Close
            </ModalCancelButton>

            <ModalSaveButton
              variant="contained"
              vocab="loginBtn"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </ModalSaveButton>
          </ModalFooter>
        </ModalCard>
      </StyledModal>
    </ToolbarSection>
  );
};

export default WarehouseToolbar;

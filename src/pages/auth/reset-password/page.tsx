import { memo } from "react";

import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import { LeftSide, PageWrap } from "./styled";
import ResetHeader from "@/components/reset-password/ResetHeader";
import ResetForm from "@/components/reset-password/ResetForm";
import ResetFooter from "@/components/reset-password/ResetFooter";

const Page = () => {
  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <PageWrap>
        <LeftSide>
          <form onSubmit={data.handleSubmit(data.onSubmit)}>
            <ResetHeader {...data} />

            <ResetForm {...data} />

            <ResetFooter t={data.t} />
          </form>
        </LeftSide>
      </PageWrap>
    </ThemeProvider>
  );
};

export default memo(Page);

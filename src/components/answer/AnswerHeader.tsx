import { Header, HeaderHelp, HeaderTitle } from "./styled";

const AnswerHeader = ({ t }: any) => {
  return (
    <Header>
      <HeaderTitle>{t("answer_page_title")}</HeaderTitle>

      <HeaderHelp>{t("answer_page_help")}</HeaderHelp>
    </Header>
  );
};

export default AnswerHeader;

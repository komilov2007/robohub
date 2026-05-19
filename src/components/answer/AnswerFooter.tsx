import {
  CancelButton,
  Footer,
  FooterButton,
  FooterContent,
  FooterLeft,
  FooterText,
  SaveButton,
} from "./styled";

const AnswerFooter = ({ t, activeCount }: any) => {
  return (
    <Footer>
      <FooterContent>
        <FooterLeft>
          <FooterText>5 / {activeCount}</FooterText>
        </FooterLeft>

        <FooterButton>
          <CancelButton variant="outlined">{t("cancel")}</CancelButton>

          <SaveButton variant="contained">{t("save_changes")}</SaveButton>
        </FooterButton>
      </FooterContent>
    </Footer>
  );
};

export default AnswerFooter;

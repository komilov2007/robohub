import { usePage } from "./usePage";

import { AuthPageWrap, LeftColumn } from "./styled";

import RegisterForm from "@/components/register/RegisterForm";

const RegisterPage = () => {
  const data = usePage();

  return (
    <AuthPageWrap>
      <LeftColumn>
        <RegisterForm {...data} />
      </LeftColumn>
    </AuthPageWrap>
  );
};

export default RegisterPage;

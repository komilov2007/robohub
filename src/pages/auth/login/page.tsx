import { usePage } from "./usePage";

import { LoginOuter, LoginFieldsWrap } from "@/components/login/style";

import LoginHeader from "@/components/login/LoginHeader";
import LoginFields from "@/components/login/LoginFields";
import RememberSection from "@/components/login/RememberSection";
import LoginActions from "@/components/login/LoginActions";

const LoginPage = () => {
  const data = usePage();

  return (
    <LoginOuter onSubmit={data.handleSubmit(data.onSubmit)}>
      <LoginHeader t={data.t} />

      <LoginFieldsWrap>
        <LoginFields {...data} />
        <RememberSection {...data} />
        <LoginActions {...data} />
      </LoginFieldsWrap>
    </LoginOuter>
  );
};
export default LoginPage;

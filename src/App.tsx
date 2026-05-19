import Cookies from "js-cookie";

import AuthRouter from "./router/AuthRouter";
import DashboardRouter from "./router/DashboardRouter";

function App() {
  const user = Cookies.get("user");

  if (!user && window.location.pathname.startsWith("/dashboard")) {
    window.location.replace("/login");

    return null;
  }

  return user ? <DashboardRouter /> : <AuthRouter />;
}

export default App;

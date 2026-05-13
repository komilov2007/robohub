// import AuthRouter from "./router/AuthRouter";
import DashboardRouter from "./router/DashboardRouter";

function App() {
  // const isAuth = document.cookie.includes("access_token=");
  return <DashboardRouter />;
  // return isAuth ? <DashboardRouter /> : <AuthRouter />;
}

export default App;

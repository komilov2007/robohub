import AuthRouter from "./router/AuthRouter";
import DashboardRouter from "./router/DashboardRouter";

function App() {
  const isAuth = document.cookie.includes("access_token=");

  return isAuth ? <DashboardRouter /> : <AuthRouter />;
}

export default App;
// import { memo } from "react";
// import CommentPage from "./components/comment/page";

// const App = () => {
//   return <CommentPage />;
// };

// export default memo(App);

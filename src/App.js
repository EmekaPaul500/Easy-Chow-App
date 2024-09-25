import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import DesktopView from "./components/DesktopView";
import LoginPage from "./components/LoginPage ";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DesktopView />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

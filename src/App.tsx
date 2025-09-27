import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { FrontRoute } from "./Routes/FrontRoute";
import { useTranslation } from "react-i18next";
import "./Style/App.css";
import { useEffect } from "react";
import "../src/i18next/i18n";
import { ThemeProvider } from "./Context/ThemeContext";
import { NotificationProvider } from "./Context/NotificationContext";
// import AuthProvider from "./Hooks/AuthProvider";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = ["ar", "he"].includes(i18n.language);
    document.body.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>{FrontRoute}</Route>
    )
  );

  return (
    // <AuthProvider>
    <NotificationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </NotificationProvider>
    // </AuthProvider>
  );
}

export default App;

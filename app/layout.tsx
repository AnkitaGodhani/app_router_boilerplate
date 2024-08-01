"use client";
import { ReactNode } from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/constants/customTheme";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { LinearProgress } from "@mui/material";
import { makeStore } from "./redux/store";
import { DataProvider } from "./components/context/dataContex";
import Receipt from "./components/shared/modal/receipt";

const ModalHandler = () => {
  const modal = useSelector((state: any) => state?.modal);
  return <>{modal?.receipt?.open && <Receipt />}</>;
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={makeStore}>
          <ThemeProvider theme={theme}>
            <ModalHandler />
            <DataProvider>{children}</DataProvider>
            <ToastContainer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./assets/locales/i18n";
import "./index.css";

import { router } from "@/router/router";
import CircularIndeterminate from "./components/loader/page";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<CircularIndeterminate />}>
          <Toaster position="top-right" />
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

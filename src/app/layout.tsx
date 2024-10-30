"use client"
import type { Metadata } from "next";
import "./globals.css";
import BreadcrumbNavigation from "./(components)/BreadcrumbNavigation";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { NutrientProvider } from "./(contexto)/NutrientContext";
import { theme } from "./theme";
import { ThemeProviderCustom } from "./(contexto)/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NUTRITION APP</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      <ThemeProviderCustom>
      <NutrientProvider>
    
          <CssBaseline />
          <BreadcrumbNavigation />
          <Box sx={{ padding: "20px", bgcolor: "background.default", color: "text.primary" }}>
          {children}
          </Box>
      </NutrientProvider>
    </ThemeProviderCustom>

      </body>
    </html>
  );
}

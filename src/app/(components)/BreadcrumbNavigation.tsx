"use client";
import React, { useState } from "react";
import { Box, Breadcrumbs, createTheme, IconButton, Link, Menu, MenuItem, Switch, ThemeProvider, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useThemeContext } from "../(contexto)/ThemeContext";

const BreadcrumbNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { darkMode, toggleTheme } = useThemeContext();

  const pathnames = pathname.split("/").filter((x) => x);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: "16px 32px",
        bgcolor: "background.paper",
        borderBottom: `1px solid`,
      }}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link onClick={() => handleNavigation("/")} sx={{ cursor: "pointer" }}>
          Home
        </Link>
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={routeTo}>{value}</Typography>
          ) : (
            <Link onClick={() => handleNavigation(routeTo)} key={routeTo} sx={{ cursor: "pointer" }}>
              {value}
            </Link>
          );
        })}
      </Breadcrumbs>

      <IconButton color="inherit" onClick={handleMenuOpen}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem>
          <Typography variant="subtitle1" fontWeight="bold">
            Configurações
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="subtitle2">Modo Escuro</Typography>
          <Switch checked={darkMode} onChange={toggleTheme} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default BreadcrumbNavigation;

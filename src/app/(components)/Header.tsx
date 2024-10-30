"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu, Avatar, Box, Breadcrumbs, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import Logo from "./Logo";
import BreadcrumbNavigation from "./BreadcrumbNavigation";

const Header: React.FC = () => {

  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          MyNutritionApp
        </Typography>
        <Box>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Box sx={{ backgroundColor: "white", color: "gray" }}>
        <BreadcrumbNavigation />
      </Box>
    </AppBar>
  );
};

export default Header;
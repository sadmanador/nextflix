import React from "react";
import { Box } from "@mui/material";
import type { ChildrenProvider } from "@/types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }: ChildrenProvider) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#141414",
        color: "#fff",
      }}
    >
      <Navbar />
      <Box sx={{ marginLeft: "0.8rem" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;

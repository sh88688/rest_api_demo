import * as React from "react";
import { Typography, Box } from "@mui/material";
import ProductCard from "../productCard";
const DashboardContent = () => {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Typography variant="body1" sx={{ color: "text.primary" }}>
        All Products
      </Typography>
      <br />
      <ProductCard />
    </Box>
  );
};
export default DashboardContent;

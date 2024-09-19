import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Box,
  ListItemIcon,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { ExpandLess, ExpandMore, Whatshot } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import axios from "axios";
import DashboardContent from "./dashboardContent";
import { setLocalStorageItem, getLocalStorageItem } from "../../utils/utility";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [isLoggingOut, setLoggingOut] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(null);
  const userData = getLocalStorageItem("user-data", true);

  const handleCategoryToggle = () => {
    if (!categories?.length) {
      fetchCategories();
      setCategoryLoading(true);
    } else {
      setOpenCategory(!openCategory);
    }
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError((err) => {
        console.log("Error in fetching data", err?.message);
      });
    } finally {
      setTimeout(() => {
        setCategoryLoading(false);
        setOpenCategory(!openCategory);
      }, 500);
    }
  };

  const logoutUser = () => {
    setLoggingOut(true);
    setTimeout(() => {
      setLocalStorageItem("user-data", null);
      setLoggingOut(false);
      navigate("/");
    }, 1500);
  };
  const getAppBar = () => {
    return (
      <AppBar
        component={"nav"}
        position="static"
        style={{
          background: "black",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img style={{ width: "56px", height: "56px" }} src={logo} alt="NA" />
          <Typography
            variant="h6"
            noWrap
            sx={{ fontFamily: "Playwrite CU, cursive" }}
          >
            {"Stella"}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  const getDrawer = () => {
    return (
      <nav>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation">
            {/* Profile Section */}
            <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Profile Picture"
                src={userData?.image}
                sx={{ width: 56, height: 56 }}
                variant="circular"
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h6">{`${userData?.firstName || ""} ${userData?.lastName || ""}`}</Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>{userData?.username || ""}</b>
                </Typography>
              </Box>
            </Box>
            <Divider />
            {/* Menu Items */}
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem onClick={handleCategoryToggle} button>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {categoryLoading ? (
                  <CircularProgress size={15} color="inherit" />
                ) : openCategory ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse in={openCategory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {categories?.map((category) => (
                    <ListItem sx={{ pl: 4 }} button>
                      <ListItemIcon>
                        <Whatshot />
                      </ListItemIcon>
                      <ListItemText primary={category.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button onClick={logoutUser}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
                {isLoggingOut && (
                  <CircularProgress size={15} color="secondary" />
                )}
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
    );
  };

  return (
    <Box>
      {/* App Bar */}
      {getAppBar()}
      {/* Drawer */}
      {getDrawer()}
      {/* Content Block */}
      <DashboardContent />
    </Box>
  );
};

export default Dashboard;

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
  ListItemAvatar,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LinearProgress from "@mui/material/LinearProgress";
import Collapse from "@mui/material/Collapse";

const Dashboard = ({ logoutUser, userInfo, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);

  const handleCategoryToggle = () => {
    setOpenCategory(!openCategory);
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar
        position="static"
        style={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
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
          <img
            style={{ width: "56px", height: "56px" }}
            src="https://cryptologos.cc/logos/uniswap-uni-logo.png"
          />
          <Typography
            variant="h6"
            noWrap
            sx={{ fontFamily: "Playwrite CU, cursive" }}
          >
            {"Stella"}
          </Typography>
        </Toolbar>
      </AppBar>
      {isLoading && <LinearProgress color="secondary" />}
      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          {/* Profile Section */}
          <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Profile Picture"
              src={userInfo?.image}
              sx={{ width: 56, height: 56 }}
              variant="circular"
            />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6">{`${userInfo?.firstName || ""} ${userInfo?.lastName || ""}`}</Typography>
              <Typography variant="body2" color="textSecondary">
                <b>{userInfo?.username || ""}</b>
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
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem onClick={handleCategoryToggle} button>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
              {openCategory ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openCategory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["mobiles", "laptops", "Home Appliances"]?.map(
                  (category, index) => (
                    <ListItem sx={{ pl: 4 }} button>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={category} />
                    </ListItem>
                  )
                )}
              </List>
            </Collapse>
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
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Dashboard;

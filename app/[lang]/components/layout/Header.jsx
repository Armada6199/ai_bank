"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import bankLogo from "@public/assets/Screenshot_2024-02-05_172409-removebg-preview.png";
import { Grid } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
const drawerWidth = 240;
const navItems = [
  <Person2Icon sx={{ fontSize: 24, color: "primary.dark" }} />,
  <TranslateIcon sx={{ fontSize: 24, color: "primary.dark" }} />,
  <NotificationsIcon sx={{ fontSize: 24, color: "primary.dark" }} />,
  <EmailIcon sx={{ fontSize: 24, color: "primary.dark" }} />,
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image src={bankLogo} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container item xs={12} borderBottom={"1px solid"} maxHeight={"60px"}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#fff",
          maxHeight: "60px",
          borderBottom: "1px solid ",
          borderColor: "primary.main",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid item md={2}>
            <Image src={bankLogo} style={{ width: "100%", height: "60px" }} />
          </Grid>
          <Grid container item gap={4} justifyContent={"flex-end"} md={10}>
            {navItems.map((item) => (
              <Grid item bgcolor={"#F7FAED"} borderRadius={"5px"}>
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Grid>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

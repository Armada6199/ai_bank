"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import bankLogo from "/public/assets/bankLogo.png";
import {
  Grid,
  Popper,
  Stack,
  Button,
  Toolbar,
  ListItemButton,
  ListItemText,
  List,
  Drawer,
  Divider,
  Box,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import styled from "@emotion/styled";
import { keycloakContext } from "@/hooks/KeycloakProvider";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary,
}));
const PopperHOC = ({ id, updatePassword }) => {
  switch (id) {
    case "profile": {
      return (
        <Stack spacing={2} mt={4}>
          <Item>Accounts</Item>
          <Item>Payrolls</Item>
          <Item onClick={updatePassword}>Change Password</Item>
        </Stack>
      );
    }
    case "email": {
      return <Typography>email</Typography>;
    }
    case "notification": {
      return <Typography>notification</Typography>;
    }
    case "language": {
      return <Typography>Language</Typography>;
    }
    default:
      return <Box />;
  }
};
const drawerWidth = 240;
const navItems = [
  {
    icon: <Person2Icon sx={{ fontSize: 20, color: "primary.dark" }} />,
    id: "profile",
  },
  {
    icon: <TranslateIcon sx={{ fontSize: 20, color: "primary.dark" }} />,
    id: "language",
  },
  {
    icon: <NotificationsIcon sx={{ fontSize: 20, color: "primary.dark" }} />,
    id: "notification",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 20, color: "primary.dark" }} />,
    id: "email",
  },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openedPopper, setOpenedPopper] = React.useState({
    profile: false,
    language: false,
    notification: false,
    email: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { updatePassword } = React.useContext(keycloakContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image src={bankLogo} priority />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.icon} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid
      container
      item
      xs={12}
      alignItems={"center"}
      borderBottom={"1px solid"}
      borderColor={"primary.main"}
      height={"80px"}
      px={4}
      bgcolor={"#FFFFFF"}
    >
      <IconButton
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Grid item md={2}>
        <Image src={bankLogo} style={{ width: "90%", height: "50px" }} />
      </Grid>
      <Grid
        container
        item
        gap={4}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        md={10}
      >
        {navItems.map((item) => (
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            item
            bgcolor={"#F7FAED"}
            sx={{ cursor: "pointer" }}
            width={"36px"}
            height={"36px"}
            borderRadius={"5px"}
            onClick={(e) => {
              setOpenedPopper((prev) => {
                return {
                  email: false,
                  notification: false,
                  language: false,
                  profile: false,
                  [item.id]: !prev[item.id],
                };
              });
              setAnchorEl(e.currentTarget);
            }}
          >
            {item.icon}
            <Popper anchorEl={anchorEl} open={openedPopper[item.id]}>
              <PopperHOC id={item.id} updatePassword={updatePassword} />
            </Popper>
          </Grid>
        ))}
      </Grid>
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

export default Header;

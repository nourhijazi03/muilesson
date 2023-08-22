import React from "react";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Appdrawer({
  setMyMode,
  noneOrBlock,
  temp,
  setNoneOrBlock,
  setTemp,
}) {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const theme = useTheme();
  const list=[
    {text:"Home" , icon:<HomeIcon/> , path:"/"},
    {text:"Create" , icon:<CreateIcon/> , path:"/create"},
    {text:"Bar Chart" , icon:<BarChartIcon/> , path:"/bar"},
    {text:"Pie Chart" , icon:<SettingsIcon/> , path:"/pie"},

  ];
  return (
    <Drawer
      sx={{
        display: { xs: noneOrBlock, sm: "block" },
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={temp}
      anchor="left"
      open={true}
      onClose={() => {
        setTemp("permanent");
        setNoneOrBlock("none");
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>
        <Divider />

      {list.map((item,index)=>{
        return(
          <ListItem
          key={index}
          disablePadding
          sx={{ bgcolor: currentLocation.pathname === item.path ? "grey" : null }}
        >
          <ListItemButton onClick={() => navigate(item.path)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      )})
      }



        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

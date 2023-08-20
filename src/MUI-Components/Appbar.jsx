import React from "react";
import { Link, Toolbar, Typography, AppBar, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import pImage from "../media/nourh.jpg";
import MenuIcon from "@mui/icons-material/Menu";
export default function Appbar({ setNoneOrBlock, setTemp }) {
  const drawerWidth = 240;
  return (
    <AppBar
      position="static"
      sx={{
        ml: { xs: "0px", sm: `${drawerWidth}px` },
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar>
        {/* tool bar m3tihun display flex w mzabeton */}
        <IconButton
          sx={{ display: { sm: "none" } }}
          onClick={() => {
            setTemp("temporary");
            setNoneOrBlock("block");
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "20px" } }}
          color="inherit"
          underline="none"
        >
          My expenses
        </Link>

        <Typography variant="h6">Nour Hijazi</Typography>
        <Avatar src={pImage} sx={{ ml: "10px" }} />
      </Toolbar>
    </AppBar>
  );
}

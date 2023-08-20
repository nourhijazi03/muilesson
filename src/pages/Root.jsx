import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-Components/Appbar";
import Appdrawer from "../MUI-Components/Appdrawer";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function Root() {
  const drawerWidth = 240;
  const [myMode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [temp, setTemp] = useState("permanent");
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar setNoneOrBlock={setNoneOrBlock} setTemp={setTemp} />

        <Appdrawer
          setMyMode={setMyMode}
          noneOrBlock={noneOrBlock}
          temp={temp}
          setNoneOrBlock={setNoneOrBlock}
          setTemp={setTemp}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
          {/* bthot l design li ana bde kon fi  */}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;

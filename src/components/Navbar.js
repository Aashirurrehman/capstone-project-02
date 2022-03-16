import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "fixed",
//     bottom: 0,
//     backgroundColor: "#2d313a",
//     zindex: 100,
//   },
// });

export default function SimpleBottomNavigation() {
  // const styling = useStyles();

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/tvseries");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%", position: "fixed", backgroundColor: "#2d313a", zindex: 100, bottom: 0}}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // showLabels
        // className={styling.root}
      >
      <BottomNavigationAction
        label="Trending"
        style={{ color: "maroon" }}
        icon={<WhatshotIcon />}
      />

      <BottomNavigationAction
        label="Movies"
        style={{ color: "maroon" }}
        icon={<MovieFilterIcon />}
      />

      <BottomNavigationAction
        label="Tv-series"
        style={{ color: "maroon" }}
        icon={<DesktopWindowsIcon />}
      />

      <BottomNavigationAction
        label="Search"
        style={{ color: "maroon" }}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  </Box>
);}

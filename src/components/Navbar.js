import React, { useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zindex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const styling = useStyles();

  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();

  useEffect(() => {
    if (value === 0) navigation.push("/");
    else if (value === 1) navigation.push("/movies")
    else if (value === 2) navigation.push("/tvseries")
    else if (value === 3) navigation.push("/searchbar")
  }, [value, navigation])
  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={styling.root}
    >
      <BottomNavigationAction label="Trending" style={{color: "white"}} icon={<WhatshotIcon />} />

      <BottomNavigationAction label="Movies"style={{color: "white"}}  icon={<MovieFilterIcon />} />

      <BottomNavigationAction label="Tv-series" style={{color: "white"}} icon={<DesktopWindowsIcon />} />

      <BottomNavigationAction label="Search" style={{color: "white"}} icon={<SearchIcon />} />
    </BottomNavigation>
  );
}

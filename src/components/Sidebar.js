import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    paddingTop: "2rem",
    background: "#fff",
    height: "100vh",
    position: "sticky",
    width: "100%",
    top: 0,
    boxShadow: "2px 2px 10px #ddd",
  },
  sidebarItem: {
    display: "flex",
    color: "#7986ca",
    alignItems: "center",
    cursor: "pointer",
    columnGap: ".75rem",
    marginBottom: "2rem",
    justifyContent: "start",
    paddingLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      paddingLeft: "0",
    },
  },
  sidebarIcon: {
    fontSize: "1.75rem",
  },
  sidebarTitle: {
    fontSize: "1.15rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebarContainer}>
      {/* <HomeRoundedIcon />
        <Typography variant="subtitle1">Home</Typography>
      </Box> */}
      <CustomItems Icon={`HomeRoundedIcon`} Title={`Home`} />
      <CustomItems Icon={`HomeRoundedIcon`} Title={`Dashboard`} />
    </Box>
  );
};

export default Sidebar;

const CustomItems = ({ Icon, Title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebarItem}>
      <HomeRoundedIcon className={classes.sidebarIcon} />
      <Typography className={classes.sidebarTitle}>{Title}</Typography>
    </Box>
  );
};

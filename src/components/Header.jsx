import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SectionTitle from "./SectionTitle";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  action: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    cursor: 'pointer'
  },
  nextButton: {
    background: "rgb(49 54 120 / 43%)",
    borderRadius: "0 20px 20px 0",
    width: "25px",
    height: "30px",
  },
  appIcon: {
    marginRight: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <SectionTitle text={"Special for you"} />
      <Box className={classes.action}>
        <AppsIcon className={classes.appIcon} />
        <ChevronLeftIcon />
        <ChevronRightIcon className={classes.nextButton} />
      </Box>
    </Box>
  );
};

export default Header;

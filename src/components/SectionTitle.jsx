import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "28px",
    color: "#fff",
    fontWeight: "700",
  },
}));

const SectionTitle = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.title}>{text}</Typography>;
};

export default SectionTitle;

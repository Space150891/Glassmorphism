import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "./SectionTitle";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "30%",
    padding: '10px'
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    background: "rgb(49 54 120 / 43%)",
    padding: "10px 15px",
    borderRadius: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    color: "#fff",
    cursor: 'pointer'
  },
  title: {
    fontSize: "28px",
    color: "#fff",
    fontWeight: "700",
  },
}));

const Genres = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <SectionTitle text={"Genres"} />
      <Box className={classes.box}>
        {genres.map((item, index) => {
          return (
            <Box key={index} className={classes.item}>
              <Typography>{item.text}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const genres = [
  { text: "Indie" },
  { text: "Country" },
  { text: "Bluz" },
  { text: "Drum&Bass" },
  { text: "Latino" },
  { text: "Pop" },
  { text: "Electro" },
  { text: "Folk Music" },
  { text: "Jass" },
  { text: "Dubstep" },
  { text: "Sleep" },
  { text: "Ambient" },
  { text: "Underground Rap" },
];

export default Genres;

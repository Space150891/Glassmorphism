import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
  },
  item: {
    width: "265px",
    height: "200px",
    backgroundSize: "cover",
    color: "#fff",
    borderRadius: "12px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  likes: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  detail: {
    padding: "10px",
  },
  title: {
      fontSize: '18px',
      fontWeight: '600'
  },
  track: {
      fontSize: '14px',
      fontWeight: '100'
  }
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cards}>
      {cards.map((item, index) => {
        return (
          <Box
            style={{ backgroundImage: `url(${item.src})` }}
            className={classes.item}
            key={index}
          >
            <Box className={classes.likes}>
              <FavoriteIcon />
              <Typography>{item.like}</Typography>
            </Box>

            <Box className={classes.detail}>
              <Typography className={classes.title}>{item.name}</Typography>
              <Typography className={classes.track}>{item.track} Tracks</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const cards = [
  {
    like: "1.239.192",
    name: "Video Game Music",
    track: "218",
    src: "../cards/pic1.jpeg",
  },
  { like: "145.197", name: "Indie Pop", track: "39", src: "../cards/pic2.jpg" },
  {
    like: "1239.192",
    name: "Retro 80's",
    track: "98",
    src: "../cards/pic3.jpg",
  },
];

export default Cards;

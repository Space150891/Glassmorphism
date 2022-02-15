import React from "react";
import { Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "./SectionTitle";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "70%",
    padding: "10px",
  },
  table: {
    width: "100%",
    color: '#fff',
    marginTop: '30px'
  },
  column: {
      padding:'20px 0',
  }
}));

const Playlist = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <SectionTitle text={"Playlist"} />
      <table className={classes.table}>
        <tr style={{ textAlign: "left" }}>
          <th>№</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Time</th>
          <th>Album</th>
        </tr>
        {playlist.map((item, index) => {
          return (
            <tr key={index}>
              <td className={classes.column}>{item.number}</td>
              <td className={classes.column}>{item.title}</td>
              <td className={classes.column}>{item.artist}</td>
              <td className={classes.column}>{item.time}</td>
              <td className={classes.column}>{item.album}</td>
            </tr>
          );
        })}
      </table>
    </Box>
  );
};

const playlist = [
  {
    number: "1",
    title: "Saturday",
    artist: "Twenty One Pilots",
    time: "03:12",
    album: "Sun",
  },
  {
    number: "1",
    title: "Move on",
    artist: "Garden City Movement",
    time: "04:12",
    album: "Entertain",
  },
  {
    number: "3",
    title: "Apricots",
    artist: "Bicep",
    time: "04:07",
    album: "Isles",
  },
];

export default Playlist;

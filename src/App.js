import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./components/Cards";
import Genres from "./components/Genres";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(../../background.jpg)",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    boxSizing: "border-box",
  },
  content: {
    padding: "15px",
    width: "1180px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255,255,255,0.1)",
    border: "2px solid #FFFFFF17",
    borderRadius: "10px",
    opacity: 1,
    backdropFilter: "blur(50px)",
    display: "flex",
  },
  box: {
    width: "75%",
    padding: "30px 40px 10px 20px",
    backdropFilter: "brightness(.5)",
    borderRadius: "0 20px 20px 0",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Sidebar />
        <Box className={classes.box}>
          <Header />
          <Cards />
          <Box style={{ width: "100%", display: "flex", marginTop: "20px" }}>
            <Playlist />
            <Genres />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

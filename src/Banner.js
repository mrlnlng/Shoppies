import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Confetti from "react-dom-confetti";
import WinnerCard from "./WinnerCard";
const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "hsla(0, 0%, 0%, 0.3)",
    // position: "sticky"
  },
  banner: {
    background: "#567D86",
    width: "30vw",
    height: "70vh",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem",
  },
  bannerTitle: {
    fontSize: "2rem",
    marginTop: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#FFFFFF",
  },
  tryAgain: {
    display: "flex",
    fontSize: "1.25rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

const Banner = ({ nominations, setNominations }) => {
  const [confetti, setConfetti] = useState(true)
  const classes = useStyle();
  const handleClick = () => {
    setNominations([]);
    setConfetti(false)
  };
  return (
    <div className={classes.container}>
      <Confetti active={confetti}/>
      <div className={classes.banner}>
        <div className={classes.bannerTitle}>Your top 5 movies 🏆</div>
        <div>
          {nominations.map((movie, index) => (
            <WinnerCard key={index} movie={movie} />
          ))}
        </div>
        <div>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.tryAgain}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Banner;

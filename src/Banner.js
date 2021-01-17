import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Confetti from "react-dom-confetti";
import WinnerCard from "./WinnerCard";
import useMediaQuery from "@material-ui/core/useMediaQuery"
const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "hsla(0, 0%, 0%, 0.3)",
    position: "fixed", /* Stay in place */
    zIndex: "1", /* Sit on top */
    left: "0",
    top: "0",
    overflow: "auto" /* Enable scroll if needed */
    // position: "sticky"
  },
  banner: props => ({
    background: "#567D86",
    width: props.width,
    // height: "70vh",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    zIndex: "10"
  }),
  bannerTitle: {
    fontSize: "1.75rem",
    textAlign: "center",
    // marginTop: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#FFFFFF",
  },
  tryAgain: {
    display: "flex",
    fontSize: "1.25rem",
    // marginTop: "1rem",
  },
  confetti: {
    display: "flex",
  },
});

const Banner = ({ nominations, setNominations }) => {
    let props;
    const phoneMatches = useMediaQuery('(min-width: 800px)')
  const [confetti, setConfetti] = useState(false);
  if (phoneMatches) {
      props = {
        width: "30vw"
      }
  }
  else {
      props = {
        width: "80vw"
      }
  }
  const classes = useStyle(props);
  useEffect(() => {
    setConfetti(true);
  }, []);
  const handleClick = () => {
    setNominations([]);
    setConfetti(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.bannerTitle}>Your top 5 movies 🏆</div>
        <div>
          {nominations.map((movie, index) => (
            <WinnerCard key={index} movie={movie} />
          ))}
        </div>
        <div className={classes.confetti}>
          <Confetti active={confetti} />
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

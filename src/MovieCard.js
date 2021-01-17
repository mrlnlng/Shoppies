import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyle = makeStyles({
  container: (props) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "100%",
  }),
  titleContainer: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  nominateButton: props => ({
    color: "#FFFFFF",
    fontWeight: "600",
    boxShadow: "none",
    marginTop: "0.25rem",
    width: props.width,
    textTransform: "none",
    borderRadius: "0.5rem",
    textAlign: "center"

  }),
  whiteCard: (props) => ({
    borderRadius: "0.5rem",
    border: ".01rem",
    padding: ".5rem",
    display: "flex",
    alignItems: "center",
    width: "80%",
    color: "#FFFFFF",
    background: "#1F3E45",
    marginRight: props.marginRight,
  }),
});
const MovieCard = ({ movie, nominations, setNominations }) => {
  const phoneMatches = useMediaQuery("(max-width: 800px)");
  let props;
  if (phoneMatches) {
    props = {
      flexDirection: "column",
      marginRight: "0rem",
      width: "91.5%"

    };
  } else {
    props = {
      flexDirection: "row",
      marginRight: "1rem",
      width: ""
    };
  }
  const classes = useStyle(props);
  let { Title, Year, Poster } = movie;
  let nominated = nominations.indexOf(movie) !== -1;
  const handleClick = () => {
    if (nominations.length <= 5) {
      setNominations((prevArray) => [...prevArray, movie]);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.whiteCard}>
          <div>
            {Poster !== "N/A" && (
              <img
                src={Poster === "N/A" ? null : Poster}
                alt="movie poster"
                height="70"
              ></img>
            )}
          </div>
          <div className={classes.titleContainer}>
            {Title} ({Year})
          </div>
        </div>
        <div className={classes.nominateButton}>
          {nominated ? (
            <Button
              variant="contained"
              color="secondary"
              disabled
              className={classes.nominateButton}
              onClick={handleClick}
            >
              Nominate
            </Button>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              className={classes.nominateButton}
              onClick={handleClick}
            >
              Nominate
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default MovieCard;

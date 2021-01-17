import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "50vw",
},
titleContainer: {
    marginLeft: "1rem",
    marginRight: "1rem",
},
nominateButton: {
    color: "#FFFFFF",
    fontWeight: "600",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "0.5rem"
},
whiteCard: {
    borderRadius: "0.5rem",
    border: ".01rem",
    padding: ".5rem",
    display: "flex",
    alignItems: "center",
    width: "80%",
    color: "#FFFFFF",
    background: "#1F3E45",
    marginRight: "1rem"
},
});
const MovieCard = ({ movie, nominations, setNominations }) => {
  const classes = useStyle();
  let { Title, Year, Poster } = movie;
  // console.log(nominations)
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
            <Button color="secondary" variant="contained" className={classes.nominateButton} onClick={handleClick}>
              Nominate
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default MovieCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Remove from "./images/close.png";

const useStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "1rem",
    // marginBottom: "1rem",
    padding: ".5rem",
    width: "100%",
  },
  titleContainer: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  card: {
    borderRadius: "0.5rem",
    border: ".01rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    width: "95%",
    color: "#FFFFFF",
    justifyContent: "space-between",
    background: "#1F3E45",
    // marginRight: "1rem",
    "&:hover": {
          filter: "hue-rotate(-9deg) brightness(105%)",
          transitionDuraton : "800ms",
    },
  },
  remove: {
    "&:hover": {
      filter: "brightness(200%)",
    },
    // marginLeft: "1rem"
  },
});
const NomCard = ({ movie, nominations, setNominations }) => {
  const classes = useStyle();
  let { Title, Year, Poster } = movie;
  // console.log(nominations)

  const checkTitle = (nom) => {
    console.log(nom === movie);
    return nom !== movie;
  };
  const handleClick = () => {
    setNominations(nominations.filter(checkTitle));
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
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
          <div className={classes.remove}>
            <img src={Remove} height="15" alt="remove button" onClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};
export default NomCard;

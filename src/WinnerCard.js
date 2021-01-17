import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "flex-start",
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
    justifyContent: "center",
    textAlign: "center",
    background: "#1F3E45",
    marginRight: "1rem",
  },
//   remove: {
//     "&:hover": {
//       filter: "brightness(200%)",
//     },
//     // marginLeft: "1rem"
//   },
});
const WinnerCard = ({ movie }) => {
  const classes = useStyle();
  let { Title, Year, Poster } = movie;
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
        </div>
      </div>
    </>
  );
};
export default WinnerCard;

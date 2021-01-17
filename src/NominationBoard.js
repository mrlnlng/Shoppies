import React from "react";
import NomCard from "./NomCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    background: "#2F5159",
    padding: "1.1rem",
    borderRadius: "0.5rem",
    color: "#FFFFFF",
    // width: "80%"
  },
  containerTitle: {
      fontSize: "1.25rem",
      marginBottom: "1rem"
  },
  description: {
      textAlign: "center"
  }
});
const NomationationBoard = ({ nominations, setNominations }) => {
    const classes = useStyle()
    return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTitle}>Nominations</div>
        {nominations.length !== 0 ? (
          <>
            {/* {console.log("nominations2", nominations)} */}
            {nominations.map((movie, index) => {
              return (
                <NomCard
                  movie={movie}
                  key={index}
                  nominations={nominations}
                  setNominations={setNominations}
                />
              );
            })}
          </>
        ) : (
          <div className={classes.description}>No Movies Nominated</div>
        )}
      </div>
    </>
  );
};

export default NomationationBoard;

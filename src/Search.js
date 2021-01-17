import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import NominationBoard from "./NominationBoard";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./Banner";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyle = makeStyles({
  container: (props) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    marginTop: "1rem",
    maxWidth: "100vw",
  }),
  searchContainer: {
    display: "flex",
    flexDirection: "column",
  },
  nomBoard: (props) => ({
    marginTop: props.marginTop,
    marginLeft: props.marginLeft,
    width: props.width,
  }),
});
const Search = () => {
  const phoneMatches = useMediaQuery("(max-width: 800px)");
  let props;
  const [movieTitle, setMovieTitle] = useState("");
  const [nominations, setNominations] = useState([]);

  if (phoneMatches) {
    props = {
      flexDirection: "column",
      marginTop: "1rem",
      marginLeft: "0rem",
      width: "100vw",
    };
  } else {
    props = {
      flexDirection: "row",
      marginTop: "0rem",
      marginLeft: "1rem",
      width: "25vw",
    };
  }
  const classes = useStyle(props);
  if (nominations.length === 5) {
    return <Banner nominations={nominations} setNominations={setNominations} />;
  } else {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.searchContainer}>
            <SearchBar movieTitle={movieTitle} setMovieTitle={setMovieTitle} />
            {movieTitle !== "" ? (
              <SearchResult
                movieTitle={movieTitle}
                nominations={nominations}
                setNominations={setNominations}
              />
            ) : null}
          </div>
          <div className={classes.nomBoard}>
            <NominationBoard
              nominations={nominations}
              setNominations={setNominations}
            />
          </div>
        </div>
      </>
    );
  }
};
export default Search;

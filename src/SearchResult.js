import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  resultsFor: {
    marginTop: "0.5rem",
    color: "#eceff4",
    fontWeight: "550",
    marginBottom: "0.5rem"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontWeight: "600",
    background: "#2F5159",
    padding: "1.1rem",
    borderRadius: "0.5rem",
  },
  noResults: {
    color: "#eceff4",
  }
});
const SearchResult = ({ movieTitle, setNominations, nominations }) => {
  // const [movieSearch, setMovieSearch] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const classes = useStyle();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  useEffect(() => {
    (async () => {
      let tempMovies = [];
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=7111d7dc&s=${movieTitle}`
      );
      const json = await response.json();
      // console.log(json.Search)
      Object.assign(tempMovies, json.Search);
      setMovieResults(tempMovies);
    })();
  }, [movieTitle]);
  return (
    <>
      {/* {console.log("nomations4", nominations)} */}
      <div className={classes.resultsFor}>Results for "{movieTitle}"</div>
      <div className={classes.container}>

        {movieResults.length === 0 && <div className={classes.noResults}>No results found. Try entering more characters or look up a different movie.</div>}
        {movieResults.map((movie, index) => {
          return (
            <MovieCard
              movie={movie}
              key={index}
              nominations={nominations}
              setNominations={setNominations}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;

import React from "react";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'; 

const useStyle = makeStyles({
    searchBar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        fontWeight: "600",
        background: "#2F5159",
        padding: "1.1rem",
        borderRadius: "0.5rem"
    },
    input: {
        width: "50vw",
        padding: ".75rem",
        border: "none",
        borderRadius: "0.25rem",
        fontWeight: "600",
        fontFamily: "Montserrat"
    },
    label: {
        color: "#FFFFFF",
        marginBottom: "0.5rem"
    }
})
const SearchBar = ({ setMovieTitle }) => {
  const classes = useStyle()
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    setMovieTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input)
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={classes.searchBar}>
          <label for="movie title" className={classes.label}>Movie Title</label>
          <input
            type="search"
            value={input}
            placeholder="Search a movie..."
            onChange={handleChange}
            className={classes.input}
          />
          {/* <input type="submit" value="Search" /> */}
        </form>
      </div>
    </>
  );
};

export default SearchBar;

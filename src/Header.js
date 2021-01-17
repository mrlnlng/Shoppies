import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./images/logoStar.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyle = makeStyles({
  title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  subtitle: props => ({
    // width: "60vw",
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
    maxWidth: props.maxWidth
  }),
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: (props) => ({
    marginTop: "3rem",
    display: "flex",
    alignItems: props.alignItems,
    flexDirection: props.flexDirection,
    marginBottom: "1rem",
  }),
  image: props => ({
    marginRight: "1.5rem",
    marginBottom: props.marginBottom
  }),
});
const Header = () => {
  let props;
  const phoneMatches = useMediaQuery("(max-width: 800x)");
  if (phoneMatches) {
    props = {
      flexDirection: "row",
      alignItems: "flex-end",
      marginBottom: "0rem",
      maxWidth: ""
    };
} else {
    props = {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "0.5rem",
        maxWidth: "90vw"
    };
  }
  const classes = useStyle(props);
  return (
    <>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <img src={Logo} height="100" className={classes.image} />
          <div className={classes.title}>THE SHOPPIES</div>
        </div>
        <div className={classes.subtitle}>
          🎉 Nominate your 5 favourite movies for the Shoppies
        </div>
      </div>
    </>
  );
};
export default Header;

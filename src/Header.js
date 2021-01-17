import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import Logo from './images/logoStar.png'
const useStyle = makeStyles({
    title: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: "2.5rem",
        marginBottom: "1rem",
        marginTop: "3rem",
        textAlign: "center"
    },
    subtitle: {
        // width: "60vw",
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },
    titleContainer: {
        display: "flex",
        alignItems: "flex-end",
        marginBottom: "1rem"
    },
    image: {
        marginRight: "1.5rem"
    }
})
const Header =()=> {
    const classes = useStyle()
    return(
        <>
        <div className={classes.header}>
            <div className={classes.titleContainer}>
            <img src={Logo} height="100" className={classes.image}/>
    <div className={classes.title}>THE SHOPPIES</div>
            </div>
    <div className={classes.subtitle}>🎉 Nominate your 5 favourite movies for the Shoppies</div>
        </div>

    </>
    )
}
export default Header;
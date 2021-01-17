import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 

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

    }
})
const Header =()=> {
    const classes = useStyle()
    return(
        <>
        <div className={classes.header}>
    <div className={classes.title}>THE SHOPPIES</div>
    <div className={classes.subtitle}>🎉 Nominate your 5 favourite movies for the Shoppies</div>
        </div>

    </>
    )
}
export default Header;
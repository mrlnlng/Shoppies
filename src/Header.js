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
    },
    subtitle: {
        width: "70vw",
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center"
    }
})
const Header =()=> {
    const classes = useStyle()
    return(
        <>
    <div className={classes.title}>THE SHOPPIES</div>
    <div className={classes.subtitle}>🎉 Nominate your 5 favourite movies for the Shoppies</div>

    </>
    )
}
export default Header;
import {useContext} from 'react'
import { Grid,Typography } from '@material-ui/core'
import useStyles from '../style'
import { RegisterLoginContext } from '../context/RegisterLoginContext'

export default function HomePage() {
    let { logOut } = useContext(RegisterLoginContext)

    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Typography variant="h2">خوش آمدید</Typography>
            <Grid item container justify="center" alignItems="center" 
            className={classes.LogOutButton} onClick={()=>{logOut()}}>Log Out</Grid>
        </Grid>
    )
}

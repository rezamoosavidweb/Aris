import React, { useContext } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { AlertContext } from '../../context/AlertContext'
import useStyles from '../../style'
function Alert(props) {
    const classes = useStyles();
    return <MuiAlert classes={{message:classes.alertMessage}}  elevation={6} variant="filled" {...props} />;
}

export default function Index() {
    let { message, open, type, handleCloseAlert } = useContext(AlertContext)
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert severity={type}>
                {message}
            </Alert>
        </Snackbar>
    )
}

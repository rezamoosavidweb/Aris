import { useContext } from 'react'
import { Grid } from '@material-ui/core';
import Login from '../components/Login/Login'
import Getcode from '../components/GetCode/Getcode'
import CompletingProfile from '../components/Setprofile/CompletingProfile'
import SetPassword from '../components/SetPassword/SetPassword'
import { RegisterLoginContext } from '../context/RegisterLoginContext'
import HomePage from '../screen/HomePage'

export default function SignIN() {
    let { pageType, token } = useContext(RegisterLoginContext)

    return (
        <Grid container alignItems="center" style={{ height: "100%" }}>
            {pageType === 0 ?
                <Login />
                : pageType === 1 ?
                    <Getcode />
                    : pageType === 2 ?
                        <SetPassword />
                        : pageType === 3 ?
                            <CompletingProfile />
                            : <HomePage />
            }
        </Grid>
    )
}

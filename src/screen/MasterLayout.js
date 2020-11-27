import { useContext,useState } from 'react'
import Alert from '../components/Alert'
import { Grid } from '@material-ui/core'
import { RegisterLoginContext } from '../context/RegisterLoginContext'
import HomePage from './HomePage'
import SignIN from './SignIN'

export default function MasterLayout() {
    let { pageType,token } = useContext(RegisterLoginContext)
   
    return (
        <Grid container alignItems="center" style={{ height: "100%" }}>
            {token&&token.length>2?
            <HomePage/>
            :
            <SignIN  />
                
            }
            <Alert />
        </Grid>
    )
}


// pageType === 1 ?
//                     <Getcode />
//                     : pageType === 2 ?
//                         <SetPassword />
//                         : pageType === 3?
//                         <CompletingProfile/>
//                         :<HomePage />
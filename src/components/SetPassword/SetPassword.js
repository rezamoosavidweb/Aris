import { useContext } from 'react'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../style'
import { RegisterLoginContext } from '../../context/RegisterLoginContext'

export default function SetPassword() {
    const classes = useStyles();
    let { handleSetPassword, setCode, setPassword, setReapetPassword,
        setPageType } = useContext(RegisterLoginContext)


    return (
        <Grid container alignItems="center" justify="center" >
            <Container component="main" maxWidth="xs" className={classes.SingnInContainer}>
                <CssBaseline />
                <div className={classes.paper}>

                    <form className={classes.form} noValidate>
                        <Typography className={classes.title1} variant="subtitle2">کد تایید را وارد کنید :</Typography>
                        <input onChange={(e) => { setCode(e.target.value) }}
                            className={classes.inputeRegister} placeholder="* کد تایید" />
                        <Typography className={classes.title1} variant="subtitle2">رمز عبور خود را وارد کنید :</Typography>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password"
                            className={classes.inputeRegister} placeholder="* رمز عبور " />
                        <Typography className={classes.title1} variant="subtitle2">رمز عبور خود را مجدد وارد نمایید :</Typography>
                        <input onChange={(e) => { setReapetPassword(e.target.value) }} type="password"
                            className={classes.inputeRegister} placeholder="* تکرار رمز عبور " />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            classes={{ label: classes.label }}
                            className={classes.submit}
                            onClick={handleSetPassword}
                        >
                            دریافت کد تایید
                    </Button>
                        <Typography onClick={() => { setPageType(1) }} className={classes.cantGetCod} component="h4" variant="h5">
                            کد را دریافت نکرده ام
                    </Typography>
                    </form>
                </div>

            </Container>
        </Grid>
    );
}


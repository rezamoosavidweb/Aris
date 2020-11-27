import { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../style'
import { RegisterLoginContext } from '../../context/RegisterLoginContext'
import { Grid } from '@material-ui/core';
import ParticlesBg from 'particles-bg'

export default function SignIn() {
    const classes = useStyles();
    let { handleRegisterCode, setMobileNumber } = useContext(RegisterLoginContext)
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 30],
        life: [1.5, 3],
        v: [1, 1.5],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        //color: ["random", "#ff0000"],
        cross: "dead",
        random: 10
    };

    return (
        <Grid container alignItems="center" justify="center" >
            <Container component="main" maxWidth="xs" className={classes.SingnInContainer}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h3">
                        ثبت نام
                 </Typography>
                    <form className={classes.form} noValidate>

                        <input onChange={(e) => { setMobileNumber(e.target.value) }}
                            className={classes.inputeRegister} placeholder="* شماره موبایل خود را وارد کنید" />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            classes={{ label: classes.label }}
                            className={classes.submit}
                            onClick={handleRegisterCode}
                        >
                            دریافت کد تایید
                    </Button>
                    </form>
                </div>

            </Container>
            <ParticlesBg type="custom" config={config} bg={true} />
        </Grid>
    );
}


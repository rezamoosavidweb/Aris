import { useContext } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from '../../style'
import ParticlesBg from 'particles-bg'
import { RegisterLoginContext } from '../../context/RegisterLoginContext'


export default function Login() {
    const classes = useStyles();
    let { handleLogin, setUserName, setPassWord,setPageType } = useContext(RegisterLoginContext)


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
        <Grid container direction="column" justify="flex-end" alignItems="center" className={classes.LoginGrid}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
                ورود
                 </Typography>
            <input onChange={(e) => { setUserName(e.target.value) }}
                className={classes.inputeRegister} placeholder="* شماره موبایل خود را وارد کنید" />
            <input onChange={(e) => { setPassWord(e.target.value) }}
                className={classes.inputeRegister} placeholder="* پسورد خود را وارد کنید" />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                classes={{ label: classes.label }}
                className={classes.submit}
                onClick={handleLogin}
            >
                تایید
                    </Button>
                    <Typography onClick={() => { setPageType(1) }} className={classes.cantGetCod} component="h4" variant="h5">
                ثبت نام نکرده ام
                    </Typography>
            <ParticlesBg type="custom" config={config} bg={true} />
        </Grid>
    )
}

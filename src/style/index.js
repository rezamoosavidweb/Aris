import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    LoginGrid:{
        width:435,
        height:385,
        backgroundColor:"#fff",
        borderRadius:5,
        margin:"auto",
        padding:"20px 20px",
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: "15px 25px",
        borderRadius: 5
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(6),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    label: {
        fontFamily: "IRANSans"
    },
    inputeRegister: {
        width: "100%",
        height: 36,
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 4,
        outline: "none",
        border: "none",
        backgroundColor: "#e3e3e3"
    },
    SingnInContainer: {
        width: "100%",
        height: "100%",

    },
    title1: {
        padding: "10px 0px",
        color: "#f50057"
    },
    alertMessage: {
        fontFamily: "IRANSans"
    },
    cantGetCod: {
        color: "#f50057",
        marginTop: 6,
        cursor: "pointer"
    },
    addModaldiv: {
        width: 800,
        padding: 30,
        height: '430px',
        backgroundColor: '#fff',
        marginRight: 'auto',
        marginLeft: 'auto', marginTop: 25,
        borderRadius: 15,
        position: 'relative',
        "&:focus": {
            outline: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            padding: 15,
            overflow: 'scroll'
        }
    },
    titleGrid: {
        borderBottom: '1px solid #d0d0d0',
        paddingBottom: 10
    },
    profileImage: {
        width: 80,
        height: 80,
        marginTop: 0,
    },
    profileText: {
        textAlign: "center"
    },
    addInput: {
        backgroundColor: '#fff',
        minHeight: '29px',
        fontSize: '11px',
        padding: 4,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        marginTop: 6,
        marginBottom: 15,
        borderRadius: 10,
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        "&:focus": {
            outline: 'none',
            borderWidth: 1,
            borderColor: 'red'
        },
        "&:disabled": {
            color: '#bebfbf'
        }
    },
    GenderInput: {
        backgroundColor: '#fff',
        minHeight: '29px',
        fontSize: '11px',
        padding: 4,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        marginTop: 6,
        marginBottom: 15,
        borderRadius: 10,
        cursor: 'pointer',
        width: '%100',
        height: 40,
        border: '1px solid #c1c1c1',
        paddingRight: 3,
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        "&:focus": {
            outline: 'none',
            borderWidth: 1,
            borderColor: 'red'
        },
        "&:disabled": {
            color: '#bebfbf'
        }
    },
    ProfileInput: {
        backgroundColor: '#fff',
        minHeight: '29px',
        fontSize: '11px',
        padding: 4,
        paddingLeft: 10,
        paddingRight: 15,
        border: "none",
        marginTop: 6,
        marginBottom: 15,
        borderRadius: 10,
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        "&:focus": {
            outline: 'none',
            borderWidth: 1,
            borderColor: 'red'
        },
        "&:disabled": {
            color: '#bebfbf'
        }
    },
    inputGrid: {
        marginTop: 3, padding: 3,
        [theme.breakpoints.down('xs')]: {
            marginTop: 5, padding: 5
        },
    },
    addInput2: {
        backgroundColor: '#fff',
        minHeight: '45px',
        fontSize: '10px',
        padding: 4,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 1,
        borderLeftColor: '#c1c1c1',
        borderTopColor: '#c1c1c1',
        borderRightColor: '#c1c1c1',
        borderBottomColor: '#c1c1c1',
        marginTop: 6,
        width: "100%",
        borderRadius: 10,
        "&:focus": {
            outline: 'none',
            borderWidth: 1,
            borderColor: 'red'
        }

    },
    closeIconButton: {
        backgroundColor: '#00B4DB',
        position: 'absolute',
        top: -15,
        right: -15,
        '&:hover': {
            backgroundColor: '#cefffc'
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#00B4DB',
            position: 'absolute',
            top: 0,
            right: 0,
        }
    },
    KeyboardArrow: {
        fontSize: '25px',
        marginTop: 3,
        color: 'black'
    },
    GenderFadeElement: {
        border: '1px solid #c1c1c1',
        borderRadius: 10,
        position: 'absolute',
        width: '97%',
        top: 77,
        zIndex: 5,
        background: 'white',
        height: 81
    },
    CityFadeElement: {
        border: '1px solid #c1c1c1',
        borderRadius: 10,
        position: 'absolute',
        width: '97%',
        top: 77,
        zIndex: 5,
        background: 'white',
        height:200,
        overflowY:"auto"
    },
    GenderFadeElementText:{
        paddingLeft: 10,
"&:hover":{
    backgroundColor:"#00b4db1a"
}
    },
    ConfirmButton:{
        height: '35px', 
        width: 140, 
        marginTop: 25
    },
    LogOutButton:{
        width:80,
        height:80,
        cursor:"pointer",
        position:"absolute",
        top:0,
        right:0,
        borderRadius:"50%",
        backgroundColor:"#f500577d",
        color:"#fff",
        "&:hover":{
            backgroundColor:"#f50057"
        }
    },
    LoadinContainer:{
        width:window.innerWidth,
        height:window.innerHeight,
        backgroundColor:"#0000005e",
        position:"absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }

}))
export default useStyles

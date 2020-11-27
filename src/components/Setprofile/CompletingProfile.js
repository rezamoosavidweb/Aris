import React, { useRef, useContext } from 'react'
import { Typography, Button, Grid, Fade, IconButton, Checkbox, Hidden } from '@material-ui/core'
import useStyles from '../../style'
import { RegisterLoginContext } from '../../context/RegisterLoginContext'
import profileImage from '../../assets/images/profile.png'
import useOutSideClick from '../../components/Hook/useOutSideClick'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";


export default function CompletingProfile() {
    const classes = useStyles();
    let { Name, setName, lastName, setlastName, mobileNumber, age, setAge, city, selectedCity,
        setSelectedCity, imageProfile, setImageProfile, email, setEmail, setnationalCode, SetProfile,
        address, setAdress, value, setValue, showGender, setShowGender, selectedGender, cityId,
        setSelectedGender, showCity, setShowCity, setCityId, loading } = useContext(RegisterLoginContext)


    const selectRefgender = useRef(null)
    useOutSideClick(selectRefgender, () => {
        setShowGender(false)
    })
    const selectRefCity = useRef(null)
    useOutSideClick(selectRefCity, () => {
        setShowCity(false)
    })


    let signUp = () => {
        SetProfile()
    }

    const override = css`
    display: block;
    margin: 0 auto;
    position:fixed;
    margin:auto;
  `;
    return (
        <>
            <div className={classes.addModaldiv} >
                <Grid container direction='column' className={classes.titleGrid} >
                    <Typography color="primary" variant="h3">تکمیل پروفایل</Typography>
                </Grid>
                <Grid container direction="row" wrap="wrap" >
                    <Grid item lg={8} md={8} container direction='row' alignItems="center" className={classes.inputGridimage} >
                        <img id="profileImage" className={classes.profileImage} src={profileImage} />
                        <div className={classes.fileInputDiv} >
                            <div
                                onClick={() => {
                                    document.getElementById('fileinput').click()
                                }}
                                className={classes.ProfileInput} style={{ marginTop: 28, marginRight: 10, height: 25, width: '100%', cursor: 'pointer', fontSize: '10px', backgroundColor: 'rgb(241 241 241)', }}   >
                                <Typography variant="h5" className={classes.profileText}>انتخاب عکس پروفایل</Typography>
                            </div>
                            <input
                                style={{ display: 'none' }}
                                id="fileinput"
                                onChange={(e) => {
                                    try {
                                        var FR = new FileReader()
                                        FR.addEventListener("load", function (event) {
                                            document.getElementById("profileImage").src = event.target.result
                                        })
                                        FR.readAsDataURL(e.target.files[0])
                                        setImageProfile(e.target.files[0])

                                    } catch (e) {
                                        document.getElementById("profileImage").src = profileImage
                                    }
                                }}
                                type="file" className={classes.addInput}
                            />
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography style={{ color: "#7d7c7c" }} variant="subtitle1">موبایل</Typography>
                        <input value={mobileNumber} disabled className={classes.addInput} />
                    </Grid>
                    <Grid item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">نام </Typography>
                        <input value={value ? '' : Name} onChange={(e) => {
                            setValue(false)
                            setName(e.target.value)
                        }}
                            className={classes.addInput} />
                    </Grid>
                    <Grid item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">نام خانوادگی </Typography>
                        <input value={value ? '' : lastName} onChange={(e) => {

                            setValue(false)
                            setlastName(e.target.value)
                        }}
                            className={classes.addInput} />
                    </Grid>
                    <Grid item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">ایمیل</Typography>
                        <input value={value ? '' : email} onChange={(e) => {
                            setValue(false)
                            setEmail(e.target.value)
                        }}
                            className={classes.addInput} />
                    </Grid>
                    <Grid item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">سن</Typography>
                        <input value={value ? '' : age} onChange={(e) => {
                            setValue(false)
                            setAge(e.target.value)
                        }}
                            className={classes.addInput} />
                    </Grid>
                    <Grid ref={selectRefgender} style={{ position: 'relative', marginTop: 2, height: 100 }} item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">جنسیت:</Typography>
                        <Grid item container direction='row' justify='space-between' onClick={() => setShowGender(!showGender)}
                            className={classes.GenderInput}>
                            <Typography style={{ color: "black", margin: 0, alignSelf: "center" }} variant="body2">{selectedGender === "m" ? 'مرد' : 'زن'}</Typography>
                            <KeyboardArrowDownIcon className={classes.KeyboardArrow} />
                        </Grid>
                        <Fade in={showGender}>
                            <div className={classes.GenderFadeElement} >
                                <Typography className={classes.GenderFadeElementText} onClick={() => {
                                    setShowGender(!showGender)
                                    setSelectedGender("f")
                                }}
                                    style={{ padding: 5, cursor: 'pointer' }}>زن</Typography>
                                <Typography className={classes.GenderFadeElementText} onClick={() => {
                                    setShowGender(!showGender)
                                    setSelectedGender("m")
                                }}
                                    style={{ padding: 5, cursor: 'pointer' }}>مرد</Typography>
                            </div>
                        </Fade>

                    </Grid>
                    <Grid ref={selectRefCity} style={{ position: 'relative', marginTop: 2, height: 100 }} item lg={4} md={4} container direction='column' justify="center" className={classes.inputGrid} >
                        <Typography variant="subtitle1">شهر:</Typography>
                        <Grid item container direction='row' justify='space-between' onClick={() => setShowCity(!showCity)}
                            className={classes.GenderInput}>
                            <Typography style={{ color: "black", margin: 0, alignSelf: "center" }} variant="body2">{cityId === 0 ? "انتخاب کنید" : selectedCity}</Typography>
                            <KeyboardArrowDownIcon className={classes.KeyboardArrow} />
                        </Grid>
                        <Fade in={showCity}>
                            <div className={classes.CityFadeElement} >
                                <Typography onClick={() => {
                                    setCityId(0)
                                    setShowCity(!showCity)
                                    setSelectedCity("")
                                }}
                                    style={{ marginTop: 0, alignSelf: "center", width: '100%', padding: 5, cursor: 'pointer' }}>انتخاب کنید</Typography>
                                {
                                    city.map((ct, index) => {
                                        return (
                                            <Typography key={index} className={classes.GenderFadeElementText} onClick={() => {
                                                setCityId(ct.id)
                                                setSelectedCity(ct.name)
                                                setShowCity(!showCity)
                                            }}
                                                style={{ padding: 5, alignSelf: "center", cursor: 'pointer' }}>{ct.name}</Typography>
                                        )
                                    })
                                }
                            </div>
                        </Fade>

                    </Grid>
                    <Grid item lg={12} container direction='row' justify="flex-end" className={classes.inputGrid} >
                        <Button onClick={signUp} className={classes.ConfirmButton} variant="contained" color="primary">ثبت اطلاعات</Button>
                    </Grid>
                </Grid>
            </div>
            <Grid item className={classes.LoadinContainer} style={{display:loading?"flex":"none"}}>
                <PacmanLoader
                    css={override}
                    size={30}
                    color={"#fff"}
                    loading={loading}
                />
            </Grid>
        </>
    )
}

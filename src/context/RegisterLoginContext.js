import { createContext, useState, useContext } from 'react'
import { fetchPost,fetchPost2 } from '../config/Utils'
import Apis from '../constants/Api'
import { AlertContext } from './AlertContext'

const RegisterLoginContext = createContext({
    mobileNumber: [],
    setMobileNumber: (Articles) => { },

})

export { RegisterLoginContext }


export default function RegisterLoginContextProvider({ children }) {
    let { handleOpenAlert } = useContext(AlertContext)
    const [mobileNumber, setMobileNumber] = useState("")
    const [verification, setVerification] = useState(false)
    const [code, setCode] = useState("")
    const [Password, setPassword] = useState("")
    const [reapetPassword, setReapetPassword] = useState("")
    const [pageType, setPageType] = useState(1)
    const [Name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [nationalCode, setnationalCode] = useState("")
    const [address, setAdress] = useState("")
    const [imageProfile, setImageProfile] = useState(null)
    const [showGender, setShowGender] = useState(false)
    const [selectedGender, setSelectedGender] = useState("m")
    const [showCity, setShowCity] = useState(false)
    const [selectedCity, setSelectedCity] = useState("")
    const [cityId, setCityId] = useState(0)
    const [value, setValue] = useState(false)
    const[userName,setUserName]=useState("")
    const[PassWord,setPassWord]=useState("")
    const [token,setToken]=useState( localStorage.getItem('token'))
    const [loading,setLoading]=useState(false)


    //get Verification code
    let handleRegisterCode = () => {
        if (mobileNumber.length === 11 && mobileNumber.substring(0, 2) === '09') {
            let body = {
                "mobile_number": mobileNumber,
                "registrar_type": "user"
            }
            fetchPost(Apis.GET_VerificationCode, body).then(({ responseJSON, status }) => {
                if (status !== 400) {
                    setPageType(2)
                    handleOpenAlert('success', 'کد باموفقیت ارسال شد')
                    setVerification(true)
                } else {
                    handleOpenAlert('error', responseJSON.mobile_number)
                }
            })
        } else {
            handleOpenAlert('error', 'شماره موبایل را به درستی وارد کنید')
        }
    }



    //set Password
    let handleSetPassword = () => {
        if (Password !== reapetPassword) {
            handleOpenAlert('error', 'رمز عبور با تکرار آن برابر نیست')
            return
        }
        let body = {
            "code": code,
            "password": Password,
            "mobile_number": mobileNumber
        }
        fetchPost(Apis.GET_SetPassword, body).then(({ responseJSON, status }) => {
            if (status === 200) {
                let body2 = {
                    "username": mobileNumber,
                    "password": Password
                }
                fetchPost(Apis.LOGIN, body2).then(({ responseJSON, status }) => {
                    localStorage.setItem("token",responseJSON.access);
                })
                handleOpenAlert('success', 'شما با موفقیت ثبت نام کردید')
                setVerification(true)
                setPageType(3)
            }
        })
    }

    //llist of cities
    let city = [
        { id: 1, name: "اردبیل" },
        { id: 2, name: "اصفهان" },
        { id: 3, name: "البرز" },
        { id: 4, name: "ایلام" },
        { id: 5, name: "آذربایجان شرقی" },
        { id: 6, name: "آذربايجان غربي" },
        { id: 7, name: "بوشهر" },
        { id: 8, name: "تهران" },
        { id: 9, name: "چهارمحال بختیاری" },
        { id: 10, name: "خراسان جنوبی" },
        { id: 11, name: "خراسان رضوی" },
        { id: 12, name: "خراسان شمالی" },
        { id: 13, name: "خوزستان" },
        { id: 14, name: "زنجان" },
        { id: 15, name: "سمنان" },
        { id: 16, name: "سیستان وبلوچستان" },
        { id: 17, name: "فارس" },
        { id: 18, name: "قزوین" },
        { id: 19, name: "قم" },
        { id: 20, name: "کردستان" },
        { id: 21, name: "کرمان" },
        { id: 22, name: "کرمانشاه" },
        { id: 23, name: "کهگیلویه وبویر احمد" },
        { id: 24, name: "گلستان" },
        { id: 25, name: "لرستان" },
        { id: 26, name: "مازندران" },
        { id: 27, name: "مرکزی" },
        { id: 28, name: "هرمزگان" },
        { id: 29, name: "همدان" },
        { id: 30, name: "یزد" },
    ]


    //Complete profile
    let SetProfile = () => {
        setLoading(true)
        let body = {
            "first_name": Name,
            "last_name": lastName,
            "gender": selectedGender,
            "email": email,
            "city": cityId,
        }
        
        fetchPost2(Apis.GET_SetProfileData, body).then(({ responseJSON, status }) => {
            if (status === 200) {
                setLoading(false)
                handleOpenAlert('success', 'با موفقیت وارد شدید')
                setVerification(true)
                setPageType(4)
            }
        })
    }

//login
let handleLogin=()=>{
    let body2={
        "username":userName,
        "password":PassWord
    }
    fetchPost2(Apis.LOGIN, body2).then(({ responseJSON, status }) => {
        if(status===200){
        localStorage.setItem("token",responseJSON.access);
        setToken(responseJSON.access)
        setPageType(4)
        }
    })
}    

//LogOut

let logOut = () => {
    localStorage.clear()
    setToken("")
  }



    return (
        <RegisterLoginContext.Provider value={{
            handleRegisterCode, mobileNumber, setMobileNumber, verification, handleSetPassword,
            setCode, setPassword, setReapetPassword, pageType, setPageType, Name, setName, lastName,
            setlastName, age, setAge, imageProfile, setImageProfile,handleLogin,loading,
            email, setEmail, nationalCode, setnationalCode, address, setAdress, value, setValue, showGender,
            setShowGender, selectedGender, setSelectedGender, city, showCity, setShowCity, setCityId,
            selectedCity, setSelectedCity, cityId, SetProfile,token,logOut,setUserName,setPassWord
        }} >
            {children}
        </RegisterLoginContext.Provider>
    )
}





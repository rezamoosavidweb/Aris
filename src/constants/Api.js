
const BaseUrl = "http://api.arisyar.ir/v1/accounts/registration/"

export default {
    GET_VerificationCode: BaseUrl + "step-one/",
    GET_SetPassword: BaseUrl + "step-two/",
    GET_SetProfileData: BaseUrl + "step-three/",
    LOGIN: "http://api.arisyar.ir/v1/accounts/login/"
}
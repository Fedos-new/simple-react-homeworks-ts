import axios from 'axios'

//api
export const requestAPI = {
    authTest(body:AuthTestType) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', body)
            .then(res => res.data.info)
            .catch(error => error.response.data.errorText)
    }
}

//type
export type AuthTestType = {
    success: boolean
}

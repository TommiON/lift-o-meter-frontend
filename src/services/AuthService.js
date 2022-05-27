import axios from 'axios'
import GenerateTokenizedHeader from '../utils/GenerateTokenizedHeader'
import BackendURLConfig from '../utils/BackendURLConfig'

const backendURL = BackendURLConfig()
const baseURL = `${backendURL}/api/auth`

const login = async credentials => {
    const response = await axios.post(`${baseURL}/login/`, credentials)
    return response
}

const logout = async () => {
    const response = await axios.get(`${baseURL}/logout/`, GenerateTokenizedHeader())
    return response
}

export default {login, logout}
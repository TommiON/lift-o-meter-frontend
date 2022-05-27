import axios from 'axios'
import GenerateTokenizedHeader from '../utils/GenerateTokenizedHeader'
import BackendURLConfig from '../utils/BackendURLConfig'

const backendURL = BackendURLConfig()
const baseURL = `${backendURL}/api/users`

const getAll = async () => {
    const response = await axios.get(`${baseURL}`, GenerateTokenizedHeader())
    return response.data
}

const postNew = async (newUserInfo) => {
    const response = await axios.post(`${baseURL}`, newUserInfo)
    return response.data
}

// tästä eteenpäin vanhoja -->
/*
const getCurrent = async () => {
    const response = await axios.get(`${baseURL}/current_user`, GenerateTokenizedHeader())
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data
}

const deleteOne = async (id) => {
    console.log('deleteOne...')
    const response = await axios.delete(`${baseURL}/${id}`)
    return response
}
*/

export default { getAll, postNew }

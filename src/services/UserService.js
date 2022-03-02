import axios from 'axios'
import GenerateTokenizedHeader from './GenerateTokenizedHeader'

const backendURL = process.env.REACT_APP_BACKEND_URL || 'localhost:8080'
const baseURL = `http://${backendURL}/api/users`
const config = GenerateTokenizedHeader()

const getAll = async () => {
    const response = await axios.get(`${baseURL}/all`, config)
    return response.data
}

const getCurrent = async () => {
    const response = await axios.get(`${baseURL}/current_user`, config)
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data
}

const postNew = async (data) => {
    const response = await axios.post(`${baseURL}`, data)
    return response
}

const deleteOne = async (id) => {
    console.log('deleteOne...')
    const response = await axios.delete(`${baseURL}/${id}`)
    return response
}

export default { getAll, getOne, getCurrent, postNew, deleteOne }

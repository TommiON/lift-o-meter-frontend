import axios from 'axios'
import GenerateTokenizedHeader from './GenerateTokenizedHeader'

const baseURL = 'http://localhost:8080/api/workout'
const config = GenerateTokenizedHeader()

const getNext = async () => {
    const response = await axios.get(`${baseURL}/next`, config)
    return response.data
}

const start = async (id) => {
    const url = `${baseURL}/start/${id}`
    const response = await axios.get(url, config)
    return response.data
}

const reset = async (id) => {
    const url = `${baseURL}/reset/${id}`
    const response = await axios.get(url, config)
    return response.data
}

const finish = async (id) => {

}

const getAllFinished = async () => {

}

export default { getNext, start, reset, finish, getAllFinished }

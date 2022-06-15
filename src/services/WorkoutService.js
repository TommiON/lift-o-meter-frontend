import axios from 'axios'
import GenerateTokenizedHeader from '../utils/GenerateTokenizedHeader'
import BackendURLConfig from '../utils/BackendURLConfig'

const backendURL = BackendURLConfig()
const baseURL = `${backendURL}/api/workouts`

const get = async () => {
    const url = baseURL
    const config = GenerateTokenizedHeader()
    const workouts = await axios.get(url, config)
    return workouts.data
}

const getOne = async (id) => {
    const url = `${baseURL}/${id}`
    const config = GenerateTokenizedHeader()
    const workout = await axios.get(url, config)
    return workout.data
}

const start = async (id) => {
    const url = `${baseURL}/${id}/start`
    const config = GenerateTokenizedHeader()
    const response = await axios.put(url, {}, config)
    return response.data
}

const finish = async (id, reps) => {
    const url = `${baseURL}/${id}/finish`
    const config = GenerateTokenizedHeader()
    const response = await axios.put(url, reps, config)
    return response.data
}

export default { get, getOne, start, finish }

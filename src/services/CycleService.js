import axios from 'axios'
import GenerateTokenizedHeader from './GenerateTokenizedHeader'

const backendURL = process.env.BACKEND_URL || 'localhost:8080'
console.log('*** Backendin url: ', backendURL)
const baseURL = `http://${backendURL}/api/cycle`

const config = GenerateTokenizedHeader()

const getCurrent = async () => {
    const response = await axios.get(`${baseURL}/current`, config)
    return response.data
}

export default {getCurrent}
import axios from 'axios'
import GenerateTokenizedHeader from './GenerateTokenizedHeader'

const backendURL = process.env.BACKEND_URL || 'localhost:8080'
console.log('*** Backendin url: ', backendURL)
const baseURL = `http://${backendURL}/api/moveset`

const putChanged = async (id, reps) => {
    const url = `${baseURL}/${id}`
    const payload = {
        newRepetitions: reps
    }
    const config = GenerateTokenizedHeader()

    const response = await axios.put(url, payload, config)
    return response.data
}

export default { putChanged }


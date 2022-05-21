import axios from 'axios'

const backendURL = process.env.REACT_APP_BACKEND_URL || 'localhost:8080'
const URL = `https://${backendURL}/api/healthcheck`

const healthCheck = async () => {
    const response = await axios.get(URL)
}

export default { healthCheck }
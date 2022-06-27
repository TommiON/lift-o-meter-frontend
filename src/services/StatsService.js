import axios from 'axios'
import GenerateTokenizedHeader from '../utils/GenerateTokenizedHeader'
import BackendURLConfig from '../utils/BackendURLConfig'

const backendURL = BackendURLConfig()
const baseURL = `${backendURL}/api/stats`

const get = async () => {
    const url = baseURL
    const config = GenerateTokenizedHeader()
    const stats = await axios.get(url, config)
    return stats.data
}

export default { get }
import axios from 'axios'
const baseUrl = '/api/stations'

const getAll = (query) => {
    const request = axios.get(baseUrl+query)
    console.log(request)
    return request.then(response => response.data)
}

const getDetails = (id) => {
    const request = axios.get(baseUrl+`/${id}`)
    request.then(response => console.log(response.data))
    return request.then(response => response.data)
}

export default { getAll , getDetails}
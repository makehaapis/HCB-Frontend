import axios from 'axios'
//const baseUrl = 'http://localhost:3003/api/journeys'
const baseUrl = '/api/journeys'


const getAll = (query) => {
    console.log(`current axios pagenumber is: ${query}`)
    const request = axios.get(baseUrl+query)
    return request.then(response => response.data)
}

export default { getAll }
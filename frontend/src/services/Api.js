import axios from 'axios'
export default(URL)=> {
  const axiosClient = axios.create({
    baseURL: URL
  })
  return axiosClient
}

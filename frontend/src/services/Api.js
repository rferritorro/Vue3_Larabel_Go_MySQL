import axios from 'axios'
export default(URL)=> {
  const axiosInstance = axios.create({
    baseURL: URL
  })

  console.log("API")
  return axiosInstance
  
}

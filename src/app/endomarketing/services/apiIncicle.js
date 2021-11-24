import axios from 'axios'
import { toast } from 'react-toastify'

export const apiIncicle = axios.create({
  baseURL: `http://localhost:3333/data`,
})

//Avisa quando não encontra o servidor
apiIncicle.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (!error.response) {
      toast.error(`Servidor não encontrado`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }

    return Promise.reject(error)
  }
)

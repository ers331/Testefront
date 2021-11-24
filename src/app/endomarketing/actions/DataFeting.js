import { apiIncicle } from '../services/apiIncicle'
import { toast } from 'react-toastify'

export const DataFeting = async () => {
  try {
    const response = await apiIncicle.get(`/`)
    return { data: response.data, error: null }
  } catch (error) {
    if (error.response.data.messages) {
      toast.error(`Algo deu errado`, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
    return { data: null, error: error.response.data }
  }
}

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  )
}

export default App

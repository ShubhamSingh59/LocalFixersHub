import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userprofile from './Pages/Userprofile';
import Navbar from './Pages/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Signup from './Pages/Singup';
function App() {
  const [count, setCount] = useState(0)
  //const navigate = useNavigate();
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Homepage/>} />
        <Route path='/register' element ={<Register/>} />
        <Route path='/signup' element ={<Signup/>} />
      </Routes>
    </Router>
    
  )
}

export default App

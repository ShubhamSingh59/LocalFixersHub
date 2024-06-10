import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userprofile from './components/UserProfile/Userprofile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
function App() {
  const [count, setCount] = useState(0)
  //const navigate = useNavigate();
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Homepage/>} />
        <Route path='/register' element ={<Register/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/userprofile' element ={<Userprofile/>} />
        <Route path='/private' element ={<h1>HI there</h1>} />
      </Routes>
    </Router>
    
  )
}

export default App

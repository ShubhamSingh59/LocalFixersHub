import React from 'react'
import '../Style/Navbar.css'
import { useNavigate} from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    const handleClick = async (e)=>{
        e.preventDefault();
        navigate('/register');
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={(e)=>{e.preventDefault(); navigate('/')}}>LocalFixersHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" onClick={(e)=>{e.preventDefault(); navigate('/')}}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={(e)=>{e.preventDefault(); navigate('/signup')}}>Sign Up</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={handleClick}>Resigter</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import '../Login/Signup.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie';
//import Cookies from 'js-cookie';
function Login(){
    const [form, setForm] = useState({
        usermail: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const validateForm = () => {
        const newErrors = {};
        if (!form.usermail) newErrors.usermail = 'Email address is required';
        if (!form.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try{
            const response = await axios.post('http://localhost:5000/login',{
                usermail: form.usermail,
                password: form.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            if(response.status === 200) {
                setCookie('access_token', response.data.token, { path: '/' });
                //Cookies.set('access_token', response.data.token, { path: '/' })
                localStorage.setItem('access_token', response.data.token);
                console.log(cookies)
                alert(response.data.message);
                //console.log(cookies)
                navigate('/userprofile')
            } else {
                alert(response.data.message);
                navigate('/')
            }
        }
        catch (error) {
            alert(error.response?.data?.message || error.message);
        }
    }
    return(
        <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="x4wyfn" name='usermail' onChange={handleChange}/>
                        <label for="floatingInput">Email address</label>
                        {errors.usermail && <div className="text-danger">{errors.usermail}</div>}
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="ug5b3f" name='password' onChange={handleChange}/>
                        <label for="floatingPassword">Password</label>
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button class="btn btn-light w-100 py-2" type="submit" fdprocessedid="e6ru9b">Sign Up</button>
                </form>
            </div>
    );
}
export default Login;
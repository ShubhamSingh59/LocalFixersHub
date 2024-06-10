import React, { useState } from 'react'
import '../Register/Register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({
        username: '',
        usermail: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const validateForm = () => {
        const newErrors = {};
        if (!form.username) newErrors.username = 'Full Name is required';
        if (!form.usermail) newErrors.usermail = 'Email address is required';
        if (!form.password) newErrors.password = 'Password is required';
        if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username: form.username,
                usermail: form.usermail,
                password: form.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.status);
            if (response.status === 200) {
                alert("Registration Successful!");
                navigate('/')
            } else {
                alert("Registration Failed");
                navigate('/register')
            }
        } catch (error) {
            alert(error.response?.data?.message || error.message);
        }

        console.log("Form submitted");
    }

    return (
        <div className='registerPage'>
            <form onSubmit={handleSubmit} method='POST'>
                <h1 className="h3 mb-3 fw-normal">Register Yourself</h1>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="Full Name"
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                    />
                    <label htmlFor="floatingInput1">Full Name</label>
                    {errors.username && <div className="text-danger">{errors.username}</div>}
                </div>
                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="name@example.com"
                        name='usermail'
                        onChange={handleChange}
                        value={form.usermail}
                    />
                    <label htmlFor="floatingInput2">Email address</label>
                    {errors.usermail && <div className="text-danger">{errors.usermail}</div>}
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword1"
                        placeholder="Password"
                        name='password'
                        onChange={handleChange}
                        value={form.password}
                    />
                    <label htmlFor="floatingPassword1">Password</label>
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword2"
                        placeholder="Confirm Password"
                        name='confirmPassword'
                        onChange={handleChange}
                        value={form.confirmPassword}
                    />
                    <label htmlFor="floatingPassword2">Confirm Password</label>
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                </div>
                <button className="btn btn-light w-100 py-2" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;

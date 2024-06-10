import React, { useEffect, useState } from 'react';
import Welcome from '../WelcomeMessage/Welcomemessage';
import AccountDetails from '../AccountDetails/AccountDetails';
import Pastbooking from '../Pastbooking/Pastbooking';
import '../UserProfile/Userprofile.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
//import Cookies from 'js-cookie';
function Userprofile() {
   const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});
    useEffect(() => {
        //const token = cookies.access_token; 
        const token = localStorage.getItem('access_token');
        console.log(token);
        if (!token) {
            alert('No token found!');
            navigate('/signup'); 
            return;
        }
        const getData = async () => {
                
              
            try {
                
                const response = await axios.get('http://localhost:5000/users/userdata', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });

                if (response.status === 200) {
                    setUserdata(response.data);
                } else {
                    console.error('API did not return a status 200');
                }
            } catch (error) {
                alert(error.response?.data?.message || error.message);
            }
        };

        getData();
    }, [cookies.access_token ,navigate]);

    const Logout = () => {
        localStorage.removeItem('access_token');
        removeCookie("access_token")
        alert("Log out successfull");
        navigate('/');
    };

    return (
        <div className='profilepage'>
            <Welcome Name={userdata.username} />
            <div className='bookdetails'>
                <Pastbooking />
                <AccountDetails userdata={userdata}/>
            </div>
            <button onClick={Logout}>LOGOUT</button>
        </div>
    );
}

export default Userprofile;

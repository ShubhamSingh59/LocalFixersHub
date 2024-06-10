import React from "react";
import '../AccountDetails/AccountDetails.css'
function AccountDetails({userdata}) {
    return (
        <div className="deatails">
            <div className="heading"><h2>Account Details</h2></div>
            <div style={{ textAlign: 'right' }}>
                    <a href="#" style={{ color: '#007BFF', textDecoration: 'underline' }}>Edit</a>
            </div>
            <div className="Detail">
                <div >
                    <span>Full Name: {userdata.username}</span>
                </div>
                <div >
                    <span>Email Address: {userdata.usermail}</span>
                </div>
                
            </div>
        </div>
    );
}

export default AccountDetails;
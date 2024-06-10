import React from 'react'
import'../WelcomeMessage/Welcomemessage.css'
function Welcome({Name}){
    return(
        <div className='welcome'>
            <h1>Welcome to Your Profile {Name}</h1>
        </div>
    )
}
export default Welcome;
import React from 'react'
import'../Style/Welcomemessage.css'
function Welcome({Name}){
    return(
        <div className='welcome'>
            <h1>Welcome to Your Profile {Name}</h1>
        </div>
    )
}
export default Welcome;
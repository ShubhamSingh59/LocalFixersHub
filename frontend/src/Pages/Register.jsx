import React from 'react'
import '../Style/Register.css'
function Register(){
    return(
        <div className='registerPage'>
                <form>
                    <h1 class="h3 mb-3 fw-normal">Register Yourself</h1>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" fdprocessedid="ug5b3f" />
                        <label for="floatingInput">Full Name</label>
                    </div>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="x4wyfn" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="ug5b3f" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="ug5b3f" />
                        <label for="floatingPassword">Confirm Password</label>
                    </div>
                    <button class="btn btn-light w-100 py-2" type="submit" fdprocessedid="e6ru9b">Register</button>
                </form>
            </div>
    )
}
export default Register;
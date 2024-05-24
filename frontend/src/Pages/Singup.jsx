import React from 'react'
import '../Style/Signup.css'
function Signup(){
    return(
        <div className='signup'>
                <form>
                    <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="x4wyfn" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="ug5b3f" />
                        <label for="floatingPassword">Password</label>
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
export default Signup;
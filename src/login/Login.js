import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" placeholder='Your email' /> <br />
                <input type="password" placeholder='Your password' name="" id="" /> <br />
                <input type="submit" value="Submit" />


                <p>New to our hospial? <Link to='/registar'>Create an account</Link></p>




            </form>
            <div>---------or----------</div>
            <button className='btn-regular'>Google sign in</button>
            
        </div>
    );
};

export default Login;
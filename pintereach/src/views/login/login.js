// react imports
import React from 'react';

const Login = () => {
    return(
        <div>
            <form>
                <input name="username" placeholder="username"></input>
                <input name="password" placeholder="password"></input>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
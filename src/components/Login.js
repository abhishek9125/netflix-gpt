import React from 'react';
import { BG_URL } from '../utils/constants';
import Header from './Header';

function Login() {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="" src={BG_URL} alt="logo" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                 <h1 className="font-bold text-3xl py-4">
                     Sign In
                    {/* {isSignInForm ? "Sign In" : "Sign Up"} */}
                </h1>
                <input
                    //   ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    //   ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    // onClick={handleButtonClick}
                >
                    Sign In
                    {/* {isSignInForm ? "Sign In" : "Sign Up"} */}
                </button>
            </form>
        </div>
    )
}

export default Login;

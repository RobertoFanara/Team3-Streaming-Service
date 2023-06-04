import Login from "./Login"
import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginPage = () => {
    return(
        <>  
        <div className="w-full h-screen bg-loginBackground bg-cover bg-center">
        <div className="flex min-h-full flex-col justify-center lg:px-8">
            <div className=" flex flex-col justify-center align-center sm:w-[400px] mx-auto p-4 bg-black bg-opacity-30 shadow-lg">
            <div className="sm:w-full sm:max-w-sm mx-auto">
                <img className="mx-auto h-32 w-auto rounded-full" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#FFFFFF]">Servizio Streaming Team 3</h2>
            </div>

            <div className="mt-10 sm:w-full sm:max-w-sm flex flex-col justify-center align-center mx-auto"> 
                <Login email="danilocarbone2015@gmail.com" password="123456" />
                <p className="mt-10 text-center text-sm text-[#FFFFFF]">
                If you are not registered |
                <a href="#" className="font-semibold leading-6 text-white hover:text-black"> Register Now!</a>
                </p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default LoginPage
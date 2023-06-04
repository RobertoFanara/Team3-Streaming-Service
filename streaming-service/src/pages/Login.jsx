import { useState } from "react";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleLogin = (event) => {
        event.preventDefault();
        if (email === `${props.email}` && password === `${props.password}`) {      //Prova, da sistemare
          setLoggedIn(true);
        }
      };
 
    return(
        <>
        <form className="space-y-6 flex flex-col justify-center align-center" action="#" method="POST" onSubmit={handleLogin} >
            <div className="w-[80%] mx-auto">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#FFFFFF]" >E-mail</label>
                <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" onChange={handleEmailChange} required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg bg-gray-800"  />
                </div>
            </div>

            <div className="w-[80%] mx-auto">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#FFFFFF]">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-[#FFFFFF] hover:text-black">Forgot password?</a>
                    </div>
                </div>

                <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" onChange={handlePasswordChange} required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-800" />
                </div>
            </div>

            <div className="flex justify-center">
                <button type="submit" className="flex w-[150px] justify-center rounded-md bg-trasparent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-b from-black to-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-white ">Sign in</button>
            </div>
        </form>
        </>
    )
}

export default Login
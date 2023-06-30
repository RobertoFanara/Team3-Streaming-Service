import {useState} from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <div className='flex justify-center items-center flex-col gap-5 text-white' style={{minHeight: 'calc(100vh - 242px)'}}>
            <h3 className='text-[45px] font-semibold mb-5'>Registrazione utente</h3>
            <div className="flex flex-col gap-3 text-white justify-center border border-[#ffbb38] p-5 rounded-md">
                <div className="flex justify-between items-center gap-2">
                    <label className="form__label" for="firstName">First Name: </label>
                    <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <label className="form__label" for="lastName">Last Name: </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <label className="form__label" for="password">Password: </label>
                    <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <label className="form__label" for="confirmPassword">Confirm Password: </label>
                    <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            <div className="mt-8 text-lg text-center">
                <Link to="/">
                    <button onClick={()=>handleSubmit()} type="submit" className="rounded-3xl bg-[#ffbb38] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Registrati</button>
                </Link>
            </div>
            </div>
        </div>

    )
}

export default RegistrationForm
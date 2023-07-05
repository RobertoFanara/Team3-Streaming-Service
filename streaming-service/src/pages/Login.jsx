import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [data, setData] = useState({
    username: '',
    password: ''
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
          const response = await axios.post('http://localhost:3000/login',{
              username: data.username,
              password: data.password
          })
          setData(response.data)
          navigate('/homepage');
          console.log(response)
      } catch (error) {
          console.log(error)
      }
  }

  fetchData()
    // axios.post('http://localhost:5173/login', {username, password})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }

  const handleInput = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
      <div
        className="my-10 text-white flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 242px)" }}
      >
        <h3 className="text-[45px] font-semibold mb-5">Login</h3>
        <div className="rounded-xl bg-[rgb(28,28,28)]  px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                width="150"
                alt=""
              />
              <h1 className="mb-2 text-2xl">sTrEAM-3</h1>
              <span className="text-gray-300">Enter Login Details</span>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]"
                  type="text"
                  name="username"
                  placeholder="Your Username"
                  required
                  value={data.username}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]"
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  value={data.password}
                  onChange={handleInput}
                />
              </div>
              <p className="text-gray-300">
                Se non hai un account{" "}
                <Link to="/registration">
                  <span className="font-bold hover:underline">
                    Registrati qui
                  </span>
                </Link>
              </p>
              <div className="mt-8 flex justify-center text-lg">
                <button
                  type="submit"
                  className="rounded-3xl bg-[#ffbb38] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          username: data.username,
          password: data.password,
        });
        setData(response.data);
        navigate("/homepage");
        console.log(response);
      } catch (error) {
        setError(true)
        console.log(error);
      }
    };

    fetchData();
  };

  const handleInput = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
    {error && <div
        id="toast-warning"
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
          <span className="sr-only">Warning icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>}

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

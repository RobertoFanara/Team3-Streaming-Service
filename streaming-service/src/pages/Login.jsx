import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-screen mt-10 text-white flex justify-center items-center">
      <div className="rounded-xl bg-[rgb(28,28,28)]  px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <img src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png" width="150" alt="" srcset="" />
        <h1 className="mb-2 text-2xl">Service Streaming Team-3</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <form action="#">
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Your Email" />
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
        <Link to="/">
          <button type="button" className="rounded-3xl bg-[#ffbb38] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </Link>
        </div>
      </form>
    </div>
  </div>
      </div>
    </>
  );
};

export default Login;

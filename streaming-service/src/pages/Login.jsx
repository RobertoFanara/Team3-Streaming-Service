import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="my-10 text-white flex flex-col justify-center items-center" style={{minHeight: 'calc(100vh - 242px)'}}>
      <h3 className='text-[45px] font-semibold mb-5'>Login</h3>
      <div className="rounded-xl bg-[rgb(28,28,28)]  px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <img src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png" width="150" alt=""/>
        <h1 className="mb-2 text-2xl">sTrEAM-3</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <form action="#">
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" type="text" name="name" placeholder="Your Email" />
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-[#ffbb38] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:outline-none focus:ring focus:ring-[#ffbb38]" type="Password" name="name" placeholder="*********" />
        </div>
        <p className="text-gray-300">Se non hai un account <Link to="/registration"><span className="font-bold hover:underline">Registrati qui</span></Link></p>
        <div className="mt-8 flex justify-center text-lg">
        <Link to="/homepage">
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

import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backimg"
        />
      </div>
      <form className="w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 p-6 text-white">
        <h1 className="text-white font-bold text-3xl">Sign In</h1>
        <br />
        <input
          type="text"
          className="border border-black p-4 my-4 w-full bg-gray-700"
          placeholder="Email or phone number"
        />
        <br />
        <input
          type="password"
          className="border border-black p-4 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <br />
        <button className="bg-red-600 text-slate-100 font-medium p-4 my-4 rounded-lg w-full">
          Sign In
        </button>
        <br />
        <h3 className=" text-gray-400">
          New to Netflix?
          <Link to="/" className="text-slate-100 hover:underline">
            Sign up now.
          </Link>
        </h3>
        <br />
        <h4 className="text-gray-400 font-thin text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </h4>
      </form>
    </div>
  );
};

export default Login;

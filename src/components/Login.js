import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

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
        <h1 className="text-white font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <br />
        {!isSignInForm && (
          <input
            type="text"
            className="border border-black p-4 my-4 w-full bg-gray-700"
            placeholder="Name"
          />
        )}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <br />
        <h3 className=" text-gray-400">
          New to Netflix?
          <span
            className="text-slate-100 hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Already registered. SignIn now."}
          </span>
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

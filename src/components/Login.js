import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/loginSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    //Validate form
    let message;
    if (isSignInForm) {
      message = checkValidation(
        isSignInForm,
        email.current.value,
        password.current.value
      );
    } else {
      message = checkValidation(
        isSignInForm,
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover  md:h-auto"
          src={BG_URL}
          alt="backimg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-10/12 md:w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 p-6 text-white"
      >
        <h1 className="text-white font-bold text-md md:text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <br />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="border border-black p-4 my-4 w-full bg-gray-700"
            placeholder="Name"
          />
        )}
        <br />
        <input
          ref={email}
          type="text"
          className="border border-black p-4 my-4 w-full bg-gray-700"
          placeholder="Email or phone number"
        />
        <br />
        <input
          ref={password}
          type="password"
          className="border border-black p-4 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <br />
        <button
          className="bg-red-600 text-slate-100 font-medium p-4 my-4 rounded-lg w-full"
          onClick={handleSubmit}
        >
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

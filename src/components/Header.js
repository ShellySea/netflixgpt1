import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/loginSlice";
import { SUPPORTED_LANGUAGES, netlfix_logo } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { selectLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.login);

  const showGPTSelect = useSelector((state) => state.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // update my store
        console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribes when component will be unmounted
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGpt = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguage = (e) => {
    dispatch(selectLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between">
      <img className="w-44 mx-auto md:mx-0" src={netlfix_logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGPTSelect.showGPT && (
            <select
              className="p-2 m-2 bg-gray-200 text-black"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" bg-purple-800 text-white mx-4 my-2 px-2 py-2 rounded-lg text-sm hover:bg-purple-500
            md:bg-purple-800 text-white mx-4 my-2 px-4 py-2 rounded-lg hover:bg-purple-500"
            onClick={handleGpt}
          >
            {showGPTSelect.showGPT ? "Home page" : "Search GPT"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="signoutIcon"
            src={user?.photoURL}
          />
          <button className="cursor-pointer text-white" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

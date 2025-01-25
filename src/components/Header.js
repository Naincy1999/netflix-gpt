import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  //sign out logic after getting signing in and moving to home page
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    //sign in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        //if uder is successfully signed in
        navigate("/browse");
      } else {
        //sign out
        dispatch(removeUser());
        //if user is not signed in
        navigate("/");
      }
    });
    //when component unmounts unsubscribe to useeffect action
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 " alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white px-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

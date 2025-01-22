// import React, { useEffect } from "react";
// import Login from "./Login";
// import Browse from "./Browse";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigate,
// } from "react-router-dom"; ///for providing routing btwn the pages
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

// const Body = () => {
//   const dispatch = useDispatch();
//   //navigating user to
//   const navigate = useNavigate();
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />,
//     },
//     {
//       path: "/browse",
//       element: <Browse />,
//     },
//   ]);

//   //for updating user inside the redux store
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       //when user sign in
//       if (user) {
//         const { uid, email, displayName } = user;
//         dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
//         navigate("/browse");
//       } else {
//         //when user sign out
//         dispatch(removeUser());
//         navigate("/"); //navigate to main page
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };
// export default Body;

import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //wanting onAuthStateChanged API to be called only once
  useEffect(() => {
    //sign in
    onAuthStateChanged(auth, (user) => {
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
      } else {
        //sign out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

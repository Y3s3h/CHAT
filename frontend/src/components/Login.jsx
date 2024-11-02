import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "..";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-center my-2">
            Don't have an account? <Link to="/signup"> signup </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { setAuthUser } from "../redux/userSlice";

// const Login = () => {
//   const [user, setUser] = useState({
//     userName: "",
//     password: "",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         `http://localhost:8080/api/v1/user/login`,
//         user,
//         {
//           header: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       navigate("/");

//       dispatch(setAuthUser(res.data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//     }

//     setUser({
//       userName: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="min-w-96 mx-auto">
//       <div
//         className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
//  "
//       >
//         <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>

//         <form onSubmit={onSubmitHandler} action="">
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text  text-gray-300">
//                 Username
//               </span>
//             </label>
//             <input
//               value={user.userName}
//               onChange={(e) => setUser({ ...user, userName: e.target.value })}
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="Username"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text  text-gray-300">
//                 Password
//               </span>
//             </label>
//             <input
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="XXXXXXXXXX"
//             />
//           </div>

//           <p className="text-center mt-3  text-gray-300">
//             Don't have an account? <Link to="/register">Signup</Link>
//           </p>
//           <div>
//             <button
//               type="submit"
//               className="btn btn-block btn-sm mt-2 border border-slate-700 "
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
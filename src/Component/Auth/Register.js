import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const [logUser, setLogUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLogUser(true);
        toast("Login Successfuly");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
        // The email of the user's account used.
      });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Min 6 digit");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile();
        setName("");
        setEmail("");
        setPassword("");
        setProfileImg("");
        setLogUser(true);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        // ..
      });
  };
  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profileImg,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        toast(error.massage);
      });
  };
  useEffect(() => {
    window.document.title = "FoodGhor-Register";
    if (logUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, logUser]);
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h4>Register Form</h4>
        <hr />
        <div className="card p-3">
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control my-2"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              value={profileImg}
              onChange={(e) => setProfileImg(e.target.value)}
              className="form-control my-2"
              placeholder="Profile Url"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-2"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control my-2"
              placeholder="Password"
              required
            />
            <button className="form-control btn btn-info">Register</button>
            <Toaster />
          </form>
        </div>
        <div className="otherLoginSystem">
          <button
            onClick={googleSignIn}
            className=" my-2 form-control btn btn-dark"
          >
            <i className="fab mx-2 fa-google"></i>
            Google
          </button>
        </div>
      </div>
      <div className="text-center my-2">
        <small>
          Already Registed?{" "}
          <strong>
            <Link to="/user/login">Login</Link>
          </strong>
        </small>
      </div>
    </div>
  );
};

export default Register;

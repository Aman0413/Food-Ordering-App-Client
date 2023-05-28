import React, { useState } from "react";
import loginBg from "../assets/img/loginBg.jpg";
import logo from "../assets/img/logo.png";
import LoginInput from "./LoginInput";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase.config";

function Login() {
  const [userEmail, setuserEmail] = useState("");
  const [isSignup, setisSignup] = useState(false);
  const [password, setPassword] = useState("");
  const [Confirm_password, setConfirm_Password] = useState("");
  const firebaseAuth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            console.log(token);
          });
        }
      });
    });
  };
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background image */}
      <img
        src={loginBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/* content box */}

      <div
        className="flex flex-col items-center bg-cardOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 
      py-12"
      >
        {/* top logo */}

        <div className="flex items-center justify-start gap-4 w-full">
          <img src={logo} alt="" className="w-8" />
          <p className="text-headingColor font-semibold text-2xl">City</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor ">
          {isSignup ? "Sign Up" : "Sign In"} in with following
        </p>

        {/* input section */}
        <div className="w-full flex  flex-col  items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFun={setuserEmail}
            type="email"
            isSignup={isSignup}
          />
          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFun={setPassword}
            type="password"
            isSignup={isSignup}
          />

          {isSignup && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={Confirm_password}
              inputStateFun={setConfirm_Password}
              type="password"
              isSignup={isSignup}
            />
          )}

          {!isSignup ? (
            <p>
              Doesn't have an account:{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 underline cursor-pointer bg-transparent"
                onClick={() => setisSignup(true)}
              >
                Create One
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account:{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 underline cursor-pointer bg-transparent"
                onClick={() => setisSignup(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* button section */}

          {isSignup ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign In
            </motion.button>
          )}
        </div>
        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonClick}
          className="flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4 "
          onClick={loginWithGoogle}
        >
          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base text-headingColor">
            Signin with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;

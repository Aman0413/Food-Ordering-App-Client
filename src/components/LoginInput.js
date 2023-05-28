import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeinOut } from "../animations";

function LoginInput({
  placeHolder,
  icon,
  inputState,
  inputStateFun,
  type,
  isSignup,
}) {
  const [isFocus, setisFocus] = useState(false);
  return (
    <motion.div
      {...fadeinOut}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      } `}
    >
      {icon}
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none"
        value={inputState}
        onChange={(e) => inputStateFun(e.target.value)}
        onFocus={() => setisFocus(true)}
        onBlur={() => setisFocus(false)}
      />
    </motion.div>
  );
}

export default LoginInput;

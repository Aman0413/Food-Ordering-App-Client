import React from "react";
import { motion } from "framer-motion";
import { fadeinOut } from "../animations";
import { FaCheck } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";

function Alert({ type, message }) {
  if (type === "info") {
    return (
      <motion.div
        {...fadeinOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4"
      >
        <FaCheck className="text-xl text-blue-700" />
        <p className="text-xl text-blue-700">{message}</p>
      </motion.div>
    );
  }
  if (type === "danger") {
    return (
      <motion.div
        {...fadeinOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangle className="text-xl text-red-700" />
        <p className="text-xl text-red-700">{message}</p>
      </motion.div>
    );
  }
  if (type === "warning") {
    return (
      <motion.div
        {...fadeinOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-orange-300 shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangle className="text-xl text-orange-700" />
        <p className="text-xl text-orange-700">{message}</p>
      </motion.div>
    );
  }
}

export default Alert;

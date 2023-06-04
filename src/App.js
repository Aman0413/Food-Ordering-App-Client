import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { motion } from "framer-motion";
import { fadeinOut } from "./animations";
import MainLoader from "./components/MainLoader";
import Alert from "./components/Alert";

function App() {
  const firebaseAuth = getAuth(app);
  const [isLoading, setisLoading] = useState(false);
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();
  useEffect(() => {
    setisLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setisLoading(false);
      }, 3000);
    });
  }, []);
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center">
      {isLoading && (
        <motion.div
          {...fadeinOut}
          className="flxed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
}

export default App;

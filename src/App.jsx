import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Login from "./pages/RegisterLogin/Login.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import PostApplication from "./pages/Applications/PostApplication.jsx";
import Register from "./pages/RegisterLogin/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      // If already authenticated, fetch user details
      dispatch(getUser());
    }
  }, [dispatch, isAuthenticated]);
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/post/application/:jobId"
            element={<PostApplication />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" theme="dark" />
      </Router>
    </>
  );
};

export default App;

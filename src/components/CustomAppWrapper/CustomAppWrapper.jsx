"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar";

import {
  getNewsfirstSourceRequest,
  getNewsSecondSourceRequest,
} from "@/store/slices/newsSlice";
import Loader from "../Loader";
import Snackbar from "../Snackbar";
import Footer from "../Footer";

const CustomAppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getNewsfirstSourceRequest({
        sortBy: "publishedAt",
        domains: "bbc.com",
      })
    );

    dispatch(getNewsSecondSourceRequest());
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      {children}
      <Snackbar />
      <Loader />
      <Footer />
    </div>
  );
};

export default CustomAppWrapper;

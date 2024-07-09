import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar as MuiSnackbar } from "@mui/material";

import { showHideSnackbar } from "@/store/slices/snackBarSlice";
import "./Snackbar.scss";

const Snackbar = () => {
  const dispatch = useDispatch();
  const showSnackbar = useSelector((state) => state.snackbar.showSnackbar);
  const message = useSelector((state) => state.snackbar.message);
  const type = useSelector((state) => state.snackbar.type);

  const [msgsArr, setMsgsArr] = useState([]);

  useEffect(() => {
    setMsgsArr(typeof message === 'string' ? message.split(",") : []);
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      showHideSnackbar({
        isOpen: false,
        type,
        message,
      })
    );
  };

  return (
    <div className="snackbar-container">
      {msgsArr.map((msg, i) => (
        <MuiSnackbar
          open={showSnackbar}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          className={`snackbar ${type} alert_no_${i + 1}`}
          message={<span className="fsize-16">{msg}</span>}
          key={i}
        />
      ))}
    </div>
  );
};

export default Snackbar;

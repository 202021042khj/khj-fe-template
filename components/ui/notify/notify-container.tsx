"use client";

import { cssTransition, ToastContainer } from "react-toastify";

const NotifyContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      closeOnClick={true}
      closeButton={false}
      hideProgressBar={true}
      transition={cssTransition({
        enter: "fade-in",
        exit: "fade-out",
        appendPosition: false,
        collapse: false,
      })}
      pauseOnFocusLoss={false}
      limit={1}
    />
  );
};

export default NotifyContainer;

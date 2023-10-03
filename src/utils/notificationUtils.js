import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const success = (message, duration = 3000) => {
  console.log("inside th esucces of taost");
  toast.success(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
};

export const error = (message, duration = 3000) => {
  toast.error(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
};

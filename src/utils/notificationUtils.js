import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//to dsiplay success notification
export const success = (message, duration = 3000) => {
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

//to dsiplay error notification
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

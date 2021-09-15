import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

import ModalGroup from "./components/ModalGroup";
import { useState } from "react";
const App = () => {
  const [closeModal, setcloseModal] = useState(true);
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
      {/* <ModalGroup closeModal={setcloseModal} /> */}
    </>
  );
};

export default App;

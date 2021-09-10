import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import Login from "./pages/Login";

const App = () => {
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
      <Login />
      <Routes />
    </>
  );
};

export default App;

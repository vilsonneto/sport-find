import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import ModalEvent from "./components/ModalEvent";
import { useState } from "react";

const App = () => {
  const [teste, setTeste] = useState(true);
  const testeCriar1 = {
    group_Id: 1,
    categoria: "blabla",
    creator: 1,
  };

  const testeEditar2 = {
    name: "Nati",
    group_Id: 1,
    local: "blabla",
    data: "2020-12-20",
    categoria: "blabla",
    description: "blbla",
    users: [],
    creator: 1,
    id: 1,
  };

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
      <ModalEvent closeModal={setTeste} create={testeCriar1} />
    </>
  );
};

export default App;

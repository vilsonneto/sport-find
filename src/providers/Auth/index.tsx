import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { History } from "history";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import {
  IDecode,
  IProvidersProps,
  IUser,
  ILoginData,
  IRegisterData,
} from "../../types/IProviders";

interface IAuthProviderData {
  token: string;
  user: IUser;
  loginUser: (userData: ILoginData, history: History) => void;
  registerUser: (userData: IRegisterData, history: History) => void;
  logoutUser: () => void;
  getUser: () => void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IProvidersProps) => {
  const token = localStorage.getItem("@sportfind: token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [user, setUser] = useState<IUser>({} as IUser);

  // const history = useHistory();
  const decode = jwt_decode;

  const getUser = () => {
    const decodeToken: IDecode = decode(auth);
    api
      .get(`/users/${decodeToken.sub}`)
      .then((response) => setUser(response.data))
      .catch((err) =>
        console.log("Não foi possível pegar informações do usuário.", err)
      );
  };

  const loginUser = (userData: ILoginData, history: History) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("@sportfind: token", response.data.accessToken);
        setAuth(response.data.accessToken);
        toast.success("Bem vindo ao Sport Find!");
        // , {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
        getUser();
        // history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
        // , {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
      });
  };

  const registerUser = (userData: IRegisterData, history: History) => {
    const newData = {
      ...userData,
      subscribed_groups: [],
      subscribed_events: [],
    };
    api
      .post("/register", newData)
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        //   , {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
        console.log("history");
        history.push("/login");
      })
      .catch(() => {
        toast.error("Algo deu errado!");
        console.log("erro");
        // , {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
      });
  };

  const logoutUser = () => {
    setAuth("");
    localStorage.clear();
    toast.success("Volte sempre!");
    // , {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   }
  };

  return (
    <AuthContext.Provider
      value={{
        token: auth,
        getUser,
        user,
        logoutUser,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

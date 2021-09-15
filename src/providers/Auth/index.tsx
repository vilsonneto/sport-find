import { createContext, useContext, useEffect, useState } from "react";
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
  editUser: (username: string, state: string) => void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IProvidersProps) => {
  const token = localStorage.getItem("@sportfind: token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [user, setUser] = useState<IUser>({} as IUser);

  const decode = jwt_decode;

  const loginUser = (userData: ILoginData, history: History) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("@sportfind: token", response.data.accessToken);
        setAuth(response.data.accessToken);
        toast.success("Bem vindo ao Sport Find!");
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
      });
  };

  const registerUser = (userData: IRegisterData, history: History) => {
    const newData = {
      ...userData,
    };
    api
      .post("/register", newData)
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");

        history.push("/login");
      })
      .catch(() => {
        toast.error("Algo deu errado!");
      });
  };

  const logoutUser = () => {
    setAuth("");
    localStorage.clear();
    toast.success("Volte sempre!");
  };

  const editUser = (username: string, state: string) => {
    api
      .patch(
        `/users/${user.id}`,
        { username: username, state: state },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!!auth) {
      const decodeToken: IDecode = decode(auth);

      api
        .get(`/users/${decodeToken.sub}`, {
          headers: { Authorization: `Bearer ${auth}` },
        })
        .then((response) => setUser(response.data))
        .catch((err) =>
          console.log("Não foi possível pegar informações do usuário.", err)
        );
    }
  }, [auth, decode]);

  return (
    <AuthContext.Provider
      value={{
        token: auth,
        user,
        logoutUser,
        registerUser,
        loginUser,
        editUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

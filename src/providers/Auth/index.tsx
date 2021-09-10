import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import {
  IDecode,
  IEvents,
  IGroup,
  IProvidersProps,
  IUser,
} from "../../types/IProviders";

interface ILoginData {
  email: string;
  password: string;
}

interface IRegisterData {
  username: string;
  email: string;
  password: string;
  state: string;
}

interface IAuthProviderData {
  token: string;
  user: IUser;
  loginUser: (userData: ILoginData) => void;
  registerUser: (userData: IRegisterData) => void;
  logoutUser: () => void;
  getUser: () => void;
  addUserListGroup: (group: IGroup) => void;
  removeUserListGroup: (group: IGroup) => void;
  addUserListEvent: (event: IEvents) => void;
  removeUserListEvent: (event: IEvents) => void;
  editUser: (username: string, state: string) => void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IProvidersProps) => {
  const token = localStorage.getItem("@sportfind: token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [user, setUser] = useState<IUser>({} as IUser);

  const history = useHistory();
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

  const loginUser = (userData: ILoginData) => {
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
        history.push("/dashboard");
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

  const registerUser = (userData: IRegisterData) => {
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
        history.push("/login");
      })
      .catch(() => {
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

  const addUserListGroup = (group: IGroup) => {
    const newListSubscribeGroups = [...user.subscribed_groups, group];

    api
      .patch(
        `/user/${user.id}`,
        { subscribed_groups: newListSubscribeGroups },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  const removeUserListGroup = (group: IGroup) => {
    const newListSubscribeGroups = user.subscribed_groups.filter(
      (item: IGroup) => item.id !== group.id
    );

    api
      .patch(
        `/user/${user.id}`,
        { subscribed_groups: newListSubscribeGroups },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  const addUserListEvent = (event: IEvents) => {
    const newListSubscribeEvents = [...user.subscribed_events, event];

    api
      .patch(
        `/user/${user.id}`,
        { subscribed_events: newListSubscribeEvents },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  const removeUserListEvent = (event: IEvents) => {
    const newListSubscribeEvents = user.subscribed_events.filter(
      (item: IEvents) => item.id !== event.id
    );

    api
      .patch(
        `/user/${user.id}`,
        { subscribed_events: newListSubscribeEvents },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  const editUser = (username: string, state: string) => {
    api
      .patch(
        `/user/${user.id}`,
        { username: username, state: state },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
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
        addUserListGroup,
        removeUserListGroup,
        addUserListEvent,
        removeUserListEvent,
        editUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { useState, useEffect, ReactNode } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/Auth";

// Se a rota for privada e o usuário não ta logado, ele vai pro login
// Se a rota for privada e o usuário logado, ele vai pra rota
// Se a rota não for privada e o usuário estiver logado, ele não precisa ver
// Se a rota não rota for privada e o usuário não estiver logado, ele pode ver

// true true = ok
// true false = vai pro login
// false e true = dashboard
// false e false = ok
interface IrouteParams {
  exact: boolean;
  path: string;
  isPrivate?: boolean;
  children: ReactNode;
  rest?: any;
}
const Route = ({ isPrivate = false, children, ...rest }: IrouteParams) => {
  const { token } = useAuth();
  const [auth, setAuth] = useState<string>(token);

  useEffect(() => {
    setAuth(localStorage.getItem("@token")!);
  }, [token]);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;

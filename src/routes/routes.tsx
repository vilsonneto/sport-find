import { useState, useEffect, ReactNode } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface IrouteParams {
  exact?: boolean;
  path?: string;
  isPrivate?: boolean;
  children: ReactNode;
  rest?: any;
}
const Route = ({ isPrivate = false, children, ...rest }: IrouteParams) => {
  const { token } = useAuth();
  const [auth, setAuth] = useState<string>(token);

  useEffect(() => {
    setAuth(localStorage.getItem("@sportfind: token")!);
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

import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Route from "./routes";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/notfound">
        <NotFound />
      </Route>
      <Route exact path="/register">
        {}
      </Route>
      <Route exact path="/dashboard" isPrivate>
        {}
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;

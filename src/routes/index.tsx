import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Groups from "../pages/Groups";
import Group from "../pages/Group";
//import Test from "../testeslocais/testando";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/groups" exact>
        <Groups />
      </Route>
      <Route path="/groups/:id">
        <Group />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;

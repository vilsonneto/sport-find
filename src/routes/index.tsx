import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Groups from "../pages/Groups";
import Group from "../pages/Group";
import Events from "../pages/Events";
import Event from "../pages/Event";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";

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
      <Route path="/events" exact>
        <Events />
      </Route>
      <Route path="/events/:id">
        <Event />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;

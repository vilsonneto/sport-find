import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Groups from "../pages/Groups";
import Group from "../pages/Group";
import Events from "../pages/Events";
import Event from "../pages/Event";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import Route from "./routes";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard" isPrivate>
        <Dashboard />
      </Route>
      <Route path="/groups" exact isPrivate>
        <Groups />
      </Route>
      <Route path="/groups/:id" isPrivate>
        <Group />
      </Route>
      <Route path="/events" exact isPrivate>
        <Events />
      </Route>
      <Route path="/events/:id" isPrivate>
        <Event />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;

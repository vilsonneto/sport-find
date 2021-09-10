import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;

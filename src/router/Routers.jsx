import { Switch, Route} from "react-router-dom";

import Cadastre from "../pages/Cadastre";
import Login from "../pages/Login";
import User from "../pages/User";

const Routers = () => {
    return(
        <Switch>
            <Route exact path="/">
                <User />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cadastre">
                <Cadastre />
            </Route>
        </Switch>
    );
};

export default Routers;

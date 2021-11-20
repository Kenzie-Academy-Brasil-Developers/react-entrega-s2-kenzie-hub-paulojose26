import { Hearder } from "../styles/MainStyle";

import { Switch, Route, Link} from "react-router-dom";
import { } from "react-icons/fa";

import Cadastre from "../pages/Cadastre";
import Login from "../pages/Login";
import User from "../pages/User";

const Routers = () => {
    return(
        <>
            <Hearder>
                <Link to="/">Kenzie <strong>Hub</strong></Link>
            </Hearder>
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
        </>
    );
};

export default Routers;

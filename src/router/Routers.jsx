import { Hearder } from "../styles/MainStyle";

import { Switch, Route, Link} from "react-router-dom";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import Cadastre from "../pages/Cadastre";
import Login from "../pages/Login";
import User from "../pages/User";

const Routers = () => {
    const [ user, setUser ] = useState(null);

    return(
        <>
            <Hearder>
                <Link to="/">Kenzie <strong>Hub</strong></Link>
                {user && (
                    <Link className="perfilUser" to="/">{ (user.avatar_url)? <img src={ user.avatar_url } alt={ user.name }/> : <FaUserAlt /> }</Link>
                )}
            </Hearder>
            <Switch>
                <Route exact path="/">
                    <User user={ user } setUser={ setUser } />
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

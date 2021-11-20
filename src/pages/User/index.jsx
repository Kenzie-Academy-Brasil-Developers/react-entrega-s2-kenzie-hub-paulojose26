import {} from "./style";

import { useHistory } from "react-router";

const User = () => {
    const history = useHistory();
    history.push("/login");

    return (
        <section></section>
    );
};

export default User;

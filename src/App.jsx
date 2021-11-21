import { Main } from "./styles/MainStyle";

import Routers from "./router/Routers";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Main>
      <Routers />
      <Toaster position="top-right" />
    </Main>
  );
};

export default App;

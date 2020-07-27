import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "./config/ReactotronConfig";
import history from "./services/history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
/* import store from "./store"; */

function App() {
  return (
    /*     <Provider> */
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
    /*     </Provider> */
  );
}

export default App;

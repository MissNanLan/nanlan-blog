import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Index from "./pages/index";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from "./pages/login";
import Note from "./pages/note";
import Essay from "./pages/note";
import store from "./store";


function Photography() {
  return <h3>摄影</h3>;
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route
              path="/"
              render={() => (
                <Index>
                  <Switch>
                    <Route path="/photography" component={Photography}></Route>
                    <Route path="/note" component={Note}></Route>
                    <Route path="/essay" component={Essay}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Redirect to="/home" />
                  </Switch>
                </Index>
              )}
            ></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

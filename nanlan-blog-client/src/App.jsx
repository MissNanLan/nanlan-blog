import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import store from './store';
import Index from './pages/index';
import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';
import Detail from './pages/detail';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Index>
                  <Switch>
                    {/* <Route path="/photography" component={Photography} /> */}
                    <Route path="/note" component={Note} />
                    {/* <Route path="/essay" component={Essay} /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                    <Redirect to="/home" />
                  </Switch>
                </Index>
              )}
             />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

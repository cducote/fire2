import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import signup from './pages/signup';
import home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup}/>
            <Route exact path="/" component={home}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;

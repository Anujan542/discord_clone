import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}

        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Link to="/register">Heo</Link>
        </Route>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;

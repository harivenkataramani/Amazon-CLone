import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./ContextApi/StateProvider";
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    console.log("let me run every time a component mounts");
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER is ======", authUser);

      if (authUser) {
        //the user is just loggen in/ the user was looged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user has logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

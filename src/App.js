import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Nav />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Nav />
            <Hero />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

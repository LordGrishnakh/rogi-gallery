import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import MainGallery from "./components/MainGallery/MainGallery";
import PhotoDescription from "./components/PhotoDescription/PhotoDescription";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainGallery} />
          <Route path="/about" exact component={About} />
          <Route path="/description" exact component={PhotoDescription} />
        </Switch>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;

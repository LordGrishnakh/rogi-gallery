import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import MainGallery from "./components/MainGallery/MainGallery";
import PhotoDescription from "./components/PhotoDescription/PhotoDescription";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/description">Description</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={MainGallery} />
        <Route path="/" component={About} />
        <Route path="/" component={PhotoDescription} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

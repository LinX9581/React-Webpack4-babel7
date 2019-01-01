var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

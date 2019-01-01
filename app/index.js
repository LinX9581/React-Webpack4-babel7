var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <ul>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/contact'>contact</Link></li>
                <li><Link to='/home'>home</Link></li>
            </ul>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/home' component={Home}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

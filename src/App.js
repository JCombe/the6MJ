import './App.css';
import NavComp from "./Comp/NavComp.js"
import Body from "./Comp/Body.js"
import Footer from "./Comp/Footer.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Impressum from './Impressum';


function App() {



  return (
    <div className="App">
      <Router>


        <NavComp />

        <Switch>
          <Route path="/">
            <Body />
          </Route>
          <Route path="/Impressum">
            <Impressum />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

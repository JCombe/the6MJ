import './App.css';
import NavComp from "./Comp/NavComp.js"
import Body from "./Comp/Body.js"
import Footer from "./Comp/Footer.js"
import { BrowserRouter as Router, Switch, Rout } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>

        <NavComp />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import NavComp from "./Comp/NavComp.js"
import Body from "./Comp/Body.js"
import Footer from "./Comp/Footer.js"
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Impressum from './Impressum';


function App() {



  return (

    <BrowserRouter>
      <div>
        <NavComp />
        <Switch>
          <Route path="/" component={Body} exact />
          <Route path="/Impressum" component={Impressum} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <Router>


    //     <NavComp />

    //     <Switch>
    //       <Route path="/">
    //         <Body />
    //       </Route>
    //       <Route path="/Impressum">
    //         <Impressum />
    //       </Route>
    //     </Switch>
    //     <Footer />
    //   </Router>
    // </div>
  );
}

export default App;

import './App.css';
import {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import Navbar1 from "./Components/navbar.js";
import Banner from "./Components/banner.js";
import Whoareus from "./Components/whoareus";
import Products from "./Components/products";
import HowWeWork from "./Components/howwork";
import Contact from "./Components/contact";
import Footer from "./Components/footer";


/*


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup/:type">
            <SignUp/>
          </Route>
          <Route path="/students">
            <Students/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


*/

class App extends Component{
  render(){
    return(
      <div>
        <Navbar1/>
        <Banner/>
        <Whoareus/>
        <Products/>
        <HowWeWork/>
        <Contact/>
        <Footer/>
      </div>

      
    );
  }
}
export default App;

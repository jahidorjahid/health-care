import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route exact path="/about">
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="*">
          <Header></Header>
          <h1>404 Not Found</h1>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
          <Route exact path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route exact path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route exact path="/register">
            <Header></Header>
            <Register></Register>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <Header></Header>
            <h1>404 Not Found</h1>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

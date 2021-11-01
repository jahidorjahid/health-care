import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import Single from "./components/Single/Single";
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
          <Route exact path="/news">
            <Header></Header>
            <News></News>
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
          <ProtectedRoute path="/news/:slug">
            <Header></Header>
            <Single></Single>
            <Footer></Footer>
          </ProtectedRoute>
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

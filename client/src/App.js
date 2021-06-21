import React, {} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Home/Projects/Projects";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { AuthContextProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import NavBar from "./Components/Home/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects">
            <NavBar/>
            <Projects />
            <Footer/>
          </Route>
          <Route path="/services">
            <NavBar/>
            <Services/>
            <Footer/>
          </Route>
          <Route path="/reviews">
            <NavBar/>
            <Reviews />
            <Footer/>
          </Route>
          <Route path="/contact">
            <NavBar/>
            <Contact/>
            <Footer/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/login">
            <NavBar/>
            <Login/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;

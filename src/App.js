import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/LOgin";
import Register from "./pages/register/Register";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={user ? Home : Register} />
        <Route exact path="/login" component={user ? Home : Login} />
        <Route exact path="/write" component={user ? Write : Register} />
        <Route exact path="/settings" component={user ? Settings : Register} />
        <Route exact path="/post/:postId" component={Single} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      {/* Footer should be outside Switch */}
      <Footer />
    </Router>
  );
}

export default App;

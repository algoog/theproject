import "../App.css";
import Gig from "./pages/Gig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "../Assets/img/logo.png";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profilepage from "./pages/Profilepage";
import Discover from "./pages/Discover";
import Main from "./pages/Main";
import { AxiosInstance } from "../Lib/Axios/axios";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/services/:id" exact>
            <Gig />
            {/* <Discover /> */}
          </Route>
          <Route path="/profile" exact>
            <Profilepage />
          </Route>
          <Route path="/auth/login" exact>
            <Login
              img={Logo}
              title="I am a Tutor"
              desc="Give lessons or manage bookings with your customers"
              mainheading="Tutor log in"
            />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

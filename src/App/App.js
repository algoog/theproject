import "../App.css";
import Gig from "./pages/Gig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Gig />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

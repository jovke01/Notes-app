import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Note from "./components/Note";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/notes/:id">
            <Note />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

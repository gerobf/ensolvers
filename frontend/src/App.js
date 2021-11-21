
import './App.css';
import CargaDeTarea from './component/tarea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/">
          <CargaDeTarea></CargaDeTarea>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

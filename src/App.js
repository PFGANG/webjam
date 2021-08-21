import { BrowserRouter as Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Cloud from './views/cloud'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">

          <Cloud />

        </Route>
      </Switch>
    </div>
  );
}

export default App;

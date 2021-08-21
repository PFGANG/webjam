import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AppHeader from './components/common/header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AppHeader/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

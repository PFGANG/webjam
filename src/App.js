import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AppHeader from './components/common/header';
import TimeLine from './views/elecciones';
import Candidates from './views/candidates';
import CloudContainer from './views/component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/webjam">
          <AppHeader/>
          <CloudContainer/>
          <TimeLine/>
          <Candidates/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

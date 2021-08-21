import logo from './logo.svg';
import './App.css';
//import TransitionCloud from './views/cloud';
import React, { useState, useEffect } from 'react';
//import CloudComponent from './views/cloud_component';

import CloudContainer from './views/component';
////import CloudContainer from './views/wordcloud2/cloudcont';


const fontSizeMapper = (word) => {
  return Math.log2(word.value) * 5;//wordScale(Math.log2(word.value) * 5);
};
const rotate = (word) => word.rotate;

function App() {

  // const data_1 = [
  //   { text: "Hey", value: 1000, rotate: 90 },
  //   { text: "lol", value: 200, rotate: 90 },
  //   { text: "first impression", value: 800, rotate: 90 },
  //   { text: "very cool", value: 1000000, rotate: 0 },
  //   { text: "duck", value: 30, rotate: 0 },
  //   { text: "duck", value: 90, rotate: 0 },
  //   { text: "duck", value: 100, rotate: 0 },
  //   { text: "duck", value: 1001, rotate: 90 },
  //   { text: "duck", value: 320, rotate: 90 }
  // ];
  // const data_2 = [
  //   { text: "Hey", value: 1000, rotate: 90 },
  //   { text: "lol", value: 200, rotate: 90 },
  //   { text: "first impression", value: 800, rotate: 90 },
  //   { text: "very cool", value: 1000000, rotate: 0 }
  // ];
  // let change = -1;

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   if  (change === -1){
  //     setData(data_1);
  //   } else {
  //     setData(data_2);
  //   };
  // })
  // const changeData = () => {
  //   if  (change === -1){
  //         setData(data_1);
  //   } else {
  //     setData(data_2);
  //   };
  // }

  return (
    <div className="App">
      {/* < TransitionCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} /> */}
      <CloudContainer />
    </div>

  );
}

export default App;
/*import { BrowserRouter as Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Cloud from './views/cloud'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/hola">
          <h1>wena crm</h1>
          <Cloud />

        </Route>
      </Switch>
    </div>
  );
}

export default App; */
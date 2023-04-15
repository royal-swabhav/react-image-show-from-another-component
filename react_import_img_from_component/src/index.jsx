import React from "react";
import ReactDOM from 'react-dom';
import { MyImage } from "./MyImage";

 const App = ()=>{
    return(
        <div>
            <h1>Wellcome to my App</h1>
            <MyImage name="backpack"/>
        </div>
    );
 }
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );
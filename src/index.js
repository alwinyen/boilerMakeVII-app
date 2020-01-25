import React, { useState }  from "react";
import ReactDOM from "react-dom";
import '../src/home.css'
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import Head from './components/Head'

function App() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Head/>
      <div id = "filter">
        <p id = "regionTitle">Region</p>
        <p id = "typeTitle">Type</p>
        <p id = "timeTitle">Time</p>
        <br/>
        <select id = "region">
          <option value = "america">America</option>
          <option value = "asia">Asia</option>
          <option value = "africa">Africa</option>
          <option value = "australia">Australia</option>
          <option value = "antarctica">Antarctica</option>
          <option value = "europe">Europe</option>
          <option value = "all">All</option>
        </select>
        <select id = "type">
          <option value = "environment">Environment</option>
          <option value = "politic">Politic</option>
          <option value = "all">All</option>
        </select>
        <select id = "time">
          <option value = "week">Past Week</option>
          <option value = "month">Past Month</option>
          <option value = "year">Past Year</option>
          <option value = "all">All</option>
        </select>
      </div>
      <div id = "map">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

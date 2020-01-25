import React, { useState }  from "react";
import ReactDOM from "react-dom";
import '../src/home.css'
import '../src/news.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Head from './components/Head';
import Filter from './components/Filter';
import News from './components/News.js';

function App() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Head/>
      <Router>
        <Switch>
            <Route path="/" exact>
              <Filter setContent = {setContent} content = {content} />
            </Route>
            <Route path="/news/:country">
              <News/>
            </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

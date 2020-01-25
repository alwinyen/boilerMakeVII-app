import React, { useState }  from "react";
import ReactDOM from "react-dom";
import '../src/home.css'
import '../src/news.css'

import Head from './components/Head';
import Filter from './components/Filter';
import News from './components/News.js';

function App() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Head/>
      <Filter setContent = {setContent} content = {content} />
      {/* <News/> */}
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

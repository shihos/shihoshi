import React from 'react';
import './App.scss';

/*
 * https://blackcrane.net/
      <a href={props.src} target="_blank" rel="noopener noreferrer">
      </a>
 */

const ShowItem = props => {
  return (
    <div className="shs-item">
      <img src={props.src} alt="SHIHOSHI Snap" />
    </div>
  );
}

// ES2018 property spread notation {...props}
const App = () => {
  const Items = [
    "images/sh08-1.jpg",
    "images/sh09-2.jpg",
    "images/sh10-3.jpg",
    "images/sh11-4.jpg",
    "images/sh12-5.jpg",
    "images/sh02-6.jpg",
    "images/sh03-7.jpg",
    "images/sh04-8.jpg",
    "images/sh05-9.jpg",
    "images/sh06-10.jpg",
    "images/sh07-11.jpg",
  ];
  //console.log(id, "items");

  return (
    <div className="App">
      <div className="shs-logo">
        <img src="images/shlogo.png" alt="SHIHOSHI Logo" />
      </div>
      {Items.map((it, i) => <ShowItem key={i} src={it} />)}
      <div className="shs-footer">
        <p>
          <a href="www.shihoshi.com" target="_blank" rel="external noopener noreferrer nofollow">SHIHOSHI</a>
          &nbsp;(C) 2019&nbsp;
          <a href="mailto:admin@shihoshi.com">contact</a>
        </p>
      </div>
    </div>
  );
}

export default App;

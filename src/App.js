import React from 'react';
import './App.scss';

const MasonryHeader = props =>
  <div className="masonry-header">
    <img src="images/shlogo.png" alt="SHIHOSHI Logo" />
  </div>;

const MasonryItem = props => {
  return (
    <div className="masonry-item">
      <div className="masonry-content">
        <div className="masonry-img">
          <a href={props.src} target="_blank" rel="noopener noreferrer">
            <img src={props.src} alt="SHIHOSHI Snap" />
          </a>
        </div>
      </div>
    </div>
  );
}

const MasonryFooter = props =>
  <div className="masonry-footer">
    <p>
      <a href="www.shihoshi.com" target="_blank" rel="external noopener noreferrer nofollow">SHIHOSHI</a>
      &nbsp;(C) 2019&nbsp;
      <a href="admin@shihoshi.com">contact</a>
    </p>
  </div>;

// ES2018 property spread notation {...props}
const App = () => {
  const Items = [
    "images/sh01.jpg",
    "images/sh02.jpg",
    "images/sh03.jpg",
    "images/sh04.jpg",
    "images/sh05.jpg",
    "images/sh06.jpg",
    "images/sh07.jpg",
    "images/sh08.jpg",
    "images/sh09.jpg",
    "images/sh10.jpg",
    "images/sh11.jpg",
    "images/sh12.jpg",
  ];
  //console.log(id, "items");

  return (
    <div className="App">
      <MasonryHeader title="SHIHOSHI" sub="Style" />
      <div className="masonry-wrapper">
        <div className="masonry">
          {Items.map((it, i) => <MasonryItem key={i} src={it} />)}
        </div>
      </div>
      <MasonryFooter />
    </div>
  );
}

export default App;

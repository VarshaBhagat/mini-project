import React, { useState, useCallback } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const onChange = useCallback((e) => {
    //Todo: debounce
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBhYXZ1PkCkNAbnXnq5dG2AqRIVBLZQgt0&cx=018264299595958242005:dvs2adlrsca&q=${e.target.value}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.items || []));
  }, []);

  return (
    //todo: pagination
    <div>
      <div className="container">
        <div className="header">
          <h3 className="search-header">oh.search</h3>
          <input onChange={onChange} className="input" />
        </div>
      </div>
      {data.map((item) => (
        <div className="item-container" key={item.cacheId}>
          <img
            alt="img"
            src={item.pagemap.cse_thumbnail[0].src}
            className="image"
          />
          <div>
            <a href={item.formattedUrl} className="anchor-tag">
              {" "}
              {item.formattedUrl}{" "}
            </a>
            <h4 className="item-header">{item.title}</h4>
            <p className="desc">{item.snippet}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;

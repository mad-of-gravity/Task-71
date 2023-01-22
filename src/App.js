import "./App.css";
import { useState, useEffect } from "react";
import Document from "./Document";

function App() {
  const [loremIpsum, setLoremIpsum] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getData() {
      fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then(response => response.text())
      .then(response => setLoremIpsum(response));
    }

    getData();
  }, []);

  return (
    <div className="App">
      <Document title="Terms and Conditions" content={loremIpsum} />
    </div>
  );
}

export default App;

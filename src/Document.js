import { useState } from "react";

const contentStyle = {
  width: "50vw",
  height: "30vh",
  overflowX: "hidden",
  overflowY: "scroll",
};

const Document = ({ title, content }) => {
    //Activity state of the button
    const [disable, setDisable] = useState(true);

  const handleScroll = (e) => {
      const scrollHeight = e.target.scrollHeight;
      const offsetHeight = e.target.offsetHeight;
      const difference = scrollHeight - offsetHeight;

      //Position to the bottom
      const posToBottom = difference - (e.target.scrollTop + 1); 
      console.log(posToBottom);

      if (posToBottom === 0) {
        setDisable(false);
      } else {
        setDisable(true);
      }
  };

  return (
    <section>
      <h2 className="title">{title}</h2>
      <article
        className="content"
        style={contentStyle}
        onScroll={(e) => handleScroll(e)}
      >
        {content}
      </article>
      <button disabled={disable}>I Agree</button>
    </section>
  );
};

export default Document;

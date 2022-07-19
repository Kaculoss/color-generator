import { useState } from "react";
import Values from "values.js";
import { SingleColor } from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#299438").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setList(new Values(color).all(10));
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>generate colors</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#299438"
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

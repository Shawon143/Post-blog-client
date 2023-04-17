import React, { useState, useEffect } from "react";

const Score = () => {
  const [count, setCount] = useState(0);
  const [wic, setWic] = useState(0);
  const [run, setRun] = useState(0);
  const [prevRun, setPrevRun] = useState(0);
  const [prevRuns, setPrevRuns] = useState([]);

  function increaseCount() {
    setPrevRun(count);
    setRun(run + count);
  }

  function decreaseCount() {
    setPrevRun(run);
    setRun(run - count);
  }

  function handleRunChange(event) {
    const newValue = event.target.value;
    setCount(parseInt(newValue));
  }

  function handleWicketChange(event) {
    const newValue = event.target.value;
    setCount(parseInt(newValue));
  }

  function inwick() {
    if (wic < 10) {
      setWic(wic + count);
    }
  }

  function dewick() {
    if (wic > 0) {
      setWic(wic - count);
    }
  }

  useEffect(() => {
    if (prevRun !== 0) {
      setPrevRuns((prev) => [...prev, prevRun]);
    }
  }, [prevRun]);

  return (
    <div>
      <h1>Live score</h1>
      <h1>
        <span>{run}</span>/<span>{wic}</span>
      </h1>
      <p>Previous runs: {prevRuns.join(", ")}</p>

      <h2>Update Run</h2>
      <input type="text" onChange={handleRunChange} />
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

      <h2>Update Wicket</h2>
      <input type="text" onChange={handleWicketChange} />
      <button onClick={inwick}>Increase</button>
      <button onClick={dewick}>Decrease</button>
    </div>
  );
};

export default Score;

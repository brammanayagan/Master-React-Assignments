import React, { useState, useMemo, useCallback } from "react";

const LargeArrayFilter = () => {
  const generate = () =>
    Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

  const [arr, setArr] = useState(generate());

  const regenerate = useCallback(() => {
    setArr(generate());
  }, []);

  const { evenCount, sum } = useMemo(() => {
    console.log("Filtering...");

    const even = arr.filter((n) => n % 2 === 0);
    const total = even.reduce((acc, curr) => acc + curr, 0);

    return { evenCount: even.length, sum: total };
  }, [arr]);

  return (
    <>
      <h3>Large Array Filter</h3>
      <p>Even Count: {evenCount}</p>
      <p>Sum: {sum}</p>

      <button onClick={regenerate}>Regenerate</button>
    </>
  );
};

export default LargeArrayFilter;

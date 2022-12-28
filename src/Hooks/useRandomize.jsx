import { useEffect, useState } from "react";

function useRandomize(arr) {
  const [newArr, setNewArr] = useState(null);

  //   const randomizeArray = (arr) => {
  //     return arr.sort(() => 0.5 - Math.random());
  //   };

  useEffect(() => {
    const randomizedArr = arr.sort(() => 0.5 - Math.random());
    setNewArr(randomizedArr);
  }, [arr]);

  return { newArr };
}

export default useRandomize;

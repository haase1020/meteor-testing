import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Hug Button</button>
      <p>Hug your favorite people {counter} times today.</p>
    </div>
  );
};

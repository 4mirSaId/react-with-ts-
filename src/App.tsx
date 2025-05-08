import React from 'react';
import Greating from './Greating';
import Counter from './Counter';

function App() {
  return (
    <>
    <div style={{backgroundColor: "lightblue", height: "",width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "10px", borderRadius: "10px"}}>
      <Greating name="John" />
      <Counter />
    </div>
      
    </>
  );
}

export default App;

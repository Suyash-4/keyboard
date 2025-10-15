import React from "react";
import Keyboard from "./Keyboard/Keyboard";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-black to-neutral-900 overflow-x-auto">
        <Keyboard />
      </div>
    </>
  );
};

export default App;

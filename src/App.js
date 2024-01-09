import React from "react";
import BoxList from "./BoxList";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <div className="left">
        <BoxList />
      </div>
      <div className="right">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

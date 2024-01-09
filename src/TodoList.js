import React, { useState } from "react";
import NewListItemForm from "./NewListItemForm";
import { v4 as uuid } from "uuid";

function remove(e) {
	const listItem = e.target.parentNode;
	listItem.parentNode.removeChild(listItem);
}

function TodoList() {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={remove}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  // end renderItems

  /** Add new item object to list. */
  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };
  // end addItem

  return (
    <div className="TodoList">
      <NewListItemForm addItem={addItem} />
      {renderItems()}
    </div>
  );
};
// end

export default TodoList;

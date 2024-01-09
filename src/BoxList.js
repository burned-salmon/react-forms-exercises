import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function remove(e) {
	const listItem = e.target.parentNode;
	listItem.parentNode.removeChild(listItem);
}

function BoxList() {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div style={{backgroundColor: item.color, height: item.height, width: item.width}}></div>

            <button onClick={remove}>X</button>
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
    <div className="BoxList">
      <NewBoxForm addItem={addItem} />
      {renderItems()}
    </div>
  );
};
// end

export default BoxList;

import React, { useState } from "react";
import "./App.css";

import Logo from "./Components/Logo";
import Form from "./Components/From";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((newItem) =>
        newItem.id === id ? { ...newItem, packed: !newItem.packed } : newItem
      )
    );
  }

  function hnadleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want  to delete all items"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={hnadleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

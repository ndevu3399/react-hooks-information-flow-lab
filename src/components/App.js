import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const appClass = darkMode ? "App dark" : "App light";

  function handleDarkModeClick() {
    setDarkMode((prev) => !prev);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;

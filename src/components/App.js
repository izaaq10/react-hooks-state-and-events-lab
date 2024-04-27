import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDark, setToDark] = useState(false)
const changeTheme = (isDark)? "Dark Mode": "Light Mode"
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  function Theme(){
      setToDark(!isDark)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={Theme}>{changeTheme}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React from "react";

import EditorsChoice from "../EditorsChoice/EditorsChoice";
import SearchIngredient from "../SearchIngredient/SearchIngredient";

const App = () => {
  return (
    <div className="app">
      <EditorsChoice />
      <SearchIngredient />
    </div>
  );
};
export default App;
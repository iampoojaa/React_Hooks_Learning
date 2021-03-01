import React from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Header from "./components/UI/Header/Header";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      {/* <h1>Ingredients Form</h1> */}
      <Ingredients />
    </React.Fragment>
  );
};

export default App;

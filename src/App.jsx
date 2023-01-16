import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

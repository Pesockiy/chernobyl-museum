import React from "react";

import AppRoutes from "./components/AppRoutes";

import { pageRoutes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <AppRoutes routes={pageRoutes} />
    </div>
  );
};

export default App;

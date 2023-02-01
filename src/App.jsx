import React from "react";

import AppRoutes from "./components/AppRoutes";

import { pageRoutes } from "./routes";
import Layout from "./components/Layout";
import Main from "./pages";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Museum from "./pages/Museum";

const App = () => {
  return (
    <div className="App">
      <AppRoutes routes={pageRoutes} />
    </div>
  );
};

export default App;

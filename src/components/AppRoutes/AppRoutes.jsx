import React from "react";
import { Route, Routes } from "react-router-dom";
import { PropTypes } from "prop-types";

import Layout from "../Layout";

import Error from "../Error";

const AppRoutes = ({ routes }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Error errorCode="404" link="/" />} />
      </Route>
    </Routes>
  );
};

AppRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default AppRoutes;

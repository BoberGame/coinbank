import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/router';

const AppRouter = ({ isAuth }) => {
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))
        : publicRoutes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
    </Routes>
  );
};

export default AppRouter;

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const LazyHome = lazy(() => import("./Home/Home"));
const LazyMembers = lazy(() => import("./Members/Members"));
const LazyAboutUs = lazy(() => import("./AboutUs/AboutUs"));
function Pages() {
  return (
    <Routes>
      <Route
        path="/twice"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="/members"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyMembers />
          </Suspense>
        }
      />
      <Route
        path="/aboutus"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyAboutUs />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default Pages;

import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

interface Route {
  path: string;
  Component: React.ComponentType;
}

export function createRemixStub(routes: Route[]) {
  return function RemixStub() {
    const router = createMemoryRouter(
      routes.map((route) => ({
        path: route.path,
        element: <route.Component />,
      })),
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );

    return <RouterProvider router={router} />;
  };
} 
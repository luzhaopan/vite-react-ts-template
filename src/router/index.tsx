import { lazy, FC } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import LayoutPage from "@/layout";
import Home from "@/pages/home";
import ListPage from "@/pages/list";
import TablePage from "@/pages/table";
import LoginPage from "@/pages/login";

const NotFoundPage = lazy(() => import('@/pages/404'));

const routeList: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "demo/list",
        element: <ListPage />,
      },
      {
        path: "demo/table",
        element: <TablePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;

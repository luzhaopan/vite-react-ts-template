import { FC } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import LayoutPage from "@/layout";
import Home from "@/pages/home";
import ListPage from "@/pages/list";
import TablePage from "@/pages/table";
import LoginPage from "@/pages/login";
import Exception from '@/components/Exception';
// const NotFoundPage = lazy(() => import('@/pages/404'));

const routeList: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "list",
        element: <ListPage />,
      },
      {
        path: "table",
        element: <TablePage />,
      },
      {
        path: "*",
        element: <Exception title="404" description="Sorry, the page you visited does not exist." />
      },
    ],
  },
  {
    path: "*",
    element: <Exception title="404" description="Not Found" />
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

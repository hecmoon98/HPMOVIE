import Home from "./../src/pages/home/home";
import DetailMovie from "./pages/home/detailmovie";

import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";



const routesHome = [
   
    {
        path: "/",
        exact: true,
        component:Home
    },

    {
        path: "/detail-movie/:id",
        exact: false,
        component:DetailMovie
    },

];

const routesAdmin = [
    {
      path: "/dashboard",
      exact: false,
      component: Dashboard
    },
    {
      path: "/them-nguoi-dung",
      exact: false,
      component: ThemNguoiDung
    }
  ];


export { routesHome,routesAdmin };

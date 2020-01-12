import Home from "./../src/pages/home/home";
import DetailMovie from "./pages/home/detailmovie";

import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
import TicketMovie from "./pages/home/ticket-movie";



const routesHome = [

  {
    path: "/",
    exact: true,
    component: Home
  },

  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie
  }, 
  {
    path: "/ticket-movie/:id",
    exact: false,
    component: TicketMovie
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


export { routesHome, routesAdmin };

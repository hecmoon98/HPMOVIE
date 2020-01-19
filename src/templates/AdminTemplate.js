import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminLayout = props => {
  return (
    <div>
      Navbar Admin
      {props.children}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (JSON.parse(localStorage.getItem("UserAdmin")).maLoaiNguoiDung==="QuanTri") {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />

    // <Route
    //     {...props}
    //     render={propsComponent => (
    //       <AdminLayout>
    //         <Component {...propsComponent} />
    //       </AdminLayout>
    //     )}
    //   />
  );
}

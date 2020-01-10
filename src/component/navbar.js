import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom"; 

export default class NavBar extends Component {
  render() {
    return (
      
      <header id="header" className="header">
  <div className="header__content">
    <div className="header__logo">
    <Link to={`/`}>
      <p>HPMOVIE</p>
      </Link>
    </div>
    <ul>
      <li><a className="active" href="#movie">lịch chiếu</a></li>
      <li><a href="#cumrap">cum rạp</a></li>
      <li><a href="#">tin tức</a></li>
      <li><a href="#">đăng nhập</a></li>
      
    </ul>
  </div>
</header>

     
    );
  }
}

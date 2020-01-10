import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
  <div id="carouselId" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselId" data-slide-to={0} className="active" />
      <li data-target="#carouselId" data-slide-to={1} />
      <li data-target="#carouselId" data-slide-to={2} />
      <li data-target="#carouselId" data-slide-to={3} />
      <li data-target="#carouselId" data-slide-to={4} />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img src="./img/banner2.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="./img/banner4.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="./img/banner3.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="./img/banner2.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="./img/banner5.jpg" alt />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
    <div className="banner__list">
      <ul>
        <li><a href="#">Phim</a><i className="fa fa-angle-down" /></li>
        <li><a href="#">Rạp</a><i className="fa fa-angle-down" /></li>
        <li><a href="#">Ngày xem</a><i className="fa fa-angle-down" /></li>
        <li><a href="#">Suất chiếu</a><i className="fa fa-angle-down" /></li>
        <li><button className="btn ">MUA VÉ NGAY</button></li>
      </ul>
    </div>
  </div>
</section>

        )
    }
}

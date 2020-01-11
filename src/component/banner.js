import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import movie from './movie';


class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
     movie:"Mời Bạn Chon Phim...",
     movieTF:false
    };
   
  }

  handlMovie=(movie,maphim,tf)=>{
    console.log(movie,maphim)
    this.setState({
      movie:movie,
      movieTF:tf
    })

  }
  handlMovieTF=(tf)=>{
    if(tf==false){
      tf=true
    }else{
      tf=false
    }
    this.setState({
      movieTF:tf
    })

  }

  renderMovie = () => {
    
    
    return this.props.listMovie.map((movie, index) => {
      return <li onClick={()=>{this.handlMovie(movie.tenPhim,movie.maPhim,false)}} key={index} className="tab__li_2">{movie.tenPhim} </li>;
    });
  };



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
      <ul className="tab__ul_1">

      <ul className={this.state.movieTF ? "tab__ul_2 tf":"tab__ul_2"}>
            {this.renderMovie()}
          </ul>
        <li onClick={()=>{this.handlMovieTF(this.state.movieTF)}} className="tab__li_1">{this.state.movie}
        </li>
        <li className="tab__li_1">Rạp</li>
        <li className="tab__li_1">Ngày xem</li>
        <li className="tab__li_1">Suất chiếu</li>
        <li className="tab__li_1"><button disabled className="btn ">MUA VÉ NGAY</button></li>
        
      </ul>
    </div>



  </div>
</section>

        )
    }
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};


export default connect(mapStateToProps, null)(Banner);
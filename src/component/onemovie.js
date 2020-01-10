import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class OneMovie extends Component {

    
    render() {
      console.log("OneMovie");
         const {movie} = this.props;
         
        return (
            <div className="item">
                
            <div className="item__img">
              <img src={movie.hinhAnh} alt="" />
              <div className="item__img_black" />
              <a
               onClick={this.openModal} 
              >
                <div className="item__play">                
                  <i  onClick={()=>{this.props.openModal(movie.trailer)}}  className="fa fa-play" />                        
                </div>
              </a>
            </div>
            <Link to={`/detail-movie/${movie.maPhim}`} >
              <div  className="item__name">{movie.tenPhim}</div>
            </Link>
            <Link className="btn__buy" to={`/detail-movie/${movie.maPhim}`}>
              <i className="fa fa-ticket-alt" />
              Mua Vé
            </Link>
          </div>
        )
    }
}

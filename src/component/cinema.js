import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../redux/action";
import CumrapCinema from "./cumrap-cinema";
import ThongTinLichChieu from "./thong-tin-lich-chieu";

class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyRap: "",
      maCumRap: "",
      maLichChieu: "",
      tenCumRap: "",

    };
  }

  componentDidMount() {
    this.props.getlistCinema();
  }

  keyRap = (keyRap, maCumRap) => {
    this.props.getlistCinema(maCumRap, maCumRap);
    this.setState({
      keyRap: keyRap,
      maCumRap: maCumRap,
      maLichChieu: maCumRap
    });
  };


  renderRap = () => {
    return this.props.listCinema.map((item, index) => {
      let classRap = "";
      if (index === this.state.keyRap) {
        classRap = "cinema__rap__item active";
      } else {
        classRap = "cinema__rap__item";
      }

      return (
   
        <div
          
          className={classRap}
          onClick={() => {
            this.keyRap(index, item.maHeThongRap);
          }}
        >
          <img src={item.logo} alt="" />
          <p>{item.maHeThongRap}</p>
        </div>

      
      );
    });
  };

  handlTenCumRap = tenRap => {
    this.setState({
      tenCumRap: tenRap
    });
  };

  render() {
    return (
      <section id="cumrap" className="cinema">
        <div class="clear"></div>
        <div className="cinema__content">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-5">
                    <div className="cinema__rap">{this.renderRap()}</div>
                  </div>
                  <CumrapCinema
                    maCumRap={this.props.listCumRap}
                    tenRap={this.handlTenCumRap}
                    indexCumRap={this.state.indexCumRap}

                  />
                </div>
              </div>
             

              <ThongTinLichChieu
                listLichChieu={this.props.listLichChieu}
                tenRap={this.state.tenCumRap}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    listCinema: state.movieReducer.listCinema,
    listCumRap: state.movieReducer.listCumRap,
    listLichChieu: state.movieReducer.listThongTin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getlistCinema: (cumrap, lichchieu) => {
      dispatch(action.actGetCinema());
      dispatch(action.actGetCumRap(cumrap));
      dispatch(action.actThongTinLichChieu(lichchieu));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);

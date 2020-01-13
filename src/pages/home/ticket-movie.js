import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { Link } from "react-router-dom"; 

class TicketMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maLichChieu: "",
      danhSachVe: [],
      taiKhoanNguoiDung: "vipadmin"
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    this.props.getPhongVe(id);
    this.props.setLoading();
    this.setState({
      maLichChieu: id
    });
  }

  clickActi = (maGhe, giaVe) => {
    console.log(maGhe, giaVe);
    const objMaGhe = {
      maGhe,
      giaVe
    };

    // let danhSachVe = [...this.state.danhSachVe];
    let danhSachVe = [...this.state.danhSachVe, objMaGhe];
    this.setState({
      danhSachVe
    });
  };

  renderGhe = () => {
    if (this.props.listPhongVe.danhSachGhe) {
      const { danhSachGhe } = this.props.listPhongVe;

      return danhSachGhe.map((item, index) => {
        let classGhe = "styleGhe";
        if (item.daDat) {
          classGhe = "styleGhe active";
          if (item.loaiGhe === "Vip") {
            classGhe = "styleGhe active vip";
          }
        } else {
          classGhe = "styleGhe";

          if (item.loaiGhe === "Vip") {
            classGhe = "styleGhe vip";
          }
        }

        return (
          <div
            key={index}
            onClick={() => {
              this.clickActi(item.maGhe, item.giaVe);
            }}
            className={classGhe}
          ></div>
        );
      });
    }
  };

  renderGhe2 = () => {
    if (this.props.listPhongVe.danhSachGhe) {
      const { danhSachGhe } = this.props.listPhongVe;

      return danhSachGhe.map((item, index) => {
        let classGhe = "ghe__ngoi";
        if (item.daDat) {
          classGhe = "ghe__ngoi active";
          if (item.loaiGhe === "Vip") {
            classGhe = "ghe__ngoi active vip";
          }
        } else {
          classGhe = "ghe__ngoi";

          if (item.loaiGhe === "Vip") {
            classGhe = "ghe__ngoi vip";
          }
        }

        

        return (
          <div key={index} className="styleGhe">
            <label className={classGhe}>
              <input
                onClick={() => {
                  this.clickActi(item.maGhe, item.giaVe);
                }}
                type="checkbox"
                defaultChecked="checked"
              />

              <span className="checkmark">
                  <div className="checkmark__detail">{item.tenGhe}</div>
              </span>
              
            </label>
          </div>
        );
      });
    }
  };

  handMuaVe = state => {
    console.log(state);
    this.props.postDatVe(state);
  };
  renderlistPhim = () => {
    if (this.props.listPhongVe.thongTinPhim) {
      const { thongTinPhim } = this.props.listPhongVe;

      return (
        <section className="rightticket">
          <div className="contentright">
            <div className="logofilm">Hóa Đơn</div>
            <div className="filmname">
              <div className="namefilm">{thongTinPhim.tenPhim}</div>
              <div className="address">{thongTinPhim.tenCumRap}</div>
              <div className="address">{thongTinPhim.diaChi}</div>
              <div className="hour">{thongTinPhim.ngayChieu}</div>
              <div className="hour">{thongTinPhim.gioChieu}</div>
            </div>
            <div className="chair">
              <div className="row">
                <div className="info col-sm-7">
                  <span>Ghế</span>
                </div>
                <div className="totalchair col-sm-5">
                  <span>A1, A2</span>
                </div>
              </div>
            </div>
            <div className="sum">
              <div className="row">
                <div className="namemoney col-sm-7">
                  <span>Tổng tiền</span>
                </div>
                <div className="money col-sm-5">
                  <span>220.000đ</span>
                </div>
              </div>
            </div>
          </div>
<Link to={`/ticket`}>
          <div
            onClick={() => {
              this.handMuaVe(this.state);
            }}
            className="buyticket"
          >
            Mua Vé
          </div>

          </Link>
        </section>
      );
    }
  };

  render() {
    let { loading } = this.props;
    console.log(this.state);

    if (loading) {
      return (
        <div className="loading">
          <div class="loader"></div>
        </div>
      );
    }

    return (
      <div className="ticKet">
        <section className="headerticket">
          <div className="stepcheckout">
            <ul>
              <li className="active">
                <span className="stepnumber">01</span>CHỌN GHẾ &amp; THANH TOÁN
              </li>
              <li>
                <span className="stepnumber">02</span>KẾT QUẢ ĐẶT VÉ
              </li>
            </ul>
          </div>
        </section>
        <section className="ticket">
          <div className="screen">
            <img
              className="namescreen"
              src="https://tix.vn/app/assets/img/icons/screen.png"
              alt
            />
          </div>
          <div className="tableGhe">
            {/* {this.renderGhe()} */}
            {this.renderGhe2()}
          </div>
          <div className="noteticket">
            <div className="typenote">
              <span className="type">
                <span className="colorseat colornormal" />
                <span className="name">Ghế trống</span>
              </span>
              <span className="type">
                <span className="colorseat colorchoose" />
                <span className="name">Ghế đang chọn</span>
              </span>
              <span className="type">
                <span className="colorseat colorVip" />
                <span className="name">Ghế vip</span>
              </span>
              <span className="type">
                <span className="colorseat colorchosen" />
                <span className="name">Ghế đã chọn</span>
              </span>
             
            </div>
          </div>
        </section>
        {this.renderlistPhim()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listPhongVe: state.movieReducer.listPhongVe,
    loading: state.movieReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhongVe: id => {
      dispatch(action.actGetPhongVe(id));
    },

    setLoading: () => {
      dispatch(action.actLoading());
    },
    postDatVe: user => {
      dispatch(action.actDatVe(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketMovie);

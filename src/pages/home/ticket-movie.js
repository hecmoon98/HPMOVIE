import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "./../../redux/action";

class TicketMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props.match.params.id);
        this.props.getPhongVe(id);
        this.props.setLoading();
        
    }

    renderGhe = () => {
        if (this.props.listPhongVe.danhSachGhe) {
            const { danhSachGhe } = this.props.listPhongVe;

            return danhSachGhe.map((item, index) => {
                return (

                    <div className="styleGhe">
                    </div>


                )
            })

        }
    }


    renderlistPhim = () => {
        if (this.props.listPhongVe.thongTinPhim) {
            const { thongTinPhim } = this.props.listPhongVe;

            return (
                <div className="filmname">
                    <div className="namefilm">{thongTinPhim.tenPhim}</div>
                    <div className="address">{thongTinPhim.tenCumRap}</div>
                    <div className="address">{thongTinPhim.diaChi}</div>
                    <div className="hour">{thongTinPhim.ngayChieu}</div>
                    <div className="hour">{thongTinPhim.gioChieu}</div>
                </div>
            )


        }
    }


    render() {
        let { loading } = this.props;
        console.log(loading)

    if(loading){
      return(
        <div className="loading">

         <div class="loader"></div>

        </div>
      )
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
                        <img className="namescreen" src="https://tix.vn/app/assets/img/icons/screen.png" alt />
                    </div>
                    <div className="tableGhe">
                        {this.renderGhe()}
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
                                <span className="colorseat colorchosen" />
                                <span className="name">Ghế đã chọn</span>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="rightticket">
                    <div className="contentright">
                        <div className="logofilm">Hóa Đơn</div>
                        {this.renderlistPhim()}
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
                    <div className="buyticket">Mua Vé</div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listPhongVe: state.movieReducer.listPhongVe,
    loading:state.movieReducer.loading
        

    }
};


const mapDispatchToProps = dispatch => {
    return {
        getPhongVe: (id) => {
            dispatch(action.actGetPhongVe(id));

        },

        setLoading: () => {
            dispatch(action.actLoading());
          },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketMovie);
import * as ActionType from "./../constans/ActionType";
import Axios from "axios";

export const actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",

        })
            .then((result) => {
                dispatch({
                    type: ActionType.GET_LIST_MOVIE,
                    listMovie: result.data
                });

            })
            .catch((err) => {
                console.log(err)
            });
    }
}


export const actGetDetailMovie = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,

        })
            .then((result) => {
                dispatch({
                    type: ActionType.GET_DETAIL_MOVIE,
                    movie: result.data
                });

            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const actGetCinema = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,

        })
            .then((result) => {
                dispatch({
                    type: ActionType.GET_LIST_CINEMA,
                    listCinema: result.data

                });

            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const actGetCumRap = (cumRap) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cumRap}`,

        })
            .then((result) => {

                dispatch({
                    type: ActionType.GET_LIST_CUM_RAP,
                    listCumRap: result.data

                });

            })
            .catch((err) => {
                console.log(err)
            });
    }
}


export const actThongTinLichChieu = (cumRap) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cumRap}&maNhom=GP01`,

        })
            .then((result) => {
                dispatch({
                    type: ActionType.GET_THONG_TIN_LICH_CHIEU,
                    listThongTinLichChieu: result.data

                });

            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const actLoginAdmin = (user, history) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
            .then(result => {
                console.log(result.data);
                if (result.data.maLoaiNguoiDung === "QuanTri") {
                    localStorage.setItem("UserAdmin", JSON.stringify(result.data));
                    alert("Login success");
                    history.push("/dashboard");
                } else {
                    alert("K co quyen vao he thong");
                }
            })
            .catch(err => {
                console.log(err.response.data);
            });
    };
};
export const actLoading = () => {
    return {
        type: ActionType.LOADING,
    };
};


export const actGetPhongVe = (idLC) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idLC}`
        })
            .then(result => {
                console.log(result.data);

                dispatch({
                    type: ActionType.GET_LIST_PHONG_VE,
                    getPhongVe: result.data

                });
            })
            .catch(err => {
                console.log(err.response.data);
            });
    };
};


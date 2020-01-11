import * as ActionType from "./../constans/ActionType";

let initialState ={
    listMovie: [],
    movie: {},
    listCinema: [],
    listCumRap:[],
    listThongTin:{},
    loading:false

 
}

const movieReducer = (state = initialState, action)=>{
    switch (action.type){
        case ActionType.GET_LIST_MOVIE:
            state.listMovie = action.listMovie;
       
        return {...state}


        case ActionType.GET_DETAIL_MOVIE:
            state.movie = action.movie;
           
            
        return {...state,loading:false}

        case ActionType.GET_LIST_CINEMA:
           
            state.listCinema =action.listCinema

            
           
            
        return {...state}

        case ActionType.LOADING:

        return {...state, loading:true}
        

        case ActionType.GET_LIST_CUM_RAP:
        
            state.listCumRap=action.listCumRap     
              
            
        return {...state}


        case ActionType.GET_THONG_TIN_LICH_CHIEU:
            state.listThongTin=action.listThongTinLichChieu 
            
        return {...state}

      
        default:
            return {...state}
    }
}

export default movieReducer;
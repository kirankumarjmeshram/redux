import {ADD_TODO, ADD_TODO_LOADING, DEC_COUNT , INC_COUNT} from "./actionTypes";
const init = {
    count : 0,
    todos:{
        loading:false,
        error:false,
        data:[],
        
    },
}
export const reducer = (store = init, {type,payload})=>{
    switch (type){
        case INC_COUNT:
            return {...store,count: store.count + payload};
        case DEC_COUNT:
            return {...store,count:store.count-payload};
        case ADD_TODO:
            return {...store,todos:[...store.todos,payload]};
        case ADD_TODO_LOADING:
            return {...store,todos:{...store.todos,loading:true}}
        default:
            return {...store}
    }
};
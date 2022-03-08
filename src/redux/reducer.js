import {ADD_TODO, DEC_COUNT , INC_COUNT} from "./actionTypes";
const init = {
    count : 0,
    todos:[],
}
export const reducer = (store = init, {type,payload})=>{
    switch (type){
        case INC_COUNT:
            return {...store,count: store.count + payload};
        case DEC_COUNT:
            return {...store,count:store.count-payload};
        case ADD_TODO:
            return {...store,todos:[...store.todos,payload]}
        default:
            return {...store}
    }
};
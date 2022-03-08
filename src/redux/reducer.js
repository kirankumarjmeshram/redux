import {DEC_COUNT , INC_COUNT} from "./actionTypes";
const init = {
    count : 0,
}
export const counterReducer = (store = init, {type,payload})=>{
    switch (type){
        case INC_COUNT:
            return {...store,count: store.count + payload};
        case DEC_COUNT:
            return {...store,count:store.count-payload}
        default:
            return {...store}
    }
};
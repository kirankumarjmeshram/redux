import { INC_COUNT , DEC_COUNT, ADD_TODO} from "./actionTypes";

export const incCount = (payload) => ({
    type: INC_COUNT,
    payload,
});

export const decCount =(payload)=>({
    type:DEC_COUNT,
    payload,
});

export const addTodo =(payload)=>({
    type:ADD_TODO,
    payload,
})
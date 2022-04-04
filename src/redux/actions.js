import { INC_COUNT , DEC_COUNT, ADD_TODO, ADD_TODO_LOADING} from "./actionTypes";

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

export const addTodoLoading = () =>{
    return {
        type: ADD_TODO_LOADING,
    }
}

export const addTodoSuccess = () =>{
    return {
        type: ADD_TODO_LOADING,
    }
}
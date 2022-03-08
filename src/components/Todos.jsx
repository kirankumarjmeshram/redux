import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/actions";

export const Todos =()=>{
    const todos = useSelector((store)=>store.todos);
    const dispatch = useDispatch();

    const [text,setText] = useState("");
    return (
        <div>
            <input type="text" onChange={(el)=>setText(el.target.value)}/>
            <button
            onClick={()=>{
                dispatch(addTodo({id:Date.now(),title:text,status:false}))
            }}
            >Add Todo</button>
            <div>
                {todos.map((e)=>(
                    <div key={e.id}>{e.title}</div>
                ))}
            </div>
        </div>
    )
}
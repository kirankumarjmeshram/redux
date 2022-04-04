import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, addTodoLoading } from "../redux/actions";
import axios from "axios";

export const Todos =()=>{
    const {loading,data,error} = useSelector((store)=>store.todos);
    const dispatch = useDispatch();

    const [text,setText] = useState("");

    useEffect(()=>{
        getTodos()
    },[])

    const getTodos =()=>{
        axios.get("http://localhost:3002/todos").then((todos)=>{
            //
        })
    }

    return loading?"Loading...":(
        <div>
            <input type="text" onChange={(el)=>setText(el.target.value)}/>
            <button
            onClick={()=>{
                //dispatch(addTodo({id:Date.now(),title:text,status:false}));
                dispatch(addTodoLoading());
                axios.post("http://localhost:3002/todos",{
                    // id:Date.now(),
                    title:text,
                    status:false
                })
                .then((data)=>{
                    //dispatch(success(data))
                })
                .catch(()=>{
                    //dispatch(error)
                })
            }}
            >Add Todo</button>
            <div>
                {data.map((e)=>(
                    <div key={e.id}>{e.title}</div>
                ))}
            </div>
        </div>
    )
}
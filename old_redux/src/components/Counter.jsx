import { useDispatch, useSelector } from 'react-redux';
import { incCount,decCount } from '../redux/actions';
export const Counter =()=>{
    const dispatch = useDispatch();

    const count = useSelector((store)=>store.count);
    return (
      <div className="App">
          <h1> Count: {count} </h1> 
          <button
            onClick={()=>{
               dispatch(incCount(1))
               }}>
                   Add 1
            </button>
            <button onClick={()=>{
                dispatch(decCount(1))
            }}>
                Dec 1
            </button>
      </div>
    );
}
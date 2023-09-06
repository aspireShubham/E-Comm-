import { useReducer } from "react"



type initial = {
    count: number
}

type actionType = {
    type: string,
    payload: number
}
const initialState = {
    count:0
}

function reducer (state: initial,action:actionType) {

    switch(action.type) {

        case 'increment' :
            return {count :state.count + action.payload}

            case 'decrement' :
                return {count: state.count - action.payload}

            default:
                return state 
        
    }

   
}

export default function ReducerHook () {

    const [state,dispatch] = useReducer(reducer,initialState)


    return (
        <>
        <h2>{state.count}</h2>
        <button onClick={() =>dispatch({type:'increment',payload:10})}> Increment</button>
        
        <button onClick={()=>dispatch({type:'decrement',payload:5})}>decrement</button>
        </>
    )
}
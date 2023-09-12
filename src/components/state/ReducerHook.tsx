import { useReducer } from "react"



// type initial = {
//     count: number
// }

// type actionType = {
//     type: string,
//     payload: number
//     // shubham
// }
// const initialState = {
//     count:0
// }

// function reducer ( state: initial,action:actionType) {

//     switch(action.type) {

//         case 'increment' :
//             return {count :state.count + action.payload}

//             case 'decrement' :
//                 return {count: state.count - action.payload}

//             default:
//                 return state 
        
//     }

   
// }

// export default function ReducerHook () {

//     const [state,dispatch] = useReducer(reducer,initialState)


//     return (
//         <>
//         <h2>{state.count}</h2>
//         <button onClick={() =>dispatch({type:'increment',payload:10})}> Increment</button>
        
//         <button onClick={()=>dispatch({type:'decrement',payload:5})}>decrement</button>
//         </>
//     )
// }





type initial = {
    count : number
}

type UpdateAction = {
    type :'increment' | 'decrement'
    payload: number                         //  mandatory
}


type ResetAction = {
    type : 'reset'
}

type ActionType = UpdateAction | ResetAction


const initialState = {
    count:0,
}


function reducer (state : initial,action : ActionType) {

    switch (action.type) {

        case 'increment' :
            return {count : state.count + action.payload}

            case 'decrement' :
                return {count : state.count - action.payload}


            case 'reset' :
                return initialState

                default :
                 return state
    }
}


export const ReducerHook = () => {

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <>
        Count : {state.count}

        <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment</button>

        <button onClick={()=>dispatch({type:'decrement',payload:10})}>Increment</button>

        <button onClick={()=>dispatch({type:'reset'})}>reset</button>  


         {/* payload is not mandotory in reset how we write in  
      TS<button onClick={()=>dispatch({type:'reset',payload:0})}>reset</button> 
      
        if we want to ignore it we can use optional type
      */}



        </>
    )
}
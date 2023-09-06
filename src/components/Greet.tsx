
// props type


type GreetProps  = {                                // single props Type

    name: string,
    messageCount ?: number,                          // Optional Type
    isLoggedIn: boolean,
}

function Greet( props: GreetProps) {   //       when hover on App =>   Type inference 
  return (
    <div className="App">
    
        <h2>  Hii {props.name}, Lets start to learn Typescript</h2> 
        <h2>
            {
                props.isLoggedIn ? <h3> {props.messageCount} Messages read Example of optional Type (?) </h3> : <h3>We have {props.messageCount} unread message </h3>
            }
        </h2>
 
    </div>
  );
}

export default Greet;

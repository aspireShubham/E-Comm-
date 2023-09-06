

type PersonProps = {                          // Object Type
    name : {                                  //      name is a prop
        firstName: string,
        lastName : string
    }
}



 

function Person(props: PersonProps ) {   //       when hover on App =>   Type inference 
  return (
    <div className="App">
    
   <h3>We can define a type for Object using type keyword {props.name.firstName} {props.name.lastName} </h3>
 
    </div>
  );
}

export default Person;

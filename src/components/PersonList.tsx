
// type PersonListProps = {
  
//   names : {
//     firstName: string,
//     lastName: string
//   }[]                              // array
// }

import { Name } from "./PersonTypes";       // Reuse Type 


type PersonListProps = {
  names: Name[]                                      // Reuse Type 
}

function PersonList(props: PersonListProps) {   
    return (
      <div className="App">
      {
        props.names.map(ele=>{
          return (
            <li key={ele.firstName}>{ele.firstName} {ele.lastName}</li>
          )
        })
      }
   
      </div>
    );
  }
  
  export default PersonList;
  
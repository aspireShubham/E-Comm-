import Greet from './components/Greet';
import Person from './components/Person'
import PersonList from './components/PersonList';
import Status from './components/Status';
import Headings from './components/Headings';
import Oscar from './components/Oscar';
import Button from './components/Button'
import { InputType } from './components/InputType';
import Container from './components/StyleProps';
import LoggedIn from './components/state/LoggedIn';
import {ReducerHook} from './components/state/ReducerHook'
import HookComponent from './HookComponent';



const personName = {                                  //  Object
    firstName : 'Shubham',
    lastName  : 'Deshmukh',
  }
  
  
  const nameList= [                                   // array Type
    {firstName:'shubham',lastName : 'Deshmukh'},
    { firstName:'Ram',lastName: 'hari'},
    {firstName: 'rahul',lastName :'dev'}
  ]

function Common() {   //       when hover on App =>   Type inference 
    return (
      <div className="App">
      
     <Greet name='Shubham'  isLoggedIn = {true} />
     <Person name ={personName} />
     <PersonList names ={nameList}/>
     <Status status= 'loading' />

     <Headings>Placeholder Text</Headings> 
     <Oscar>                                            
     <Headings>Oscar goes to Shubham Deshmukh</Headings> 
     </Oscar> 
   
    <Button handleClick = {(event,id)=>{
      console.log('clicked in Button component',event,id )
    }}/>


    <InputType value='' handleChange={(event)=>console.log(event)} />

    <Container styles={{border:'1 px solid black',padding:'1rem',color:'red'}} />

    <LoggedIn />

    <ReducerHook/>

     <HookComponent/>
    

      </div>
    );
  }
  
  export default Common;
  
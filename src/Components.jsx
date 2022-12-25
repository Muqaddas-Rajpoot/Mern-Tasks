import { Form ,FormGroup,Input,Label,Button,FormText} from "reactstrap";
import { initialState,reducer } from "./Formreducer"; 
import { useReducer ,useMutation} from "react";

const Components=()=>{
  const [state,dispatch]=useReducer(reducer,initialState)
 
console.log(state)
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(state);
}
    return(
        <>
        <Form  onSubmit={handleSubmit}>
        <FormGroup>
    <Label >  First Name</Label>
    <Input id="firstname" name="firstname"  placeholder="firstname" type="text"  value={state.firstname} onChange={(e)=>{dispatch({
      
        type:"changeValue",
        field:e.target.name,
        value:e.target.value
      
    })}}/>
  </FormGroup>
  <FormGroup>
    <Label > Last Name</Label>
    <Input id="lastname" name="lastname"  placeholder="lastname" type="text"  value={state.lastname}  onChange={(e)=>{dispatch({
      
      type:"changeValue",
      field:e.target.name,
      value:e.target.value
    
  })}} />
  </FormGroup>
  <FormGroup>
    <Label >  Email</Label>
    <Input id="email" name="email"  placeholder="email" type="email" value={state.email}  onChange={(e)=>{dispatch({
      
      type:"changeValue",
      field:e.target.name,
      value:e.target.value
    
  })}} />
  </FormGroup>
  <FormGroup>
    <Label >Password </Label>
    <Input  id="password" name="password" placeholder="password " type="password" value={state.password} onChange={(e)=>{dispatch({
      
      type:"changeValue",
      field:e.target.name,
      value:e.target.value
    
  })}} />
  </FormGroup>
 
 
  <Button type="submit">
    Submit
  </Button>
  <Button  onClick={()=>{
    dispatch({type:'reset'
  })
  }}>
    Reset
  </Button>
</Form>
        </>
    )
}
export default Components;
import { useState,useRef } from 'react';
import { Button } from 'reactstrap';

export default function Inline(){
  // handleclic()
  // function handleclic(){
  //   alert("decalre")
  // }
  //   const handleclick=()=>{
  //     alert("click me")
  // }


  const[count,setcount]=useState(0)
  const[todos,settodos]=useRef([])
    const calculation=expensiveCalculation()
    const increment=()=>{
    setcount((c)=>c+1)
    }
    const expensiveCalculation=(num)=>{
      for(let i=0;i<1000000;i++){
        console.log("calculating")
        num+=1
      }
      return num
    }
    const addTodo=()=>{
      settodos((t)=>[...t,"New Todo"])
    }
    return(
        <>
        <div>
  {/* <Button
    color="primary" onClick={handleclick}
  >
    Click Me
  </Button> */}
</div>
        </>
    )
}
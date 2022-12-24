import logo from './logo.svg';
import './App.css';
import usecallback from './Inline';
import Inline from './Inline';
import { useRef } from 'react';
import { useEffect } from 'react';
function App() {
//   const countRef=useRef(0);
//  //const [count,setcount]=useState(0)
//   const someHandler=()=>{
//    countRef.current++;
//    console.log(`clicked ${countRef.current} times`)
//   }
//  console.log("i rendered")
//  const inputRef=useRef()
//  useEffect(()=>{
//  // console.log(inputRef.current.focus())
//   inputRef.current.focus();
//  },[]);

  return (
    <div className="App">
     {/* {/* <Inline/>
       <button onClick={someHandler}>clickme</button> 
      <input ref={inputRef} type="text"/> */}
    </div>
  );
}

export default App;

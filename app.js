import "./styles.css";
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  // const [input, setInput] = useState({});
 
  const handleAdd = () =>{
    if(count >= 10){
      console.log('max input acheived!')
    }else{
      setCount(count + 1)
    }
    
  }

  const handleRemove = (c, index) =>{
   if(count > 1){
    setCount(count - 1)
   }
    
  }

  var obj = {
    inputFirst:'43534',
    inputSecond:'43743'
  }

  const handleChange =(event, index) =>{
    var value = event.target.value
    console.log(index, value)
  }

  return (
    <div  style={{textAlign:'center', marginTop:50}}>
    <div style={{borderBottom: 5}}>
   <span>Append New input field </span>
   <button style={{borderRadius: 10, backgroundColor:'blue', border:0, color:'white', marginLeft:5, padding:10 }} onClick={handleAdd} > + </button> <br/> <br/>
  
   </div>

   {Array.from(Array(count)).map((c,index)=>{
    // console.log(Array.from(Array(count)))
    return (
      <div key={index} style={{marginBottom:5}}>
        <input style={{borderWidth:2}} type='text' onChange={()=>{handleChange(event, index)}} />
        <button  style={{borderRadius: 10, backgroundColor:'red', border:0, color:'white', marginLeft:5}} onClick={()=>{handleRemove(c, index)}}>x</button> 
      </div>
    );
   })}
  </div>
  );
}

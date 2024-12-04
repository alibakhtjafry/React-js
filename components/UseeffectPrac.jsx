import { useEffect,useState } from 'react'
import "./UseeffectPrac.css"
export default function UseeffectPrac() {
  const [count,setCount]=useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`; // Updates the document's title
    console.log(`Document title updated to: Count: ${count}`);
  }, [count]);
  return (
    <div id="division">
      <h1>count = {count}</h1>
      <br />
      <button className="btn" onClick={()=>{setCount(count+1)}}>Increment</button>
      <button className="btn" onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  );
}

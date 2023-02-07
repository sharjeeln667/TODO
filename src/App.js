 import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"
import Button from "./Component/Button";
import Input from "./Component/Input";

function App() {
  const [item , setitem] = useState("")
  const [add , setadd] = useState([])


let handle=(e)=>{
  setitem(e.target.value)
}

let additems=()=>{
  setadd([...add , item])
  setitem("")

} 

let delitem=(i)=>{
  add.splice(i , 1)
  setadd([...add])
 

}
let edit =(x,i)=>{
  let edi = prompt('enter value' , add[i])
  add[i] = edi
  setadd([...add])
}


let alldel=(i)=>{
  add.splice(i)
  setadd([...add])
}

  return (
    <div className="App">
      <header className="App-header">
      <ul>

        {add.map((x,i)=>{
          return (
            <li className="card" key={i}>{x} <button className="del" onClick={( )=>delitem(i)}>del</button> <button className="edit" onClick={( )=>edit(x,i)} >edit</button></li>
          )
        })}
      </ul>

        <input type="text" value={item} placeholder="ENTER ITEMS" onChange={handle}   /> 
        <button className="additem" onClick={additems}>ADD ITEMS</button>
       

      </header>
    </div>
  );
}

export default App;
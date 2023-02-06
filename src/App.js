import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"

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
  const del=add.filter((x , id )=>{
    return i ==! id
  })
  setadd(del)

}
let edit =(x,i)=>{
  let pro = prompt('')
  let val = pro== add[i]
  setadd(val)
 
  

 
}

  return (
    <div className="App">
      <header className="App-header">
      <ul>

        {add.map((x,i)=>{
          return (
            <li key={i}>{x} <button onClick={( )=>delitem(i)}>del</button> <button onClick={( )=>edit(i)} >edit</button></li>
          )
        })}
      </ul>

        <input type="text" value={item} placeholder="ENTER ITEMS" onChange={handle}   /> 
        <button onClick={additems}>ADD ITEMS</button>
       
        
     
     
      </header>
    </div>
  );
}

export default App;
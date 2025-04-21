import React from "react";
function HookDemo(){
    const [counter, setCounter] = React.useState(99)
    const [color, setColor] = React.useState("Red")
    const [name, setName] = React.useState("")

    return(<>
    <h1>Conuter Exmple</h1>
    Counter Value is {counter}
    <input type="button" value="+" onClick={()=>setCounter(100)}/><hr/>
    Color is {color}
    <input type="button" value="+" onClick={()=>setColor    ("Blue")}/> <hr/>
    Name is <input type="text" onChange={(e)=>setName(e.target.value)}/>
    Name is {name}
    </>

    )

}

export default HookDemo
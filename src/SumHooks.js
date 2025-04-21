import React from "react";
function SumHooks(){
    const [data,setData] =React.useState({})
    const [ans,setAns] = React.useState(0)

    const doSum = () =>{
        var c = parseInt(data.no1)+ parseInt(data.no2)
        setAns("Sum is "+c)
    }
    return(<>
    <h1>Sum</h1>
    No 1: <input type="text" onChange={(e)=>setData({...data,no1:e.target.value})}/>
    No 1: <input type="text" onChange={(e)=>setData({...data,no2:e.target.value})}/>
    <input type="button" onClick={doSum}/>
    {ans}
    </>)

}

export default SumHooks

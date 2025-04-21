import React from "react";
class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    const {txt1,txt2} = this.props
    var c = parseInt(txt1)+parseInt(txt2)
    return(<>
    <h1>Sum Componants</h1>
    A Value is : {txt1} <br/>
    A Value is : {txt2} <br/>
    sum is {c}
    </>)
  } 
}

export default Sum
import React, { Component } from "react";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [], txt1: "" };
  }

  addData() {
    var temparr = this.state.mydata;
    temparr.push(this.state.txt1);
    this.setState({ mydata: temparr, txt1: "" });
  }
  deleteData() {
    var temparr = this.state.mydata;
    temparr.pop(this.state.txt1);
    this.setState({ mydata: temparr, txt1: "" });
  }
  render() {
    return (
      <>
        Name is{" "}
        <input
          type="text"
          value={this.state.txt1}
          onChange={(e) => this.setState({ txt1: e.target.value })}
        />
        <input type="button" value="Click" onClick={this.addData.bind(this)} />
        <input type="button" value="Delete" onClick={this.deleteData.bind(this)} />
        {this.state.mydata.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </>
    );
  }
}

export default Todo;

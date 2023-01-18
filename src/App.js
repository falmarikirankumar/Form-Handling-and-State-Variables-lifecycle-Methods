import React, { Component } from "react";
import "./App.css";
import DataBox from "./Componets/DataBox";
export default class App extends Component {
  //Golden Role:- State can only be changed using setState()
  state = {
    Name: "",
    Department: "",
    Rating: "",
    Employees: [],
  };

  changeHandler = (e) => {
    // console.log([e.target.value]);
    // console.log(e);
    // console.log("ChangeHandler Changed");
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
    // console.log(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submit is Clicked");
    const obj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating,
    };

    const arr = this.state.Employees;
    arr.push(obj);
    this.setState({ Employees: arr });
  };

  // data = React.createElement(
  //   "div",
  //   { className: "div2" },
  //   this.state.Employees.map((value, index) => {
  //     return (
  //       <span key={index}>
  //         Name : {value.Name} Department : {value.Department} Rating :
  //         {value.Rating}
  //       </span>
  //     );
  //   })
  // );

  // State is variable to create in react for store a value
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>EMPLOYEE FEEDBACK FORM</h1>
        <form className="form-1">
          <label htmlFor="" className="labels">
            Name :
            <input
              type="text"
              name="Name"
              value={this.state.Name}
              onChange={this.changeHandler}
            />
          </label>

          <br />
          <label htmlFor="" className="labels">
            Department :
            <input
              type="text"
              name="Department"
              value={this.state.Department}
              onChange={this.changeHandler}
            />
          </label>

          <br />
          <label htmlFor="" className="labels">
            Rating :
            <input
              type="number"
              name="Rating"
              value={this.state.Rating}
              onChange={this.changeHandler}
            />
          </label>

          <br />
          <button onClick={this.submitHandler}>Submit</button>
          {/* HTML Button is of type SUBMIT */}
        </form>
        <div className="main">
          {/* <div className="div2"> */}
          {this.state.Employees.map((value, index) => {
            return (
              <DataBox
                keys={index}
                Name={value.Name}
                Department={value.Department}
                Rating={value.Rating}
              />
            );
          })}
          {/* </div> */}
          {/* <div className="div2">
            {this.state.Employees.map((value, index) => {
              return (
                <span keys={index}>
                  Name : {value.Name} <br />
                  Department : {value.Department} <br />
                  Rating :{value.Rating}
                  <br />
                </span>
              );
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

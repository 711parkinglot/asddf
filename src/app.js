import React, { Component } from "react";

class App extends Component {
  state = {
    firstName: "Jean",
    age: 27,
    designation: "Researcher",
    city: "Berlin",
    arr: [85, 76, 34],
    contact: {
      email: "jeandoe@gmail.com",
    },
    employeeData: [
      {
        name: "Myrtle",
        age: 65,
        id: 3,
      },
      {
        name: "Misty",
        age: 35,
        id: 2,
      },
      {
        name: "Fiona",
        age: 55,
        id: 1,
      },
    ],
  };

  handleUpdate = () => {
    this.setState({
      designation: "Scientist",
      age: 44,
    });
  };
      <div>
        <p>
          My name is {this.state.firstName} age: {this.state.age}, working as a{" "}
          {this.state.designation}
        </p>
        <p>Contact: {this.state.contact.email}</p>
        <p>
          {this.state.arr.map((e) => {
            return <p>{e}</p>;
          })}
        </p>

        <button onClick={this.handleUpdate}>Submit</button>
      </div>
    );
  }
}

export default App;

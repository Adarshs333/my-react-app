
import React, { Component } from "react";
import Semester from'./semester';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          usn: "4sf16cs002",
          name: "akash",
          sem: 1,
          cgpa:8.75
        },
        {
          usn: "4sf16cs004",
          name: "balaji",
          sem: 1,
          cgpa:8.75
        },
        {
          usn: "4sf16cs005",
          name: "rakesh",
          sem: 1,
          cgpa:8.75
        },
        {
          usn: "4sf16cs006",
          name: "srinivas",
          sem: 1,
          cgpa:8.75
        },

      ],
    };
  }


  render() {
   
    return (
      <div> 
        <Semester student ={students}/>
        </div>
    )
  }
}

export default Students;


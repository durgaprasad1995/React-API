// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}

//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
// import app from "./people.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      userList: []
    };
  }
  componentDidMount() {
    fetch("https://mk-api.herokuapp.com/resume/project/all")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
    //   axios
    //     .get("../public/people.json") // JSON File Path
    //     .then(response => {
    //       this.setState({
    //         userList: response.data
    //       });
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });

    fetch("./people.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          userList: data
        });
        console.log("data:", JSON.stringify(data));
      });
  }
  // componentDidMount() {

  // }
  render() {
    var { isLoaded, items, userList } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    // const usersList = this.state.userList;
    // let usersListBlock = "";
    // if (usersList.length > 0) {
    //   usersListBlock = usersList.map(obj => {
    //     return (
    //       <div
    //         key={obj.id}
    //         id={obj.id}
    //         imgPath={obj.avatar_url}
    //         name={obj.name}
    //       />
    //     );
    //   });
    // }
    return (
      <div className="App">
        {/* <span>{app}</span> */}
        {/* <ul>
          {items.map(item => (
            <li key="{item.id}">
              Name: {item.name} | Description : {item.description} | Images :{" "}
              {item.image}
            </li>
          ))}
        </ul> */}
        {items.map((items, index) => {
          return (
            <div key={index}>
              <span>{items.name}</span>&nbsp;&nbsp;&nbsp;
              <span>{items.description}</span>&nbsp;&nbsp;&nbsp;
              {/* <span>{items.Likes}</span> */}
            </div>
          );
        })}

        <ul>
          {/* {userList.map(te => (
            <li key="{te.id}">
              Name: {te.name} | Description : {te.Description} | Images :
              {te.img} | Likes : {te.Likes}
            </li>
          ))} */}

          {userList.map((items, index) => {
            return (
              <div key={index}>
                <span>{items.name}</span>&nbsp;&nbsp;&nbsp;
                <span>{items.Description}</span>&nbsp;&nbsp;&nbsp;
                <span>{items.Likes}</span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component, useContext } from 'react'
// uncomment following while using funtional comp.
import UserContext from '../MyContext';
import { UserConsumer } from '../MyContext';
import { Link, Route, Router } from 'react-router-dom';

// --------------------------------------using Class Comp.----------------------------------------------------//
class HomePage extends Component {
  render() {
    return (
      // provided value from app.js needs to be consumed here
      <>
        {/* <Link to='/callback'>callback Example</Link> */}

        <UserConsumer>
          {props => {
            console.log(props);
            return (
              <div><h1><b>Name:</b> {props.name}</h1>
                <h2>Age:{props.age}</h2></div>
            )
          }}
        </UserConsumer>
      </>
    )
  }
}

// --------------------------------------using Funtional Comp.----------------------------------------------------//
// function HomePage() {
//   const user = useContext(UserContext)

//   console.log(user) // { name: 'dummy', loggedIn: true }

//   return(
//     <>
//     <div>
//       {user.name}<br/>
//       {user.age}
//     </div>
//     </>
//   )
// }

export default HomePage;
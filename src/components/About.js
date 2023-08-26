import React from 'react'
// import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

class About extends React.Component{

  constructor(){
    super()
    // console.log("parent constructor")
  }


  componentDidMount(){
    // console.log("parent component did mount");
  }

  render(){
    // console.log("parent render")
    return(
      <div>
      <h1>this is about us page</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {/* {(data)=>console.log(data)} */}
          {({loggedInUser})=><h1 className='text-xl font-bold'>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      {/* <User name={"priya func"} location={"Delhi"}/> */}

      <UserClass name={"first class"} location={"Delhi"}/>
      {/* <UserClass name={"second class"} location={"Delhi"}/>
      <UserClass name={"third class"} location={"Delhi"}/> */}
    </div>
    )
  }
}
// function About() {
//   return (
//     <div>
//       <h1>this is about us page</h1>
//       <User name={"priya func"} location={"Delhi"}/>

//       <UserClass name={"priya class"} location={"Delhi"}/>
//     </div>
//   )
// }

export default About

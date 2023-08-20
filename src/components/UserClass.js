import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(this.props.name + "child constructor")
    this.state = {
        userInfo:{
            name:"Dummy",
            location:"default",
        }
    };
  }

  async componentDidMount(){
    // console.log(this.props.name + "child component did mount");
    const data = await fetch(" https://api.github.com/users/priyasingh34");
    const json= await data.json();

    this.setState({
        userInfo:json,
    })

    console.log(json);
  }
  render() {
    
    const { login, type, avatar_url} = this.state.userInfo;
    // console.log(this.props.name + "child render")
    
    
    return (
      <div className="user-card">
        <h2>Name:{login}</h2>
        {console.log(login)}
        <img src={avatar_url} alt="" />
       
        <h3>Location:{type}</h3>
        <h4>Contact:@priyasingh</h4>
      </div>
    );
  }
}

export default UserClass;

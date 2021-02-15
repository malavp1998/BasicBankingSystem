import React from 'react';

class Transfer extends React.Component{
  constructor(props){
     super(props)
  this.state={
        user:props.user
  }
  
  }
 

  render(){
      return(
        <div>
          {console.log(this.state.user)}
        </div>
      )
  }
}
export default Transfer 
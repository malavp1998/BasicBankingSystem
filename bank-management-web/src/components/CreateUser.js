import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
//import ReactDOM from 'react-dom';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      name:"",
      email:"",
      balance:""
    }
}
handleSubmit=(event)=>{
  console.log('sumitteed')
}
  handleClick=()=>{
    alert('A name was submitted: ' + this.state.name+this.state.email+this.state.balance);
    this.setState({
      name:""
    })
   
  }
  handleName=(event)=>{
      this.setState({name: event.target.value})  
  }

  handleEmail=(event)=>{
    this.setState({email: event.target.value})  
  } 
  
  handleBalance=(event)=>{
  this.setState({balance: event.target.value})  
  }
  render() {
      return(
      <div>
 <Segment raised>
<Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name'placeholder='name' type='text' value={this.state.name}  onChange={this.handleName}  />
      </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input fluid label='Email' placeholder='email' onChange={this.handleEmail} />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Balance' placeholder='balance' onChange={this.handleBalance}/>
      </Form.Group>
      <Button onClick={this.handleClick} type='Sumbit'>Submit</Button>
    </Form>
    </Segment>
   </Segment>
     
      </div>
      )
   }

 
}

export default CreateUser;
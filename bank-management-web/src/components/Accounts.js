import React from 'react';
import {Button,Segment, Table,Form} from "semantic-ui-react";
import axios from 'axios'
import Transfer from './Transfer';
//import { Link } from 'react-router-dom';
//import Transfer from './Transfer';

//import ReactDOM from 'react-dom';

class Accounts extends React.Component {
  constructor(props){
     super(props);
  this.state={
    users:[],
    user:"",
    flag:false,
    transferTo:""
  };

  }
  componentDidMount() {
    this.getUsers();
}

async getUsers() {
    const url = 'http://localhost:8080/user/get/all';
    await axios.get(url)
    .then(
        response => {
            this.setState({users: response.data});
        }
    )
    .catch(
        error => {
            console.log(error) 
        }
    )
}
  transferMoney(user) {
   this.setState({
           user:user,
           flag:true
   })
}

handleTransferto=(event)=>{
    this.setState({transferTo: event.target.value})  
}

handleClick=()=>{
    console.log(this.state.transferTo)
    console.log(this.state.user)
}
  render() {
    const users=this.state.users
    const user=this.state.user
    const option=users.map( u => 
        ({id:u.id, text:u.name,value:u.name })
        )
    if(this.state.flag){
     return(
        <Segment >
        <Table size='small' >
            <Table.Header >
                <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Balance</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
  
            <Table.Body>
                        <Table.Row >
                            <Table.Cell>{user.id} </Table.Cell>
                            <Table.Cell> {user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.balance}</Table.Cell>
                        </Table.Row>
            </Table.Body>
        </Table>
             <Form>
                 <Form.Select fluid label='Transfer To' options={option}  placeholder='name' onChange={()=>this.handleTransferto}  />
                 <Form.Group widths='equal'>
                     <Form.Input fluid label='Amount' placeholder='value'  />
                 </Form.Group> 
                 <Form.Button  onClick={this.handleClick} >Transfer</Form.Button>
             </Form>
    </Segment>
     )    
    }
  
    return(
    <div>
       <Segment inverted>
      <Table size='small' >
          <Table.Header >
              <Table.Row>
                  <Table.HeaderCell>id</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Balance</Table.HeaderCell>
                  <Table.HeaderCell>Operation</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
          {users.map((user,index) => 
                      <Table.Row >
                          <Table.Cell>{user.id} </Table.Cell>
                          <Table.Cell> {user.name}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                          <Table.Cell>{user.balance}</Table.Cell>
                          <Table.Cell><Button type='submit' onClick={() => {this.transferMoney(user)}}>
                                        Transaction</Button></Table.Cell>
                      </Table.Row>
          )}
      
          </Table.Body>
      </Table>
  </Segment> 
    </div>
      
    )
   }
}

export default Accounts;
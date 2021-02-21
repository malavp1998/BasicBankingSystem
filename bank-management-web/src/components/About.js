import React, { Component } from "react";
import { Grid ,Image,Card,Button} from 'semantic-ui-react'
import bank from './images/bank1.JPG'
import ts from './images/ts.png'
import transaction from './images/transaction.png'
import userjpg from './images/userjpg.jpg'
import { Link } from 'react-router-dom'
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  render() {
    return (
      <div>
    <div style={{backgroundColor:'#d1885e'}}>|
      <Grid >
      <Grid.Row >
        <Grid.Column width={8}>
        <p style={{padding:'100px',paddingLeft:'350px'}}> 
         <h3 style={{paddingLeft:'26px'}}>Welcome to </h3>
         <h1 style={{fontFamily:'cursive',lineHeight:'0.0011'}}>Indian Bank</h1>
        </p> 
        </Grid.Column>
        <Grid.Column width={8}>
        <Image size='large' rounded src={bank} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
    <div style={{backgroundColor:'rgb(204 222 207)',padding:'50px'}}>
    <Card.Group itemsPerRow={3}>
      <Card>
    <Image  src={userjpg} size='small' wrapped ui={false} />
    <Card.Content textAlign='center'>
         
    
   
      <Card.Header>   <Button color='blue' as={Link} to='/create/user'>Create User</Button></Card.Header>
  
    </Card.Content>
    <Card.Content extra>
     
    </Card.Content>
  </Card>
  <Card>
    <Image src={transaction} size='small' wrapped ui={false} />
    <Card.Content textAlign='center'>
         
    
   
      <Card.Header>   <Button color='blue' as={Link} to='/accounts'> Make a Transaction</Button></Card.Header>
  
    </Card.Content>
    <Card.Content extra>
     
    </Card.Content>
  </Card>
  <Card>
    <Image src={ts} size='small' wrapped ui={false} />
    <Card.Content textAlign='center'>
         
    
   
      <Card.Header>   <Button color='blue' as={Link} to='/transfer'>Transaction History</Button></Card.Header>
  
    </Card.Content>
    <Card.Content extra>
     
    </Card.Content>
  </Card>

  </Card.Group>
    </div>
   
    </div>

    )
  }
  

 
}

export default About;
import React, { Component } from 'react';
import * as api from "../services/api";
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom'

const paperStyle = {
  height: 450,
  width: '30%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class HomePage extends Component {
  state={
    dishes:[]
  }

  componentWillMount() {
    api.getItems()
    .then(dishes=>this.setState({dishes}))
    .catch(e=>console.log(e))
  }
  
  render() {
    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {this.state.dishes.map(dish=>{
        return (
          <Paper key={dish._id} style={paperStyle} zDepth={3}>
           <Link to={`/dishes/${dish._id}`}>
            <h1>{dish.name}</h1>
            <img width='100%' height='60%' src={dish.image} />
            <p>{dish.description.slice(0,100)} ...</p>
            </Link>
          </Paper>
        
        )
        })}
      </div>
    );
  }
}

export default HomePage;
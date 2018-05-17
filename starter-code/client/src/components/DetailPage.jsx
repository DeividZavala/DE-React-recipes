import React, { Component } from 'react';
import * as api from "../services/api";

class DetailPage extends Component {
  state={
    dish:{}
  }

  componentWillMount() {
    api.getSingleItem(this.props.match.params.id)
    .then(dish=>this.setState({dish}))
    .catch(e=>console.log(e))
  }
  
  render() {
    return (
      <div style={{display:'flex'}}>
        <div>
          <img width='100%' height='500px' src={this.state.dish.image} />
        </div>
        <div>
          <h1>{this.state.dish.name}</h1>
          <p>{this.state.dish.description}</p>
        </div>     
      </div>
    );
  }
}

export default DetailPage;
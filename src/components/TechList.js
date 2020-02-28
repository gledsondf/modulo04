import React, { Component } from 'react';


class TechList extends Component {

  constructor(props){
    super(props);
    this.state = {
      newTech: 'tese',
      techs: [
        'Node.js',
        'ReactJs',
        'React Native'
      ]
    }
    
  }

  // handleInputChange = e => {
  //   this.setState({newTech: e.target.value})
  // }
  // handleInputChange(e){
  //   props.state.setState({newTech: e.target.value});
  // }
  render() {
    return (
      <>
      <h1></h1>
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input type='text' />
      <button onClick = {()=>this.props({newTech:'gledson botão'})}>{this.state.newTech}</button>
      </>
    );
  }
}

export default TechList;
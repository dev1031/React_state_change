import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ value:'hello'};
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(props){
     this.setState({ value:"Button is clicked"});
  }
  render(){
    return (
      <div className="App">
        <button onClick = {this.handlechange}>{this.state.value}</button>
      </div>
    );
  }
}
  

export default App;

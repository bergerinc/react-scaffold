import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import styles
import './../scss/styles.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div class="content">
        <img className="logo" src="/react-icon.svg" alt="react icon" aria="react icon"></img>
        <h1>React Scaffold</h1>
        <p>You are ready to go!</p>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

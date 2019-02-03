import React, { Component } from 'react'; //the component is imported from the 'react' library.
import './App.css';
import Person from './Person/Person.js'

class App extends Component { //the app class inherits from the component.
  state = {
    persons: [
      {name: 'Max', age: 20},
      {name: 'Brendan', age: 29},
      {name: 'Trent', age: 29}
    ]
  }

  switchNameHandler = (event) => {
    this.setState({ persons:
      [
        {name: event.target.value, age: 20},
        {name: 'Brendan', age: 29},
        {name: 'Trent', age: 29}
      ]})
  }
  render() { //renders html to the view
    return (
      <div className="App">
       <h1> hello! </h1>
       <button onClick={() => this.switchNameHandler('this is a test')}>Switch Name!</button>
       < Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'It worked!')} changed={this.switchNameHandler}/>
       < Person name={this.state.persons[1].name} age={this.state.persons[1].age}> & I like coding!</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'text'))
  }
}

export default App; //exports app class file by default

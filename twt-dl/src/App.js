import React, { Component } from 'react'

class App extends Component {
  //ill deal with hooks later
  /*const [inputURL] = useState([
    {enteredURL: ''}
  ])*/
  state = {
    enteredURL: '',
  }
  getInput = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }
  render() {
      return (
        <div className="App">
          <form>
            <input
            name='enteredURL'
            onChange={this.getInput}/>
          </form>
        </div>
      );
    }
  }
  

export default App;

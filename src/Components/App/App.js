import React from 'react';
import './App.scss';
import QueryInput from '../QueryInput/QueryInput';
import QueryAnswer from '../QueryAnswer/QueryAnswer';
import { tsImportEqualsDeclaration } from '@babel/types';


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      value: "",
      foo: "",

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    this.setState({foo: this.state.value});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Explain rails
            (v1 - ActiveRecord only)
          </p>
        </header>
        {/* <QueryInput /> */}
  
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type your query.." />
          </label>
          <input type="submit" value="Submit" />
        </form>


        <QueryAnswer query={this.state} />

      </div>
    );
  }
}

export default App;

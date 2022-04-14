import React from 'react'

class PlayerSearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input className="playerSearchBox" type="text" placeholder="Search a Slippi Account" value={this.state.value} onChange={this.handleChange}></input>
            <input className="playerSearchButton" type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default PlayerSearchForm;
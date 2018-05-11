import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../utils/API";


class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
				  comment: ''
				 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.name, comment: event.target.comment});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if (this.state.name) {
        API.updateComments({
          name: this.state.name,
          // comment: this.state.comment
         
        
        })
          .then(res => this.loadVideo())
          .catch(err => console.log(err));
      }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Comment:
          <input type="text" value={this.state.commment} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default CommentsForm;


// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';



const ListView = ({data, index, deleteContact}) => {
  return (
    <div className="row">
      <div className="col-md-10">
        <li className="list-group-item clearfix">
          {data.name}
        </li>
      </div>
      <div className="col-md-2">
        <button onClick={(e) => deleteContact(e, index)} className="btn btn-danger">
          Remove
        </button>
      </div>
  </div>
  )
}


class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: ''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      name: ''
    });
    this.props.createContact({
      name: this.state.name
    });
  }

  listView(data, index){
    return (
      <div className="row" key={index}>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div>
    )
  }

  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return(
      <div className="container">
        <h1>Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        <ul className="list-group">
          {/* {this.props.contacts.map((contact, i) => this.listView(contact, i))} */}
          {this.props.contacts.map((contact, i) => <ListView key={i} data={contact} index={i} deleteContact={this.deleteContact} />)}
        </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('Own props', ownProps, state)
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
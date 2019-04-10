import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts
  
  return <ol>
    {people.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
   </ol>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World! This is my first React App!
          </p>
          <ContactList contacts={[
            { name : 'Reggie' },
            { name : 'Storm' },
            { name : 'Bomlinson' }
          ]}/>
          <ContactList contacts={[
            { name : 'Da-viddy Cent' },
            { name : 'Notorious P.I.P' }  
          ]}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

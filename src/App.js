import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}));
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    this.setState({searchField: value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <SearchField placeholder="Search me..." handleChange={e => this.handleChange(e)} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}
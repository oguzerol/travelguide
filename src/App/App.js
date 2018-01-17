import React, { Component } from 'react';
import BaseLayout from '../layout/baselayout';
import { BrowserRouter as Router} from 'react-router-dom'
import styles from './App.scss';
import bootstrap from 'bootstrap/scss/bootstrap.scss';

console.log(bootstrap)
class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      result: null
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this);

  }

  setSearchTopStories(result) {
    this.setState({ result });
    console.log(result)
  }

  fetchSearchTopStories(searchTerm) {
    fetch(`http://www.reddit.com/r/travel/top.json?limit=5`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result.data.children.map(obj => obj.data)))
      .catch(e => e);
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    return (
      <div className={styles.App}>
      <div className={bootstrap.container}> test</div> 
        <Router>
          <BaseLayout />
        </Router>
      </div>
    );
  }
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Books from '../Books/Books';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Photos from '../Photos/Photos';


class App extends React.Component {

  constructor(props) {
    super(props);
    // start at home page by default
    this.state = {page: 'home'}
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    this.setState(
      {page: event.target.id}
    )
  }

  render() {
    if (this.state.page === 'home') {
      return (
        <div className='app'>
          < Header 
            page={this.state.page} 
            handlePageChange={this.handlePageChange}/>
          < Home />
        </div>
      )
    } else if (this.state.page === 'photos') {
      return (
        <div className='app'>
          < Header 
            page={this.state.page} 
            handlePageChange={this.handlePageChange}/>
          < Photos />
        </div>
      )
    } else if (this.state.page === 'books') {
      return (
        <div className='app'>
          < Header
            page={this.state.page}
            handlePageChange={this.handlePageChange} />
          < Books />
        </div>
      )
    } else if (this.state.page === 'projects') {
      return (
        <div className='app'>
          < Header
            page={this.state.page}
            handlePageChange={this.handlePageChange} />
          < Projects />
        </div>
      )
    } else if (this.state.page === 'resume') {
      return (
        <div className='app'>
          < Header
            page={this.state.page}
            handlePageChange={this.handlePageChange} />
          < Resume />
        </div>
      )
    } else if (this.state.page === 'contact') {
      return (
        <div className='app'>
          < Header
            page={this.state.page}
            handlePageChange={this.handlePageChange} />
          < Contact />
        </div>
      )
    }
    else {
      return (
        <div className='app'>
          < Header 
            page={this.state.page} 
            handlePageChange={this.handlePageChange}/>
          < Home />
        </div>
      )
    }

  }
}

export default App;

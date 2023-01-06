
import './App.css';

import React, { Component } from 'react'
import NavBar from './comp/NavBar';
import News from './comp/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={12} country="in" category="general"/>} />
            <Route path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={12} country="in" category="business"/>} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={12} country="in" category="entertainment"/>} />
            <Route path='/general' element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={12} country="in" category="general"/>} />
            <Route path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={12} country="in" category="health"/>} />
            <Route path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={12} country="in" category="science"/>} />
            <Route path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={12} country="in" category="sports"/>} />
            <Route path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={12} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

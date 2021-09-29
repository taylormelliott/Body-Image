import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import FemalePics from './components/Female/FemalePics';
import MalePics from './components/Male/MalePics';
import Input from './components/Input/Input';





export default class App extends Component {

  constructor() {
    super()

    this.state={
      gender:'',
      id: 0,
      logs: []
    }
    this.handleId = this.handleId.bind(this)
    this.handleGender = this.handleGender.bind(this)
    this.handleLogs = this.handleLogs.bind(this)
  }

  handleGender(value) {
    this.setState({gender: value})

  }

  handleId(value) {
    this.setState({id: value})
   
    
  }

  handleLogs(value) {
    this.setState({logs: value})
  }

  //create an axios get request for the users session
  //
  render() {
    

    
    return (
      
      <div className ="container d-flex flex-column justify-content-center text-center ">
        
       <Switch>
        <Route exact path='/' render={(props) => <Homepage {...props} id ={this.state.id} gender ={this.state.gender} handleId = {this.handleId} handleGender = {this.handleGender} />} />
        <Route exact path='/female' render={(props) => <FemalePics {...props} id ={this.state.id} gender ={this.state.gender} handleId = {this.handleId} handleGender = {this.handleGender} />} />
        <Route exact path='/male' render={(props) => <MalePics {...props} id ={this.state.id} gender ={this.state.gender} handleId = {this.handleId} handleGender = {this.handleGender} />} />
        <Route exact path='/input' render={(props) => <Input {...props} id ={this.state.id} gender ={this.state.gender} handleId = {this.handleId} handleGender = {this.handleGender} />} />
       </Switch>
        <br />
        
        
      </div>
    )
  }
}

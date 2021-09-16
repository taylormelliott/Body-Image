import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FemalePics from './components/Female/FemalePics'
import Homepage from './components/Homepage/Homepage'
import Input from './components/Input/Input'
import MalePics from './components/Male/MalePics'


export default (
    <Switch>
        <Route exact path='/female' component={FemalePics} />
        <Route exact path='/male' component={MalePics}/>
        <Route exact path='/input' component={Input} />
        <Route exact path='/' render={(props) => <Homepage {...props} id ={this.state.id} />} />
        
    </Switch>
)
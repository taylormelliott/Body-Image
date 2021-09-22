import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import './homepage.css'

export default class Homepage extends Component {
    constructor() {
        super()

        this.state = {
            maleBtn: 'male',
            femaleBtn: 'female',
            hidden: false,
            hideRegister: false
        }
        this.handleMale = this.handleMale.bind(this)
        this.handleFemale = this.handleFemale.bind(this)
        this.toggleHidden = this.toggleHidden.bind(this)
        this.toggleHideRegister = this.toggleHideRegister.bind(this)
    }

    handleFemale() {
        this.props.handleGender(this.state.femaleBtn)

        axios.put('/users/gender', {
            gender: this.props.gender,
            id: this.props.id
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

    }

    handleMale() {
        this.props.handleGender(this.state.maleBtn)

        axios.put('/users/gender', {
            gender: this.props.gender,
            id: this.props.id
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

    }

    toggleHidden() {
        this.setState({ hidden: true })
    }

    toggleHideRegister() {
        this.setState({ hideRegister: true})
    }



// when button is clicked, post a 'male' or 'female' status by user id to users table under the column 'gender' after account created
// there also should be a put request to update 'gender' in the users table if there is data already in the 'gender' column.
//post 'email' and 'password' to users table under the columns 'email' and 'password' when registering
//launch a get request to the users table that matches 'email' and 'password' with what the user typed in for log in. Upon match users are brought to the input component displaying there last result along with there previous logs displayed
    render() {
        console.log(this.state.hidden)
        return (
            <div className='center shimmer'>
                

                <h1 >Body Image</h1> 
                <div className='buttons'>

                <Link  to= "/male">
                        <button type='button' class="btn btn-warning  " onClick= {this.handleMale}>Male</button>
                </Link>

                <Link  to="/female">
                        <button type='button' class="btn btn-warning" onClick= {this.handlefemale}>Female</button>
                </Link>

                      
                
                </div>

                

                <h4>Want to save your results?</h4>
                


                
                <Register id = {this.props.id} gender = {this.props.gender} hidden = {this.toggleHideRegister}/>
                {this.state.hideRegister && <p>You're Registered! Now Log in below!</p> }

                
                <Login  handleId = {this.props.handleId} hidden = {this.toggleHidden} />

                {this.state.hidden && <p>You have successfully logged in! Click Male or Female buttons to continue</p>}
                    
                


                
                
                
            </div>


        )
    }
}


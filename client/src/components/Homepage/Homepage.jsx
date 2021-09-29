import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import Video from '../video/backgroundVideo.mp4'
import './homepage.css'

export default class Homepage extends Component {
    constructor() {
        super()

        this.state = {
            maleBtn: 'male',
            femaleBtn: 'female',
            hidden: false,
            hideRegister: false,
            hideRegisterBox: true,
            hideLoginBox: true
        }
        this.handleMale = this.handleMale.bind(this)
        this.handleFemale = this.handleFemale.bind(this)
        this.toggleHidden = this.toggleHidden.bind(this)
        this.toggleHideRegister = this.toggleHideRegister.bind(this)
        this.toggleHideRegisterBox = this.toggleHideRegisterBox.bind(this)
        this.toggleHideLoginBox = this.toggleHideLoginBox.bind(this)
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

    toggleHideRegisterBox() {
        this.setState({ hideRegisterBox: !this.state.hideRegisterBox})
        this.setState({ hideLoginBox: true})
    }

    toggleHideLoginBox() {
        this.setState({ hideLoginBox: !this.state.hideLoginBox})
        this.setState({ hideRegisterBox: true})
    }

    toggleComponent(name) {
        console.log(name)
        switch (name) {
            case "hideRegisterBox":
                this.setState({ hideRegisterBox: false})
                break;
            case "hideLoginBox":
                this.setState({hideLoginBox: false})
                break;
                default:
        }
    }



// when button is clicked, post a 'male' or 'female' status by user id to users table under the column 'gender' after account created
// there also should be a put request to update 'gender' in the users table if there is data already in the 'gender' column.
//post 'email' and 'password' to users table under the columns 'email' and 'password' when registering
//launch a get request to the users table that matches 'email' and 'password' with what the user typed in for log in. Upon match users are brought to the input component displaying there last result along with there previous logs displayed
    render() {
        console.log(this.state.hidden)
        return (
            <div className='center shimmer'>

                <video autoPlay loop src={Video} style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate( -50% , -50%)',
                    zIndex: '-1'

                }}>

                </video>
                

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
                
                <div class='d-flex'>
                    <button onClick= {this.toggleHideRegisterBox} type='button' className='btn btn-link'>Register</button>
                    <button onClick= {this.toggleHideLoginBox } type='button' className='btn btn-link'>Log In</button>
                </div>
                
                

                {!this.state.hideRegisterBox && <Register id = {this.props.id} gender = {this.props.gender} hidden = {this.toggleHideRegister}/>}
                
                
                {this.state.hideRegister && <p>You're Registered! Now Click the Log In button!</p> }

                {!this.state.hideLoginBox && <Login  handleId = {this.props.handleId} hidden = {this.toggleHidden} /> }
                

                {this.state.hidden && <p>You have successfully logged in! Click Male or Female buttons to continue</p>}
                    
                


                
                
                
            </div>


        )
    }
}


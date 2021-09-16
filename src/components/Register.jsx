import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            passwords: ''
        }
        this.handleRegistry = this.handleRegistry.bind(this)
    }
    //build out axio request to handle registry
    handleRegistry(e) {
        e.preventDefault()
        console.log(this.state.email, this.state.passwords)
        

        

        axios.post('/users/register', {
            email: this.state.email,
            passwords: this.state.passwords
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

          this.setState({email: '', passwords:''})

          
    }

    handleEmail(e) {
        
        this.setState({ email: e})
    }
    handlePassword(e) {
        this.setState({ passwords: e})

    }

    
    render() {
        
        
        return (
            <div>
                <div>
                    <h3>Register</h3>
                    <form onSubmit={this.handleRegistry}>
                        <input value= {this.state.email} type="email"  placeholder='email...' required onChange={(e) => {this.handleEmail(e.target.value)}} />
                        <input value= {this.state.passwords} type="password" placeholder='password' required onChange={(e) => {this.handlePassword(e.target.value)}} />
                        <button onClick= {this.props.hidden}>Register</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            passwords: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleEmail(e) {
        
        this.setState({ email: e})
    }
    handlePassword(e) {
        this.setState({ passwords: e})

    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post('/users/login', {
            email: this.state.email,
            passwords: this.state.passwords
        })
        .then((response) => {
            this.props.handleId(response.data.id)

            


            
            console.log(response);
          }, (error) => {
            console.log(error);
          });

          this.setState({email: '', passwords:''})

    }
    render() {
        console.log(this)
        return (
            <div>
                <div>
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input value= {this.state.email} type="email"  placeholder='email...' required onChange={(e) => {this.handleEmail(e.target.value)}} />
                        <input value= {this.state.passwords} type="password" placeholder='password' required onChange={(e) => {this.handlePassword(e.target.value)}} />
                        <button onClick ={this.props.hidden}>Log In</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import female12 from '../../images/female12.png'
import female15 from '../../images/female15.png'
import female25 from '../../images/female25.png'


export default class FemalePics extends Component {
    constructor() {
        super()

        this.state = {
            bodyFat12: 0.12,
            bodyFat15: 0.15,
            bodyFat25: 0.25

        }
    }

    //clicked bodyfat needs to be stored on the front end once user is logged in 



    render() {
        

        return (
            <div>

                <h1>Pick Your Desired Look</h1>
                <Link  to={{ 
                        pathname: "/input", 
                        state: this.state.bodyFat12,
                        id: this.props.location.state
                        }} ><img src={female12} alt="" /></Link>

                <Link to={{
                        pathname: '/input',
                        state: this.state.bodyFat15,
                        id: this.props.location.state
                        }} ><img src={female15} alt="" /></Link>
                <Link to={{
                        pathname: '/input',
                        state: this.state.bodyFat25,
                        id: this.props.location.state
                        }} ><img src={female25} alt="" /></Link>
                
            </div>
        )
    }
}


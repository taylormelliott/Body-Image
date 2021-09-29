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
                <div className='button justify-content-center'>
                    <Link to='/'>Home</Link>
                </div>

                <h1>Pick Your Desired Look</h1>
                

                <div class='d-flex p-2 justify-content-center'>

                    <Link  to={{ 
                            pathname: "/input", 
                            state: this.state.bodyFat12,
                            id: this.props.location.state
                            }} ><div class='bg-image hover-zoom'><img class="img-fluid rounded" src={female12} alt="" /></div></Link>

                    <Link to={{
                            pathname: '/input',
                            state: this.state.bodyFat15,
                            id: this.props.location.state
                            }} ><div class='bg-image hover-zoom'><img class="img-fluid rounded" src={female15} alt="" /></div></Link>
                    <Link to={{
                            pathname: '/input',
                            state: this.state.bodyFat25,
                            id: this.props.location.state
                            }} ><div class='bg-image hover-zoom'><img class="img-fluid rounded" src={female25} alt="" /></div></Link>

                </div>
                
                
                
            </div>
        )
    }
}


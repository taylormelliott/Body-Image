import React, { Component } from 'react'
import male7 from '../../images/male7.png'
import male15 from '../../images/male15.png'
import male25 from '../../images/male25.png'
import { Link } from 'react-router-dom'
import './male.css'



export default class MalePics extends Component {
    constructor() {
        super()

        this.state = {
            bodyFat7: 0.07,
            bodyFat15: 0.15,
            bodyFat25: 0.25
        }
       
        
    }

    //clicked bodyfat needs to be stored on the front end once user is logged in 


    
    render() {
        

        return (
            <div >
                <div className='button justify-content-center'>
                    <Link to='/'>Home</Link>
                </div>
                <h1>Pick Your Desired Look</h1>
                <div class='d-flex p-2 justify-content-center' >

                    <Link   to={{ 
                            pathname: "/input", 
                            state: this.state.bodyFat7,
                            
                            }} > <div class='bg-image hover-zoom'><img  class="img-fluid rounded" src={male7} alt="" /></div></Link>
                    <Link to={{
                            pathname:'/input',
                            state:this.state.bodyFat15,
                            
                            }} ><div class='bg-image hover-zoom'><img class="img-fluid rounded" src={male15} alt="" /></div></Link>
                    <Link to={{
                            pathname: '/input',
                            state: this.state.bodyFat25,
                            
                            }}> <div class='bg-image hover-zoom'><img class="img-fluid rounded" src={male25} alt="" /></div> </Link>

                </div>
                
            </div>
        )
    }
}

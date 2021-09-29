import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            weight_logs: 0,
            body_fat_logs: 0,
            isHidden: true

        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    toggleHidden(){
        this.setState({ isHidden: false })
    }

    handleWeight(e){
        this.setState({ weight_logs: e})

    }

    handleBodyFat(e) {
        this.setState({body_fat_logs: e})
    }

    onSubmit(e) {
        e.preventDefault()
        axios.put(`/results/edit/${this.props.id}`, {
            weight_logs: this.state.weight_logs,
            body_fat_logs: this.state.body_fat_logs

        }
        
            
        )
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

          this.props.hidden()
    }



    render() {
        console.log(this.props.id)
        return (
            <div>
                
                <form  onSubmit = {this.onSubmit}>
                    
                    Weight <input  type="text" onChange={(e) => {this.handleWeight(e.target.value)}} />
                    Body Fat <input  type='text' onChange={(e) => {this.handleBodyFat(e.target.value)}}  />
                    <button>Submit</button>
                </form>
               
               
                
            </div>
        )
    }
}

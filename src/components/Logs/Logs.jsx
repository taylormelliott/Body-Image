import React, { Component } from 'react'
import axios from 'axios';


export default class Logs extends Component {

    constructor() {
        super()

        this.state = {
            weight_logs: 0,
            body_fat_logs: 0,
            isHidden: true
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.toggleHidden = this.toggleHidden.bind(this)
        this.hiddenTrue = this.hiddenTrue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        

    }

    handleWeight(e){
        this.setState({ weight_logs: e})

    }

    handleBodyFat(e) {
        this.setState({body_fat_logs: e})
    }

    toggleHidden() {
        this.setState({ isHidden: false})
    }

    hiddenTrue() {
        this.setState({ isHidden: true})
    }



    handleEdit() {
        axios.put(`/results/${this.props.id}`, {
            weight_logs: this.state.weight_logs,
            body_fat_logs: this.state.body_fat_logs
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
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

          
    }

    

    handleDelete() {
        axios.delete(`/results/${this.props.id}`
            
        )
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    

    

   
    
    render() {
        
        return (
            <div className='card' class="rounded bg-warning mt-3 text-dark">
                <h4>Weight: {this.props.weight} lbs</h4>
                <h4>Body Fat: {this.props.bodyFat * 100}%</h4>
                <h4>{this.props.date}</h4>

                <div class="d-grid gap-2 d-md-block" >
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Stats</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input type="text" className="form-control" placeholder="Edit Weight" onChange={(e) => {this.handleWeight(e.target.value)}}/>
                        <input type="text" className="form-control" placeholder="Edit Body Fat" onChange={(e) => {this.handleBodyFat(e.target.value)}}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick= {this.onSubmit} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                                    
                                    {/* <button  onClick= {this.toggleHidden}>Edit</button>
                                    {!this.state.isHidden && <Edit id = {this.props.id} hidden = {this.hiddenTrue} />} */}

                                    <button type="button" class="btn btn-danger" onClick= {this.handleDelete}>Delete</button>

                </div>

                
                    
                
            </div>
        )
    }
}


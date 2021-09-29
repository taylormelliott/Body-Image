import axios from 'axios'
import React, { Component } from 'react'
import Logs from '../Logs/Logs'
import './loglist.css'

export default class LogList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            logs: []
        }

       
    }

    componentDidMount() {
        axios.get(`/results/${this.props.id}`
            
        )
        .then((response) => {
            this.setState({logs: response.data})
            ;
          }, (error) => {
            console.log(error);
          });
    }

    componentDidUpdate() {

        axios.get(`/results/${this.props.id}`
            
        )
        .then((response) => {
            this.setState({logs: response.data})
            ;
          }, (error) => {
            console.log(error);
          });

    }

     
    render() {
        console.log(this.state.logs)
        
        return (
            <div class="d-flex justify-content-center">
                <div >
                    

                    <div >
                        {this.state.logs.map((element) => {
                            
                           return <Logs key = {element.id} id={element.id} weight = {element.weight_logs} bodyFat = {element.body_fat_logs} date= {element.date_logs} toggleAlert={this.props.toggleAlert} toggleDeleteAlert= {this.props.toggleDeleteAlert} />
                           
                            
                        })}
                    </div>
                    
                    

                </div>
                
            </div>
        )
    }
}

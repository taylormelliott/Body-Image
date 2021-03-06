import React, { Component } from 'react'
import LogList from '../LogList/LogList'
import './input.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Input extends Component {
    constructor() {
        super()

        this.state = {
            weightInput: 0,
            bodyFatInput: 0,
            result: '',
            logs: [],
            showAlert: true, 
            showDeleteAlert: true
            

            
        }
        this.handleForm = this.handleForm.bind(this)
        this.toggleAlert = this.toggleAlert.bind(this)
        this.toggleDeleteAlert = this.toggleDeleteAlert.bind(this)
    }

    //make an axios call to the results table returning everything by user_id
   

    handleWeight(e) {
        this.setState({ weightInput: e})
        


    }

    handleBodyFat(e) {
        this.setState({ bodyFatInput: e})
    }

    handleForm(e) {
        e.preventDefault()

        var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

let newdate = month + "/" + day + "/" + year;



        

        
        let weight = parseFloat(this.state.weightInput)
        let currentBodyFat = parseFloat(this.state.bodyFatInput)
        let goalBodyFat = parseFloat(this.props.location.state)

        function leanBodyMass() {
        const fatMass = weight * currentBodyFat
        const lbm = weight - fatMass
        return lbm

        }

        const lbm = leanBodyMass()

        function goalBodyWeight() {
        const goalWeight = Math.floor(lbm/(1-goalBodyFat))
        return goalWeight

        }

        const goalWeight = goalBodyWeight()

        // console.log(goalBodyWeight())

        function totalFatWeightLost() {
        const fatToLose = weight - goalWeight
        return fatToLose
        }

        const totalFatLost= totalFatWeightLost()
        // console.log(totalFatWeightLost())

        function timeToGoal() {
        
        let weeks = 0

        for (let i = weight; i >= goalWeight; i-= (i * 0.01)){
        weeks++
        
        }
        return weeks
        }

        const weeksToGoal = timeToGoal()


        // console.log(timeToGoal())

        function tdee() {
        const kg = weight * .45
        const bmr = kg * 20
        const thermicFood = bmr * .1
        const exerciseCal = 400
        const nonExerciseCal = 400
        const result = bmr + thermicFood + exerciseCal + nonExerciseCal
        return Math.floor(result - 500)
        
        }

        const totalCals = tdee()

        function bodyFatCalc() {
        return(`You need to eat ${totalCals} calories per day to reach your goal of ${Math.floor(goalBodyFat * 100)}%. Aim to lose 1% of your weight per week. It will take ${weeksToGoal} weeks to achieve your goal. You will weight ${goalWeight}lbs and have lost ${totalFatLost} lbs of fat if no muscle mass was lost or gained in the process. It's common to lose or gain some muscle when cutting calories depending on exercise experience. This result should be taken as best case scenario.`)
        

}
    this.setState({ result: bodyFatCalc()})


    axios.post('/results/add', {
        user_id: this.props.id,
        desired_body_fat: this.props.location.state, 
        weight_logs: this.state.weightInput,
        body_fat_logs: this.state.bodyFatInput,
        date_logs: newdate,
        results: this.state.result
    })
    .then((response) => {
        console.log(this.state.result)
        
      }, (error) => {
        console.log(error);
      });

    }

    toggleAlert() {
        this.setState({ showAlert: !this.state.showAlert})
        setTimeout(() => {this.setState({ showAlert: !this.state.showAlert})}, 3000)
    }

    toggleDeleteAlert() {
        this.setState({ showDeleteAlert: !this.state.showDeleteAlert})
        setTimeout(() => {this.setState({ showDeleteAlert: !this.state.showDeleteAlert})}, 3000)
    }
    
    


    render() {
        console.log(this.props.id)
        return (
            <div className="min-height"  >
                        
                
                <div>
                        
                    
                    

                    <form   onSubmit={this.handleForm}>
                        <div className='button justify-content-center'>
                            <Link to='/'>Home</Link>
                        </div>
                        <div class="mb-3">
                        <p>Sign in to save and log results. Log your results by entering your current weight and body fat</p>
                            <label  class="form-label">Enter current weight</label>
                            <input type="number" class="form-control" onChange={(e) => {this.handleWeight(e.target.value)}}  />
                            
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Enter current body fat as a decimal (Ex. 35% body fat (35/100 = .35)</label>
                            <input type="text" class="form-control" onChange={(e) => {this.handleBodyFat(e.target.value)}} />
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>

                <div class='m-2'>

                {!this.state.showAlert && <div class="alert alert-success" role="alert">
                Changes Saved!
                </div> }

                </div>

                <div class='m-2'>
                    {!this.state.showDeleteAlert && <div class="alert alert-danger" role="alert">
                    Log Deleted!
                    </div> }
                </div>

                

                
                <div className='title-width d-flex justify-content center'>
                <h1>Progress Logs</h1>
                
                </div>
                
                
                <div class='container' >
                
                    <div class='row align-items-center' >
                    
                        <div class='col box-width overflow-scroll'>
                        
                            
                            <LogList id = {this.props.id} toggleAlert = {this.toggleAlert} toggleDeleteAlert = {this.toggleDeleteAlert} />
                        
                        </div>
                        <div class='col' className='result-width'><h1>{this.state.result}</h1></div>
                    </div>
                </div>

                    
                    

                  
                
                
                

            
                
                
                
            </div>
            
        )
    }
}

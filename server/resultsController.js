module.exports = {
    getResultsById:  (req,res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        
         

        db.get_results_by_id([user_id]).then((results) => {
            res.status(200).send(results)
        })
    },
    editResultsById:  (req,res) => {
        const db= req.app.get('db')
        const {id} = req.params
        const {weight_logs, body_fat_logs} = req.body

        db.edit_results_by_id([weight_logs, body_fat_logs, id]).then((results) => {
            res.status(200).send(results)
        })

        
    },
    addResultsById: (req,res) => {
        const db = req.app.get('db')
        const { user_id, desired_body_fat, weight_logs, body_fat_logs, date_logs, results } = req.body

        db.add_results_by_id([user_id, desired_body_fat, weight_logs, body_fat_logs, date_logs, results]).then((response) => {
            res.status(200).send(response)
        })
    },
    deleteResultsById:  (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_results_by_id([id]).then((results) => {
            res.status(200).send(results)
        })
    },
    
}
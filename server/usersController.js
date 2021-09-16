const session = require("express-session")

module.exports = {
    addUser: (req, res) => {
        const db = req.app.get('db')
        const { email, passwords} = req.body

        db.add_user([ email, passwords ]).then((user) => {
            res.status(200).send(user)
        })
    },
    getUserById: (req,res) => {
        const db = req.app.get('db')
        const { id } = req.params
        

        db.get_user_by_id([id]).then((user) => {
            res.status(200).send(user)
        })
    },
    getLogIn: async (req,res) => {
        const db = req.app.get('db')
       const {email, passwords} = req.body
       
        const [valEmail] = await db.validate_email([email])
        const [valPassword] = await db.validate_password([passwords])
        const [valUser] = await db.validate_user([email, passwords])


       //check if email entered exists
    
       if (!valEmail) {
           
       return res.status(404).send('Incorrect Email Entered')
       } 
       //check if passwored entered exists
       if (!valPassword) {
        return res.status(404).send("Incorrect Password Entered")
       }
       //check that email and password are a pair
       if (valUser) {
           req.session.user= valUser
           res.status(200).send(valUser)

       } else {res.status(404).send("No records found")}


    },

    updateGender: (req,res) => {
        const db = req.app.get('db')
        const { gender, id } = req.body
        

        db.update_gender([gender, id]).then((gender) => {
            res.status(200).send(gender)
        })
    },
    // getSession: (req, res) => {
    //     console.log(req.session.user)
    //     console.log(req.session)
    //     if(req.session.user) {
            
    //         return res.status(200).send(req.session)
    //     } else {
    //         res.status(404).send("No session Found")
    //     }
    // }
}
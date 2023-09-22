const mongoose = require('mongoose')

mongoose
    .connect("mongodb://food_ordering_admin:Soumik@ac-fvtds0g-shard-00-00.bmi18of.mongodb.net:27017,ac-fvtds0g-shard-00-01.bmi18of.mongodb.net:27017,ac-fvtds0g-shard-00-02.bmi18of.mongodb.net:27017/?ssl=true&replicaSet=atlas-xb5dzs-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
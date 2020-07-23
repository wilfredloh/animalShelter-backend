const mongoose = require('mongoose')

module.exports = connectDB = async () => {
    try {
        const mongoURI = "mongodb+srv://learning:hateherla@cluster0-dlmch.mongodb.net/reactp1?retryWrites=true&w=majority/animalshelter"
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`DB connected: ${mongoURI}`)
    } catch (err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}
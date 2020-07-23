const mongoose = require('mongoose')

module.exports = connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI
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
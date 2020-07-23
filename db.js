const mongoose = require('mongoose')

module.exports = connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`DB connected: ${process.env.MONGODB_URI}`)
    } catch (err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}
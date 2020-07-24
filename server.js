const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require('./db')
connectDB()

require('./router/routes')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${PORT}`))

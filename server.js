const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect Database
connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send(`API RUNNING`))

// Define ROutes
app.use('/api/users', require('./Routes/API/users'))
app.use('/api/auth', require('./Routes/API/auth'))
app.use('/api/profile', require('./Routes/API/profile'))
app.use('/api/posts', require('./Routes/API/posts'))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// Define ROutes
app.use('/api/users', require('./Routes/API/users'));
app.use('/api/auth', require('./Routes/API/auth'));
app.use('/api/profile', require('./Routes/API/profile'));
app.use('/api/posts', require('./Routes/API/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(expess.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

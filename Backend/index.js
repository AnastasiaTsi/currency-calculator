/**
 * Dependencies
 */
const calc = require('./routes/calc')
const express = require('express');
const cors = require('cors');
const app = express();
const error = require('./middleware/error')

app.use(express.json());
app.use(cors());
app.use('/api/calculator', calc);

app.use(error);

/**
 * Get port from enviroment or use the port 9.000
 */
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
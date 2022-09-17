const express = require('express');
const app = express();
const cors = require ('cors');
const morgan = require('morgan');
//require('dotenv/config');

// Allow http requests from any origin
app.use(cors());    
app.options('*', cors()); 

// Log http requests
app.use(morgan('tiny'));    

// Routes
const responseRoute = require ('./routes/response');
app.use('/response', responseRoute);

// Run the server
app.listen(process.env.PORT, () => {
    console.log('Server is running');
})

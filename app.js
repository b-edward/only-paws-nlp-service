const express = require('express');
const app = express();
const cors = require ('cors');
const cohere = require('cohere-ai');
cohere.init('NB2Eu5tMmeqWJC9PEAt59F5Bm7jAqj6QZYdWOfUI');
const morgan = require('morgan');

// Allow http requests from any origin
app.use(cors());    
app.options('*', cors()); 

// Log http requests
app.use(morgan('tiny'));    

// Routes
const responseRoute = require ('./routes/response');
app.use('/response', responseRoute);

// Run the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

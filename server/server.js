const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');


const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

//shelf endpoints
app.get('/api/shelfs/', controller.getAll);
app.get('/api/shelfs/:shelf_id', controller.getOne);
app.get('/api/shelfs/:shelf_id/:bin_id', controller.getItem);
app.post('/api/shelfs/:shelf_id/:bin_id', controller.addItem);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

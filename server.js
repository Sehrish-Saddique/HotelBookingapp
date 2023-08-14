const express = require('express');
const app = express();
const dbConfig = require('./db');
const roomsRoute = require('../routes/roomsRoute')
const usersRoute = require('../routes/usersRoute')
  
 app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    
  next();
})



app.use(express.json());
app.use('/api/rooms', roomsRoute) 
app.use('/api/users', usersRoute)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}🔥🔥🔥`));

 
module.exports = app;

const express = require('express')
const app = express()
const port=4000
const mongoDB = require('./db');
app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-width, Content-Type,Access"
  );
  next();
})


//require('./models/user');
//require('./routes/authRoutes');


app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(express.json())
app.use('/api/', require('./routes/authRoutes'))
app.use('/api/', require('./routes/DisplayData'))

app.listen(port,  () => {
    console.log(`Server is listening on ${port}`)
})


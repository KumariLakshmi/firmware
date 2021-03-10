const express = require('express');
const graphqlHTTP=require('express-graphql').graphqlHTTP
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const schema=require('./Schema/firmware')
app.use('/deviceType', graphqlHTTP({
    schema,
    graphiql:true
  }))
//   app.get('test',(req,res)=>{
//       console.log("sending sucess");
//   })

app.listen(8070,()=>{
    console.log("port is running successfully");
})
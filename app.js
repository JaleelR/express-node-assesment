const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./ExpressError")
//needed to be able to retrieve req.body
app.use(express.json())


// Find and fix any bugs!
  //find any obvious issues
    //DONE should be using custom error handling, for specific and refined error handling and messages
  //check what the function is doing
    
//test out the function
  //test out in insominia first
  //find issues
    //should return a status code of 201
//fix in code  
  

//You don't need to return await in async functions 
const f = async function (d) {
  return axios.get(`https://api.github.com/users/${d}`);
}

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(req.body.developers.map(f))
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));   
    return res.status(201).send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});


















//For 404 errors(pages not found)
app.use((req, res, next) => {
  const e = new ExpressError("not found", 404);
  next(e);
})


//used for generic errors 
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    Error: err.message
  })
})

app.listen(3000, function () {
  console.log("server starting on port 3000")
});
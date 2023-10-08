const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./ExpressError")

app.use(express.json())

//varible that gets user information
const f = async function (d) {
  return axios.get(`https://api.github.com/users/${d}`);
}

app.post('/', async function (req, res, next) {
  try {
    //resolves array of promises and returns name and bio
    let results = await Promise.all(req.body.developers.map(f))
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.status(201).send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});



















app.use((req, res, next) => {
  const e = new ExpressError("not found", 404);
  next(e);
})



app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    Error: err.message
  })
})

app.listen(3000, function () {
  console.log("server starting on port 3000")
});
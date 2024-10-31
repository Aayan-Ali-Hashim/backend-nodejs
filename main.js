import express from 'express';
const app = express()


app.use(express.urlencoded({extended:false
}))



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // console.log(req.query.name)
  res.send(req.query.search)
  console.log(typeof(req.query.search))
})


app.post('/home', (req, res) => {
  console.log(req.body)
  let email = JSON.stringify(req.body.email)
  let password = JSON.stringify(req.body.password)
  res.send({email,password})
})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});





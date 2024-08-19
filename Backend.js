const express = require('express')
const app = express()


const number = [1,3,7,42,99, 120, 130, 160, 450]
const codingLang =["JavaScript", "Python", "Java", "C++", "Ruby"]
const users = [
    { 
      "name": "Alice", 
      "age": 30, 
      "occupation": "Engineer" 
    },
    { "name": "Bob", 
      "age": 25, 
      "occupation": "Designer" 
    },
    { 
      "name": "Walter", 
      "age": 40, 
      "occupation": "Digital Marketer" 
    },
    { "name": "Jane", 
      "age": 27, 
      "occupation": "Designer" 
    }
]



app.get('/Numbers', function (req, res) {
  console.log(req)

  res.json(number)
})

app.get('/Users', function (req, res) {
  console.log(req)

  res.json(users)
})

app.get('/Code_Lang', function (req, res) {
  console.log(req)

  res.json(codingLang)
})

const PORT = process.env.PORT || 8080
app.listen (PORT, function(){
  console.log("Server is running on PORT",8080)
})
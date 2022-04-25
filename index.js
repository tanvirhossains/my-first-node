const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json()) //module= 64.6

const users = [
    { id: 1, name: "salauddin", email: "salauddin@gmail.com" },
    { id: 2, name: "kahlid", email: "kahlid@gmail.com" },
    { id: 3, name: "ar dugan", email: "ar dugan@gmail.com" },
    { id: 8, name: "imran khan", email: "imran khan@gmail.com" },
    { id: 4, name: "bamsi bay", email: "bamsi bay@gmail.com" },
    { id: 5, name: "salauddin", email: "salauddin@gmail.com" },
    { id: 6, name: "targut", email: "targut@gmail.com" },
    { id: 7, name: "artugul", email: "artugul@gmail.com" },
]

app.get('/', (req, res) => {
    res.send('Look mama!, I can code Node now, still coding but last day i can not !!!')
})

app.get('/users', (req, res) => {
    // console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})


// app.get('/user/:id', (req, res)=>{
//     const id = req.params.id
//     const user = users[id]
//     res.send(user)
// })

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    // const id = req.params.id
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)  //this data found in command promt.
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log('Listening to port', port)
})

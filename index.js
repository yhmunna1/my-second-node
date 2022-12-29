const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!!')
});


const users = [
    { id: 1, name: 'Mehzabenen', email: 'mehu@mail.com', phone: '0123456789' },
    { id: 2, name: 'Safa', email: 'safa@mail.com', phone: '0123456789' },
    { id: 3, name: 'Sadia', email: 'sadia@mail.com', phone: '0123456789' },
    { id: 4, name: 'Tisha', email: 'tisha@mail.com', phone: '0123456789' },
    { id: 5, name: 'Sabila', email: 'sabila@mail.com', phone: '0123456789' },
    { id: 6, name: 'Eva', email: 'eva@mail.com', phone: '0123456789' },
    { id: 7, name: 'Farin', email: 'farin@mail.com', phone: '0123456789' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        // NOTE= Single user: find || Multiple users: filter
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

// Add User:
app.post('/user', (req, res) => {
    // console.log('Request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Port is running', port);
});
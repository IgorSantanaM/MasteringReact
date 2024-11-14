const express = require('express');

const app = express();


// req = params 

// res what is needed to return an answer to the client

const users = ['Igor', 'Anaile', 'Paulo']
app.get('/users/:index', (req, res) => {
    // const nome = req.query.nome;

    // const id = req.params.id;

    const {index} = req.params;

    return res.json(users[index]);
});

app.listen(3000);
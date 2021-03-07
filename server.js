
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.send('hiiiiiiiiiiii')
})



app.listen(port, () => {
    console.log('server is up on port',port);
})


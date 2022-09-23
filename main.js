const blasphemyGenerator = require('./blasphemy-generator');

const express = require('express');
const app = express();
const defaultPort = 3000;

app.get('/blasphemy', (req, res) => res.json({
    blasphemy : blasphemyGenerator.generate(),
    ts : Date.now()
}));

const port = process.env.PORT || defaultPort;
app.listen(port, () => {
    console.log(`Started listening on port ${port}`)
});
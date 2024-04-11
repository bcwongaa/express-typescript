import express from 'express';

const app = express();
const port = process.env.PORT;
if (!port) throw new Error(`port not defined!`);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

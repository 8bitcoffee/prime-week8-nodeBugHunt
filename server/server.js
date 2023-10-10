// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5007;
const quoteRouter = require('./routes/quote.router.js');

// Allow req.body
// Alternative to body parser when using Axios
app.use(express.json());



// ??? Look here for files
app.use(express.static('server/public'));
app.use('/quotes', quoteRouter);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

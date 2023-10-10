# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1

`TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))`

Fixed `quote.router.js` line 38: Added `module.exports = router;`

### Bug 2

`Failed to load resource: the server responded with a status of 404 (Not Found)`

Fixed `index.html` switched order of lines 25:26 adding axious before the javascript

### Bug 3

`GET http://localhost:5007/ 404 (Not Found)`

Fixed `server.js` line 8: Addded file extention to require statement

### Bug 4

`GET http://localhost:5007/ 404 (Not Found)`

Fixed `server.js` line 17: Fixed filepath from `public` to `server/public`

### Bug 5

`GET http://localhost:5007/quotes 404 (Not Found)`

Fixed `quote.router.js` line 8: switch URL `'/quotes'` to `'/'`

### Bug 6

`ReferenceError: quotesList is not defined`

Fixed `quote.router.js` line 21: switch `quotesList` to `quoteList`

### Bug 7

`ReferenceError: getQuote is not defined at client.js:46:9`

Fixed `client.js` line 46: switch `getQuote();` to `getQuotes();`

### Bug 8

`Uncaught ReferenceError: deleteQuotes is not defined`

Fixed `client.js` line 19: switch `<button onClick="deleteQuotes(${i})">Delete</button>` to
    `<button onClick="deleteQuote(${i})">Delete</button>`

### Bug 9

`GET Request made for /quotes ${index}`
Fixed `client.js` line 55: change string indication to backticks from single quotes to use template literal

### Bug 10

No error message but bad practice:

Moved the script sourcing of the javascript and axios out of the body and into the header. No footer was there.

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html

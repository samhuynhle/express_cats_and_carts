const express = require('express');
const app = express();

app.get('/', (request, response)=> {
    response.send("Home page: use /carts1.html, /carts2.html, /form.html")
});

app.use(express.static(__dirname + "/static"));

app.listen(50, ()=> console.log("I'm listening on port 50"));
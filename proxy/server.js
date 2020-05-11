
    var express = require('express');
    const bodyParser = require('body-parser');
    var api = require('./api');
    const env = process.env.NODE_ENV
    console.log(env)

    var app = express();
    app.use(bodyParser.json());
    api.defineApi(app);
   
    app.listen(8081, function () {
    console.log('API is up!')
    });


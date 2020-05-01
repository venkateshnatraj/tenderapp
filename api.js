const axios = require('axios')
const config = require('./config')
module.exports = {
    defineApi: function(app){
      app.get('/api/v1/hello', function (req, res) {
        res.send('Hello');
      });
      app.get('/api/v1/world', function (req, res) {
        res.send('World');
      });
      app.get('/api/v1/commodity', function (req, res) {
        axios.get(`${config.baseApiUrl}commodity.json`).then(resp => {
            res.json(resp.data);
        });
      });
      app.get('/api/v1/getDailyAuction', function (req, res) {
        axios.get(`${config.baseApiUrl}tenderDailyAuction.json`).then(resp => {
            //console.log(resp)
            res.json(resp.data);
        });
      });
    }
}
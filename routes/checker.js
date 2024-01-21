var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/", function (req, res, next) {
  console.log(req.body);
  axios({
    method: "get",
    url:
      "https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_r6iFO9iqUqh97AC0LEjW29BIhwTIE&domainName=" +
      req.body.data +
      "&credits=DA",
  })
    .then(function (response) {
      console.log(response.data);
      res.json(response.data.DomainInfo);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

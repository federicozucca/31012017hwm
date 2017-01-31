var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/new_film_form', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/new_film_form.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"});
})

module.exports = router;
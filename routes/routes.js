var express = require('express');
var actions = require('../methods/actions');

var router = express.Router();

Words = require('../model/words.js')

router.post('/authenticate', actions.authenticate);
router.post('/adduser', actions.addNew);
router.get('/getinfo', actions.getinfo);
router.get('/getu', actions.getu);
router.get('/words', actions.words);
router.post('/add', actions.add);


module.exports = router;

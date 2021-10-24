var express = require('express');
var router = express.Router();

/* GET converter listing. */
router.get('/', function (req, res, next) {
    return res.status(200).json({ "message": "OK" });
});

module.exports = router;

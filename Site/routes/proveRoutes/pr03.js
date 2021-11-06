const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove/pr01', { 
        title: 'Prove 03', 
        path: '/pr01', 
    });
});

module.exports = router;
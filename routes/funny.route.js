const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({"Message": "Funny"});
});

// FNY-1 + API 1: Hehe
router.get('/Hehe', async (req, res) => {
    res.status(200).json({"Message": "Hehe"});
});

module.exports = router;
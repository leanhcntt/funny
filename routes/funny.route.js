const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({"Message": "Funny"});
});

// FNY-1 + API 1: Hehe
router.get('/Hehe', async (req, res) => {
    res.status(200).json({"Message": "Hehe"});
});

// FNY-2 + API 2: Hihi
router.get('/Hihi', async (req, res) => {
    res.status(200).json({"Message": "Hihi"});
});

module.exports = router;

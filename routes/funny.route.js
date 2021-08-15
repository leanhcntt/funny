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

// FNY-5 + API 3: Leuleu
router.get('/Leuleu', async (req, res) => {
    res.status(200).json({"Message": "Leuleu"});
});

module.exports = router;
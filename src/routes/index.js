const { Router } = require('express');
const router     = Router();

router.get('/test', (req, res) => {
    const data = {
        "name" : "Sherlyn",
        "website" : "SherlynWeb.com"
    };
    res.json(data);
});

module.exports = router;
const { Router } = require("express");
const router = Router();


router.get('/', ( req, res) => {
    const data = {
        "name": 'Antonn',
        'website': 'antuansabe'
    };
    res.json(data);
})

module.exports = router ;
__path = process.cwd()

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/ttt', (req, res) => {
    res.sendFile(__path + '/views/tictactoe.php')
})
router.get('/test', (req, res) => {
    res.sendFile(__path + '/views/test.html')
})
router.get('/register', (req, res) => {
    res.sendFile(__path + '/views/register.html')
})



module.exports = router

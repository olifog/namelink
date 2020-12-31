const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.send(200);
});

router.get('/', (req, res) => {
    res.send(req.user);
});

module.exports = router;

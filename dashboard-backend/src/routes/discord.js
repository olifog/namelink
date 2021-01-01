const router = require('express').Router();
const GuildConfig = require('../database/schemas/GuildConfig');

router.get('/guilds', async (req, res) => {
    if (req.user) {
        const userGuilds = req.user.guilds.flatMap(guild => {
            return ((guild.permissions & 0x20) == 0x20) ? [guild.id] : []
        });
        const guilds = await GuildConfig.find({guildId: {$in: userGuilds}});
        res.send(guilds);
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;
const BaseCommand = require('../../utils/structures/BaseCommand');
const GuildConfig = require('../../database/schemas/GuildConfig');

module.exports = class ResetGuildsCommand extends BaseCommand {
  constructor() {
    super('resetguilds', 'main', []);
  }

  async run(client, message, args) {
    await GuildConfig.deleteMany({});
    client.guilds.cache.forEach(async (value) => {
      await GuildConfig.create({
        guildId: value.id,
        name: value.name,
        icon: value.icon,
      });
    })
    await message.channel.send('Reset guild collection');
  }
}
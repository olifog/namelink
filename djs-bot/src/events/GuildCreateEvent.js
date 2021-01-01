// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const GuildConfig = require('../database/schemas/GuildConfig');

module.exports = class GuildCreateEvent extends BaseEvent {
 constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) { 
    await GuildConfig.create({
      guildId: guild.id,
      name: guild.name,
      icon: guild.icon,
    });
  }
}

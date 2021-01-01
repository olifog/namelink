const BaseCommand = require('../../utils/structures/BaseCommand');
const cachegoose = require('cachegoose');

module.exports = class ClearGuildCacheCommand extends BaseCommand {
  constructor() {
    super('clearcache', 'main', []);
  }

  async run(client, message, args) {
    cachegoose.clearCache(args[0]);
    message.channel.send('Cleared guild cache for guild id ' + args[0]);
  }
}
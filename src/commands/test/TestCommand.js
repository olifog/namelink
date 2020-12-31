const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'main', []);
  }

  async run(client, message, args) {
    message.channel.send('Test');
  }
}
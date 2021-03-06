const mongoose = require('mongoose');

const GuildConfigSchema = new mongoose.Schema({
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  icon: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  prefix: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: '>',
  },
  connection: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  nameFormat: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  verifiedRole: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
})

module.exports = mongoose.model('GuildConfig', GuildConfigSchema);
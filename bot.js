const { ShardingManager } = require('discord.js')

const shard = new ShardingManager('./index.js', {

  token: process.env.TOKEN,

  autoSpawn: true,

  totalShards: 5

});

shard.on('shardCreate', shard => console.log(`\n[SHARD] Shard ${shard.id} iniciada\n[BOT] Estou online `));

shard.spawn();

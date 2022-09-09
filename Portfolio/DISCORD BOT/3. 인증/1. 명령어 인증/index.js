const Discord = require('discord.js');
const fs = require("fs");
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	(async function () {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        };
        console.log(client.user.tag)
		console.log(client.user.id)
		console.log('\n봇이 준비 되었습니다.');
    answered1 = true;
    answered2 = true;
    answered3 = true;
    userAnswer1 = "";
    userAnswer2 = "";
    userAnswer3 = "";
        var i = 0;
        while (i < 10) {
            client.user.setPresence({
                activity: {
                    name: '봇을 판매하거나'
                },
                status: 'online'
            })
            await sleep(2000)
			client.user.setPresence({
                activity: {
                    name: '봇을 수정하고 싶다면'
                },
                status: 'online'
            })
            await sleep(2000)
			client.user.setPresence({
                activity: {
                    name: '라이센스를 구매해주세요.'
                },
                status: 'online'
            })
            await sleep(2000)
            client.user.setPresence({
                activity: {
                    name: `Made by WOLF`
                },
                status: 'online'
            })
            await sleep(1000)
        }
    })();
});

client.on('message', async (message) => { 
    if (message.author.bot) return;
  
	if (message.content.startsWith('!인증')) {
		message.delete()
		user = message.author;
        const roleid = '역할id'
        const role = message.guild.roles.cache.get(roleid);
        message.member.roles.add(role);
        var new_embed = new (require('discord.js').MessageEmbed)()
        new_embed.setTitle('인증에 성공했습니다. ')
        new_embed.addField('인증 유저', `${user}`, true)
        new_embed.addField('지급 역할', `${role.name}`, true)
        new_embed.setFooter("Made by WOLF")
        new_embed.setColor("RANDOM")
        message.channel.send(new_embed)
    }
});

client.login(config.token);
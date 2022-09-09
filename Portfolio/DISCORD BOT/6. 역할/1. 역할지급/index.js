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
	 
	if (message.content.startsWith('!역할지급')) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            userAnswers1 = message.mentions.members.first();
            if (!userAnswers1) {
                return message.reply("`!역할지급 [역활]`이 올바른 명령어입니다.")
            };
            const roleid = '역할id'
            const role = message.guild.roles.cache.get(roleid);
            userAnswers1.roles.add(role);
			var add_embed = new (require("discord.js").MessageEmbed)()
			add_embed.setColor('RANDOM')
			add_embed.setTitle("역할 지급기")
			add_embed.setDescription('``지급완료``')
			add_embed.addField('관리자', `${message.author}`, true)
			add_embed.addField('지급유저', `${userAnswers1}`)
			add_embed.addField('지급유저 id', `${message.author.id}`)
			add_embed.addField('지급역할', `${role}`, true)
            message.channel.send(add_embed)
        }
        else
        {
            message.channel.send("당신은 권한이 없습니다.")
        }
    }
});

client.login(config.token);
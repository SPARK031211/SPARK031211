const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const moment = require("moment");
require("moment-duration-format");
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
  
	if (message.content.startsWith('!처벌')) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`${message.author} 님은 해당 명령어를 쓸 권한이 없습니다.`)
        };
		
        const user = message.mentions.members.first();
        if (!user) return message.reply("처벌할 유저를 멘션하세요.");
		
		const text = message.content.split(' ').slice(2).join(' ');
        if (!text) return message.reply("처벌사유를 작성해주세요.");
		
		const channel1 = message.channel
		
		var d = new Date();
        var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
        var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
        var u_a = user.user.avatarURL({ format: 'png', dynamic: true, size: 1024 });
        var u_u = user.user.username;
        var u_d = `#${user.user.discriminator}`;
        var u_i = user.user.id;
        var u_p = user.user.presence.status;
        var u_c = moment.utc(message.guild.members.cache.get(user.user.id).user.createdAt).format("YYYY년 M월 D일");
        var u_j = moment.utc(message.guild.members.cache.get(user.user.id).user.joinedAt).format("YYYY년 M월 D일");
        var u_t = `${currentData + currentTime}`;

        var ban_embed = new (require("discord.js").MessageEmbed)()
        ban_embed.setColor('RANDOM')
		ban_embed.setTitle(`[${message.guild.name}] 차단 알림`)
        ban_embed.setDescription(`차단 대상: ${user}`)
        ban_embed.setThumbnail(u_a)
        ban_embed.addField(`닉네임`, '```' + u_u + '```', true)
        ban_embed.addField(`태그`, '```' + u_u + u_d + '```', true)
        ban_embed.addField(`아이디`, '```' + u_i + '```')
        ban_embed.addField(`사유`, '```' + `${text}` + '```')
        ban_embed.addField(`가입한 날`, '```' + u_c + '```', true)
        ban_embed.addField(`들어온 날`, '```' + u_j + '```', true)
        ban_embed.setFooter("처리 날짜 " + u_t)
        message.channel.send(ban_embed);
		user.ban(user)
    } 
});

client.login(config.token);
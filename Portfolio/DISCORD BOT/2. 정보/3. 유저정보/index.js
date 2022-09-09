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

	
    if (message.content.startsWith('!정보')) {
        var d = new Date();
        var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
        var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
        var user = message.author;
        var u_a = user.avatarURL({ format: 'png', dynamic: true, size: 1024 });
        var u_u = user.username;
        var u_d = `#${user.discriminator}`;
        var u_i = user.id;
        var u_p = user.presence.status;
        var u_c = moment.utc(message.guild.members.cache.get(user.id).user.createdAt).format("YYYY년, M월 D일");
        var u_j = moment.utc(message.guild.members.cache.get(user.id).user.joinedAt).format("YYYY년, M월 D일");
        var u_t = `${currentData + currentTime}`;

        var userdate_embed = new (require("discord.js").MessageEmbed)()
        userdate_embed.setColor('RANDOM')
        userdate_embed.setDescription("**멘션 " + `${message.author}` + "**")
        userdate_embed.setThumbnail(u_a)
		userdate_embed.addField('** **', "**```이름: " + u_u + u_d + "```**", true)
        userdate_embed.addField('** **', "**```닉네임: " + u_u + "```**", true)
        userdate_embed.addField('** **', "**```태그: " + u_d + "```**", true)
        userdate_embed.addField('** **', "**```아이디: " + u_i + "```**")
        userdate_embed.addField('** **', "**```가입한 날: " + u_c + "```**", true)
        userdate_embed.addField('** **', "**```들어온 날: " + u_j + "```**", true)
        message.channel.send(userdate_embed)
	}
});

client.login(config.token);
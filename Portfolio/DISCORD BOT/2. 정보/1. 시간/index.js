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

	
    if (message.content.startsWith('!시계')) {
		var d = new Date();
		var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
        var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
		var time_embed = new (require('discord.js').MessageEmbed)()
		time_embed.setTitle('**[한국 서울 기준] 현재 시간**')       
		time_embed.addField('현재 날짜', "**```" + `${currentData}` + "```**")
		time_embed.addField('현재 시간', "**```" + `${currentTime}` + "```**")
		time_embed.setFooter("Made by WOLF")
		time_embed.setImage("https://i.imgur.com/6cefZxW.png")
		time_embed.setColor("RANDOM")
		message.channel.send(time_embed)
    }
});

client.login(config.token);
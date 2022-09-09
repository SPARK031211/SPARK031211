const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
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
	 	
	if (message.content.startsWith("!청소하기")) {
		if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("``명령어를 수행시킬 만큼의 권한을 소지하고 있지 않습니다.``");
		
		const gch = message.mentions.channels.first();
        if (!gch) return message.reply("메시지 청소를 하고싶은 채널을 멘션해주세요.");

		const text = message.content.split(' ').slice(2).join(' ');
        if (!text) return message.reply("1 ~ 100 중으로 입력해주세요.");
		if (text > 100) {

            }
        if (text < 1) {

            }
		
		const { guild } = message
		const { name } = guild
		const icon = guild.iconURL()
		
		gch.bulkDelete(text)
		var clener_embed = new (require("discord.js").MessageEmbed)()
			clener_embed.setTitle(`${name} 청소기`)
			clener_embed.setDescription("> **삭제한 관리자: " + `${message.author}` + "**\r" + "> **삭제한 수: " + `${text}` +"**\r" + "> **청소된 채널: " + `${gch}` +"**")
			clener_embed.addField('** **', "> **```삭제한 관리자: " + `${message.author.tag}` + "```**")
			clener_embed.addField('** **', "> **```청소된 채널: " + `${gch.name}` + "```**")
            clener_embed.addField('** **', "> **```삭제된 수: " + `${text}` + "```**")
            clener_embed.setColor("RANDOM")
			clener_embed.setThumbnail(icon)
            gch.send(clener_embed)
	}
});

client.login(config.token);
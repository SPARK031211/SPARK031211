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

	if (message.content.startsWith("!정보")) {
		const { guild } = message
		const botCount = message.guild.members.cache.filter(m => m.user.bot).size
		const { name, region, memberCount, owner } = guild
		const icon = guild.iconURL()
		const userconut = memberCount - botCount
		
		const embed = new Discord.MessageEmbed()
			.setTitle("**```" + `서버이름 : ${name}` + "```**")
			.setThumbnail(icon)
			.setColor("RANDOM")
			.addFields(
        {
          name: '사용 언어',
          value: "**```" + region + "```**",
		  inline: true,
        },
		{
          name: '서버 주인',
          value: "**```" + owner.user.tag + "```**",
		  inline: true,
        } ,
		{
          name: '** **',
          value: "** **",
        },
        {
          name: '모든유저',
          value: "**```" + memberCount + "```**",
		  inline: true,
        },
		{
          name: '유저',
          value: "**```" + userconut + "```**",
		  inline: true,
        },
		{
          name: '봇',
          value: "**```" + botCount + "```**",
		  inline: true,
        }
      )
	  message.channel.send(embed)
	}
});

client.login(config.token);
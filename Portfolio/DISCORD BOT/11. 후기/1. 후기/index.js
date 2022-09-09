const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const fs = require("fs");
const config = require('./config.json');
const whogi = require("./whogi.json");
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
	
	if (message.content.startsWith("!후기")) {
        const user = message.mentions.members.first();
        if (!user) return message.reply("후기를 남길유저를 멘션하세요.");
		
		const text = message.content.split(' ').slice(2).join(' ');
        if (!text) return message.reply("후기내용을 입력해주세요.");
		
		const wgmsg = '님에게 등록된 후기는 __총'
		
        if (!whogi[user]) whogi[user] = {
		msg: '님에게 등록된 후기는 **__총 ',
		whogi: 0,
		msge: '개__** 입니다.'
		};

        if (!whogi[user]) whogi[user] = {
			msg: '님에게 등록된 후기는 __총 ',
            whogi: 1,
			msge: '개__** 입니다.'
        };

        whogi[user].whogi +=+ 1;
        fs.writeFile("./whogi.json", JSON.stringify(whogi), (err) => {
            if(err) console.log(err);
        });

        var whogi1_embed = new (require("discord.js").MessageEmbed)()
        whogi1_embed.setDescription(`** ${message.author}님이 ${user}에게 후기를 남겼습니다. 후기 감사합니다 ! **`)
		whogi1_embed.addFields(
		{ name: '** **', value: `** '`+ `** ${text} **` + `' **`},
		{ name: '** **', value: `** [현재 ${user}님의 후기 개수 총 ${whogi[user].whogi}개] **`, inline: true },
	)
        whogi1_embed.setColor("RANDOM")
        message.channel.send(whogi1_embed)
	}	
	
	const d = new Date();
    const currentData = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
	
	if (message.content.startsWith(`${currentData}`)) {
        if(!whogi[1]) whogi[1] = {
            whogi: 0
        };

        fs.readFile("./whogi.json", JSON, function(err, contents) {
            var Price1 = contents.toString().replace(/{/gi,"");
            var Price2 = Price1.replace(/}/gi,"\n");
            var Price3 = Price2.replace(/,/gi,"");
            var Price4 = Price3.replace(/:/gi,"");
            var Price5 = Price4.replace(/"/gi,"");
            var Price6 = Price5.replace(/whogi/gi," ");
			var Price7 = Price6.replace(/msg/gi," ");
			var Price8 = Price7.replace(/msge/gi," ");
			var Price9 = Price8.replace(/e/gi," ");
			var Price10 = Price9.replace(/1 0/gi," ");

            var whogi2_embed = new (require("discord.js").MessageEmbed)()
            whogi2_embed.setDescription(`${Price10}`)
            whogi2_embed.setColor("RANDOM")
            message.channel.send(whogi2_embed)

            if(err) console.log(err);
        });	
	}
});

client.login(config.token);
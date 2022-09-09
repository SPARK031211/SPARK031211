const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const fs = require("fs");
const config = require('./config.json');
const black = require("./black.json");
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
	
	if (message.content.startsWith(prefix + "블랙추가")) {
        const user = message.mentions.members.first();
        if (!user) return message.reply("유저를 멘션하세요.");

        const text = message.content.split(' ').slice(2).join(' ');
        if (!text) return message.reply("사유를 작성해주세요.");
		
        const role = message.guild.roles.cache.get('블랙리스트 역할id');
        user.roles.add(role);
		
		const type = 'O'
		const type2 = 'X'
		
		if(!black[user.id]) black[user.id] = {
            black: type2
        };
		
		if(!black[user.id]) black[user.id] = {
            black: type
        };

        black[user.id].black = type;
        fs.writeFile("./black.json", JSON.stringify(black), (err) => {
            if(err) console.log(err);
        });

        var black1_embed = new (require("discord.js").MessageEmbed)()
        black1_embed.setDescription(`${user} 님이 블랙리스트에 추가 되었습니다. 사유는 로그 채널에서 확인해 주세요.`)
        black1_embed.setColor("RANDOM")
        message.channel.send(black1_embed)

        var money2_embed = new (require("discord.js").MessageEmbed)()
        money2_embed.setDescription(`${user} 님이 블랙리스트에 추가 되었습니다. 블랙리스트 등록이유: ${text}`)
        money2_embed.setColor("RANDOM")
        client.channels.cache.get("로그 채널id").send(money2_embed)
	}
	
	if (message.content.startsWith(prefix + "블랙해제")) {
        const user = message.mentions.members.first();
        if (!user) return message.reply("유저를 멘션하세요.");
		
        const role = message.guild.roles.cache.get('블랙리스트 역할id');
        user.roles.remove(role);
		
		const type = 'O'
		const type2 = 'X'
		
		if(!black[user.id]) black[user.id] = {
            black: type2
        };

        black[user.id].black = type2;
        fs.writeFile("./black.json", JSON.stringify(black), (err) => {
            if(err) console.log(err);
        });

        var black1_embed = new (require("discord.js").MessageEmbed)()
        black1_embed.setDescription(`${user} 님이 블랙리스트에서 해제 되었습니다.`)
        black1_embed.setColor("RANDOM")
        message.channel.send(black1_embed)

        var black2_embed = new (require("discord.js").MessageEmbed)()
        black2_embed.setDescription(`${user} 님이 블랙리스트에서 해제 되었습니다.`)
        black2_embed.setColor("RANDOM")
        client.channels.cache.get("로그 채널id").send(black2_embed)	
	}
	
	if (message.content.startsWith("!블랙조회")) {
		const user = message.mentions.members.first();
        if (!user) return message.reply("유저를 멘션하세요.");
		
		if(!black[user.id]) black[user.id] = {
        };
		
		const type = 'O'
		const type2 = 'X'
		
		fs.readFile("./black.json", JSON, function(err, contents) {
            if(err) console.log(err);
        });

        var black2_embed = new (require("discord.js").MessageEmbed)()
        black2_embed.setDescription(`${user}님의 블랙리스트 상태는 ${black[user.id].black}입니다.`)
		black2_embed.setFooter("O가 나오면 블랙리스트가 맞습니다. | X가 나오면 블랙리스트가 아닙니다 | 만약등록이 안되있어 영어단어가 뜨면 블랙리스트가 아닙니다..")
        black2_embed.setColor("RANDOM")
        message.channel.send(black2_embed)
	}
});

client.login(config.token);
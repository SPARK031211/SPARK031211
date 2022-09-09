const Discord = require('discord.js');
const fs = require("fs");
const config = require('./config.json');
const lv = require('./level.json');
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
	
	if (!lv[message.author]) lv[message.author] = {
		msg: '경험치 ',
        xp: 0,
		msge: '레벨 ',
        level: 0
      };
    lv[message.author].xp++;
    let userInfo = lv[message.author];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
	    var whogi1_embed = new (require("discord.js").MessageEmbed)()
		whogi1_embed.addFields('** **', '**```축하합니다. ' + `${message.author}` + '님의 레벨은 ' + `${userInfo.level}` + '입니다.' + '```**')
        whogi1_embed.setColor("RANDOM")
        message.channel.send(whogi1_embed)
    }
	
	fs.writeFile("./level.json", JSON.stringify(lv), (x) => {
        if (x) console.error(x)
    });

	if (message.content.startsWith("!랭크")) {
        fs.readFile("./level.json", JSON, function(err, contents) {
            var Price1 = contents.toString().replace(/{/gi,"");
            var Price2 = Price1.replace(/}/gi,"\n");
            var Price3 = Price2.replace(/,/gi,"");
            var Price4 = Price3.replace(/:/gi,"");
            var Price5 = Price4.replace(/"/gi,"");
            var Price6 = Price5.replace(/whogi/gi," ");
			var Price7 = Price6.replace(/msg/gi," ");
			var Price8 = Price7.replace(/msge/gi," ");
			var Price9 = Price8.replace(/e/gi," ");
			var Price10 = Price9.replace(/xp/gi," ");
			var Price11 = Price10.replace(/level/gi," ");
			var Price12 = Price11.replace(/levelup/gi," ");
			var Price13 = Price12.replace(/v/gi," ");
			var Price14 = Price13.replace(/lup0l/gi," ");
			var Price15 = Price14.replace(/l l/gi," ");

            var levels_embed = new (require("discord.js").MessageEmbed)()
            levels_embed.setDescription(`${Price15}`)
            levels_embed.setColor("RANDOM")
            message.channel.send(levels_embed)

            if(err) console.log(err);
        });	
	}
});

client.login(config.token);
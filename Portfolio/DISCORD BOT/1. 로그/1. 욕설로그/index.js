const Discord = require('discord.js');
const fs = require("fs");
const config = require('./config.json');
const client = new Discord.Client();
const words1 = ('욕설1'); //여기에 욕설을 적어주세요
const words2 = ('욕설2'); //여기에 욕설을 적어주세요
const words3 = ('욕설3'); //여기에 욕설을 적어주세요
const words4 = ('욕설4'); //여기에 욕설을 적어주세요
const words5 = ('욕설5'); //여기에 욕설을 적어주세요
const words6 = ('욕설6'); //여기에 욕설을 적어주세요
const words7 = ('욕설7'); //여기에 욕설을 적어주세요
const words8 = ('욕설8'); //여기에 욕설을 적어주세요
const words9 = ('욕설9'); //여기에 욕설을 적어주세요
const words10 = ('욕설10'); //여기에 욕설을 적어주세요
//토큰은 config.json에서 우클릭후 노트패드++ 또는 비쥬얼 스튜디오 코드에서 수정해주세요. 

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
	
	if (message.content.startsWith(words1) || message.content.startsWith(words2) || message.content.startsWith(words3) || message.content.startsWith(words4) || message.content.startsWith(words5) || message.content.startsWith(words6) || message.content.startsWith(words7) || message.content.startsWith(words8) || message.content.startsWith(words9) || message.content.startsWith(words10)) {
        message.delete()
		var d = new Date();
        var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
        var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
		var fuck_embed = new (require('discord.js').MessageEmbed)()
        fuck_embed.setTitle('욕설 탐지기')
	    fuck_embed.setDescription('``욕설이 감지됨``')
	    fuck_embed.addField('감지된 유저', `<@${message.author.id}>`, true)
		fuck_embed.addField('메시지 채널', message.channel, true)
		fuck_embed.addField('걸린 시간', `${currentData + currentTime}`, true)
        fuck_embed.addField('경고 메시지', `욕설이 많이 감지되었으면 제재를 당할수 있습니다.`)
	    fuck_embed.setFooter("Made by WOLF")
        fuck_embed.setColor("RANDOM")
        message.channel.send(fuck_embed)
		try {
			var d = new Date();
            var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
            var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
            var fuck1_embed = new (require("discord.js").MessageEmbed)()
            fuck1_embed.setTitle('욕설 탐지기')
	        fuck1_embed.setDescription('``욕설이 감지됨``')
			fuck1_embed.addField('감지된 유저', `<@${message.author.id}>`, true)
		    fuck1_embed.addField('메시지 채널', message.channel, true)
            fuck1_embed.addField('걸린 시간', `${currentData + currentTime}`, true)
			fuck1_embed.addField('지워진 메시지', message.content)
            fuck1_embed.setFooter("Made by WOLF")
			fuck1_embed.setColor("RANDOM")
            client.channels.cache.get('로그 채널id').send(fuck1_embed)
        } catch (err) {
            message.channel.send("오류가 발생했습니다.\n`" + err + "`")
        }
	}

});

client.login(config.token)
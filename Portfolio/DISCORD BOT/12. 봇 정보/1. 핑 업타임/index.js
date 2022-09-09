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
	 
	if (message.content.startsWith('!핑')) {
        String.prototype.toHHMMSS = function () {
            var sec_num = parseInt(this, 10);
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var time = hours + '시간 ' + minutes + '분 ' + seconds + '초'; 
            return time;
        }
        var time = process.uptime();
        var uptime = (time + "").toHHMMSS();
		var ping_embed = new (require('discord.js').MessageEmbed)()
        ping_embed.setTitle("핑 췍")
        ping_embed.addField('핑 ', '' + Math.floor(client.ws.ping) + 'ms')
		ping_embed.addField('업 타임', '' + uptime +"")
        ping_embed.setColor("RANDOM")
        message.channel.send(ping_embed)
    }
});

client.login(config.token);
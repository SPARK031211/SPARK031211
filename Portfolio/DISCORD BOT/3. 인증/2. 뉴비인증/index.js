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

	if (answered3 == false) {
        if (noticeM == message.author.id) {
            if (noticeC == message.channel.id) {
                userAnswer3 = message;
				const role = message.guild.roles.cache.get("역할id");
				message.member.roles.add(role);
                message.reply(`인증신청서를 작성했습니다.`)
                var notice_embed = new (require("discord.js").MessageEmbed)()
                notice_embed.setAuthor("신청서 작성로그")
                notice_embed.setTitle(userAnswer2) 
                notice_embed.setDescription(userAnswer3)
				notice_embed.addField('작성자', `<@${message.author.id}>`)
                notice_embed.setFooter("Made by Team.ManDu")
                notice_embed.setColor("#78DA8D")
                let channel1 = client.channels.cache.get(`${userAnswer1}`);
                channel1.send(notice_embed);
                answered3 = true; userAnswer1 = ""; userAnswer2 = ""; userAnswer3 = "";
            } else {
                return;
            }
        } else {
            return;
        }
    }

    if (answered2 == false) {
        if (noticeM == message.author.id) {
            if (noticeC == message.channel.id) {
                userAnswer2 = message;
                message.reply("관리자 또는 뉴비도우미를 맨션해주세요")
                answered2 = true; answered3 = false;
            } else {
                return;
            }
        } else {
            return;
        }
    }

    if (answered1 == false) {
        if (noticeM == message.author.id) {
            if (noticeC == message.channel.id) {
                userAnswer1 = message;
                message.reply("신청서를 작성해주세요.")
				var new_embed = new (require('discord.js').MessageEmbed)()
				new_embed.setTitle(' -뉴비 인증 신청서- ')
				new_embed.setDescription('``작성해주세요.``')
				new_embed.addField('1', '닉네임 : [이곳에 입력해주세요]')
				new_embed.addField('2', '타서버 플레이경험이 있다면 서버 이름을 적어주세요. : [이곳에 입력해주세요]')
				new_embed.addField('3', '가입된 디스코드 서버 이름을 알려주세요. : [이곳에 입력해주세요]')
				new_embed.addField('4', '개인정보 및 IP 수집을 동의합니다. [O/X] : [이곳에 입력해주세요]')
				new_embed.addField('5', '스태프의 뉴비교육을 받을것을 동의합니다.(스태프의 뉴비교육을 거절한다면 서버플레이가 불가능합니다.) [O/X] : [이곳에 입력해주세요]')
				new_embed.addField('6', '가입된 모든 디스코드 사진을 찍어 올려주세요.')
				new_embed.addField('7', '디스코드 별명을 고유번호ㅣ닉네임ㅣ직업 으로 변경해주세요.')
				new_embed.addField('주의', '아래의 사진을 보고 작성해주세요')
				new_embed.setImage('https://i.imgur.com/keWPNlb.png')
				new_embed.setFooter("Made by Team.ManDu")
				new_embed.setColor("#fc6400")
				message.channel.send(new_embed)
                answered1 = true; answered2 = false;
            } else {
                return;
            }
        } else {
            return;
        }
    }
    
    if (message.content === '!뉴비인증') {            
            noticeM = message.author.id;
            noticeC = message.channel.id;
            message.reply('채널id 복사해서 입력해주세요.') //채널id만 지우고 붙혀넣어 주세요.
            answered1 = false;
        } else {
            message.reply('당신은 권한이 없습니다.')    }

});

client.login(config.token);
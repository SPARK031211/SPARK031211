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
	 	
	if (message.content.startsWith('!뉴비교육')) {
		message.delete()
            var args = message.mentions.members.first();
            if (!args) {
            return message.reply("`!뉴비교육 [멘션]`이 올바른 명령어 입니다.")
        } else {
            let filter = (reaction, user) => (reaction.emoji.name === '⭕' || reaction.emoji.name === '❌') && user.id === message.author.id;
            
			var newbe_embed = new (require("discord.js").MessageEmbed)()
            newbe_embed.setColor('RANDOM')
            newbe_embed.setTitle('서버봇으로 부터 온 DM을 확인해주세요!')
			message.channel.send(newbe_embed)
			
            var newbe0_embed = new (require("discord.js").MessageEmbed)()
            newbe0_embed.setColor('RANDOM')
            newbe0_embed.setTitle('서버에 대해서 알고 계시나요?')
            
            message.author.send(newbe0_embed).then(msg => {
                msg.react('⭕');
                msg.react('❌');

                msg.awaitReactions(filter, {
                    max: 1
                }).then(collected => {
                    const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '⭕':
                            try {
							var newbe1_embed = new (require("discord.js").MessageEmbed)()
                            newbe1_embed.setColor('RANDOM')
                            newbe1_embed.setTitle("지금부터 RP를 설명 하겠습니다.")
                            message.author.send(newbe1_embed)
							
                            var newbe2_embed = new (require("discord.js").MessageEmbed)()
                            newbe2_embed.setColor('RANDOM')
                            newbe2_embed.setTitle("RP 란?")
							newbe2_embed.addField('RP 란?', `현실에서 가능한 일입니다`)
                            newbe2_embed.addField('예시1', `교통법규를 지키며 운전을 한다`)
							newbe2_embed.addField('예시2', `음식을 먹는다`)
							newbe2_embed.addField('예시3', `자동차를 구매한다`)
                            message.author.send(newbe2_embed)
							
							var newbe3_embed = new (require("discord.js").MessageEmbed)()
                            newbe3_embed.setColor('RANDOM')
                            newbe3_embed.setTitle("Non RP 란")
							newbe3_embed.addField('Non RP 란?', `현실에서 불가능한 일입니다.`)
                            newbe3_embed.addField('예시1', `혼수상태 일때 진통제를 먹고 살아난다`)
							newbe3_embed.addField('예시2', `죽은후 뉴 라이브 생활을 시작하였지만 전생을 기억하는 것`)
							newbe3_embed.addField('예시3', `잠겨있는 문을 통과하고 다니는 것`)
                            message.author.send(newbe3_embed)
							
							var newbe4_embed = new (require("discord.js").MessageEmbed)()
                            newbe4_embed.setColor('RANDOM')
                            newbe4_embed.setTitle("배드 RP 란?")
							newbe4_embed.addField('배드 RP 란?', `무언가 모순되거나 혹은 잘못된 행동을 하는 것`)
                            newbe4_embed.addField('예시1', `무차별 살인`)
							newbe4_embed.addField('예시2', `한 사람을 지속적으로 살인하는 행위`)
							newbe4_embed.addField('예시3', `욕설, 서버, 유저, 관리자 등을 비하 하는 것`)
                            message.author.send(newbe4_embed)
							
							var newbe5_embed = new (require("discord.js").MessageEmbed)()
                            newbe5_embed.setColor('RANDOM')
                            newbe5_embed.setTitle("모든 뉴비교육을 완료 했습니다.")
                            message.author.send(newbe5_embed)
						
                            break;
							} catch (err) {
                                message.author.send("오류가 발생했습니다.\n`" + err + "`")
                            }
                            break;
                        case '❌':
                            try {
                            var newbe6_embed = new (require("discord.js").MessageEmbed)()
                            newbe6_embed.setColor('RANDOM')
                            newbe6_embed.setTitle("지금부터 서버와 RP를 설명 하겠습니다.")
                            message.author.send(newbe6_embed)
							
							var newbe8_embed = new (require("discord.js").MessageEmbed)()
                            newbe8_embed.setColor('RANDOM')
                            newbe8_embed.setTitle("~~서버 란?")
							newbe8_embed.addField('서버이름', `~~~서버`)
                            newbe8_embed.addField('서버규칙', `~~~~이다`)
							newbe8_embed.addField('제재되는 경우', `Non RP, 배드 RP 등을 하였을때 제재를 당할수 있습니다. `)
                            message.author.send(newbe8_embed)
							
							var newbe8_embed = new (require("discord.js").MessageEmbed)()
                            newbe8_embed.setColor('RANDOM')
                            newbe8_embed.setTitle("RP란")
							newbe8_embed.addField('RP 란?', `현실에서 가능한 일입니다`)
                            newbe8_embed.addField('예시1', `교통법규를 지키며 운전을 한다`)
							newbe8_embed.addField('예시2', `음식을 먹는다`)
							newbe8_embed.addField('예시3', `자동차를 구매한다`)
                            message.author.send(newbe8_embed)
							
							var newbe9_embed = new (require("discord.js").MessageEmbed)()
                            newbe9_embed.setColor('RANDOM')
                            newbe9_embed.setTitle("Non RP 란")
							newbe9_embed.addField('Non RP 란?', `현실에서 불가능한 일입니다.`)
                            newbe9_embed.addField('예시1', `혼수상태 일때 진통제를 먹고 살아난다`)
							newbe9_embed.addField('예시2', `죽은후 뉴 라이브 생활을 시작하였지만 전생을 기억하는 것`)
							newbe9_embed.addField('예시3', `잠겨있는 문을 통과하고 다니는 것`)
                            message.author.send(newbe9_embed)
							
							var newbe10_embed = new (require("discord.js").MessageEmbed)()
                            newbe10_embed.setColor('RANDOM')
                            newbe10_embed.setTitle("배드 RP 란")
							newbe10_embed.addField('배드 RP 란?', `무언가 모순되거나 혹은 잘못된 행동을 하는 것`)
                            newbe10_embed.addField('예시1', `무차별 살인`)
							newbe10_embed.addField('예시2', `한 사람을 지속적으로 살인하는 행위`)
							newbe10_embed.addField('예시3', `욕설, 서버, 유저, 관리자 등을 비하 하는 것`)
                            message.author.send(newbe10_embed)
							
							var newbe11_embed = new (require("discord.js").MessageEmbed)()
                            newbe11_embed.setColor('RANDOM')
                            newbe11_embed.setTitle("모든 뉴비교육을 완료 했습니다.")
                            message.author.send(newbe11_embed)
                            break;
                            } catch (err) {
                                message.author.send("오류가 발생했습니다.\n`" + err + "`")
                            }
                            break;
                    }
                }).catch(collected => {
                    
                });

            });
        }
    }
});

client.login(config.token);
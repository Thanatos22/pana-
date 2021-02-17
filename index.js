const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { help } = require('./src/help')
const { dono } = require('./src/dono')
const { thanatosmenu } = require('./src/thanatosmenu')
const { menuadmin } = require('./src/menuadmin')
const { mkmenu } = require('./src/mkmenu')
const { gp } = require('./src/gp')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Lorran totoso\n' 
            + 'ORG: Pengembang XBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=553192271279:+55 31 92271279\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '.'
limitawal = 30
memberlimit = 0
cr = '*BOT INI SUDAH TERVERIFIKASI*'
/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["553192271279@s.whatsapp.net","553175420006@s.whatsapp.net"] 
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        } 
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		}
		
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Coe @${num.split('@')[0]}\ sou o ${me.name}\n e seja bem vindo ao grupo *${mdata.subject}* lembre-se de ler a desgraça das regras`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau macaco @${num.split('@')[0]} 🐒`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})


	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBadWord = isGroup ? badword.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
			expiredCheck()
			
			//function rank 
			const levelRole = getLevelingLevel(sender, _level)
   	     var role = 'Gadinho'
        if (levelRole <= 3) {
            role = 'Gado'
        } else if (levelRole <= 5) {
            role = 'Super gado'
        } else if (levelRole <= 7) {
            role = 'Gadão II'
        } else if (levelRole <= 9) {
            role = 'Gadão I'
        } else if (levelRole <= 10) {
            role = 'Hyper mega gado'
        } else if (levelRole <= 11) {
            role = 'Miquinho fofo'
        } else if (levelRole <= 12) {
            role = 'Miquinho'
        } else if (levelRole <= 13) {
            role = 'Macaco'
        } else if (levelRole <= 14) {
            role = 'Macaco desgraçado'
        } else if (levelRole <= 16) {
            role = 'Kong'
        } else if (levelRole <= 17) {
            role = 'Macaco 𝑇𝐻𝐴𝑁𝐴𝑇𝑂𝑆'
        } else if (levelRole <= 19) {
            role = 'Membro a of painel'
        } else if (levelRole <= 20) {
            role = 'Membro da MCBR'
        } else if (levelRole <= 21) {
            role = 'Membro da gst 😡'
        } else if (levelRole <= 22) {
            role = 'Membro da pain'
        } else if (levelRole <= 24) {
            role = 'Membro da TBF 😍😍'
        } else if (levelRole <= 25) {
            role = 'Comedor de casada'
        } else if (levelRole <= 26) {
            role = 'Preto'
        } else if (levelRole <= 27) {
            role = 'Mega pretão'
        } else if (levelRole <= 30) {
            role = 'Asfalto 😍'
        } else if (levelRole <= 33) {
            role = 'Putinha da TRD'
        } else if (levelRole <= 37) {
            role = 'Puta da TRD'
        } else if (levelRole <= 41) {
            role = 'Puta gostosa da TRD'
        } else if (levelRole <= 46) {
            role = 'Gasosa'
        } else if (levelRole <= 52) {
            role = 'Gostosa'
        } else if (levelRole <= 59) {
            role = 'Gostosa do caralho'
        } else if (levelRole <= 67) {
            role = 'Super corno'
        } else if (levelRole <= 76) {
            role = 'Mega corno'
        } else if (levelRole <= 86) {
            role = 'Hyper corno'
        } else if (levelRole <= 97) {
            role = 'Jogador de ff'
        } else if (levelRole <= 109) {
            role = 'The doctor'
        } else if (levelRole <= 122) {
            role = 'The plague'
        } else if (levelRole <= 132) {
            role = 'The best'
        } else if (levelRole <= 137) {
            role = 'Brabo dos brabos'
        } else if (levelRole <= 142) {
            role = 'Hyper mega PRETO'
        } else if (levelRole <= 147) {
            role = 'Mini Xmod 🐶'
        } else if (levelRole <= 148) {
            role = 'Mini Beibe 🦈'
        } else if (levelRole <= 149) {
            role = 'Mini Mcp 🥖'
        } else if (levelRole <= 150) {
            role = 'Mini 𝑇𝐻𝐴𝑁𝐴𝑇𝑂𝑆 🦧'
        }
   
			var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}
				
				
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(1.5, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Macaco vou ser bem direto com tu, seu limite de comandos acabou\n\n_Note : c pode conseguir mais limite por meio de ${prefix}buylimit ou subindo de nível_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`desculpe os membros do grupo não atenderam aos requisitos. membro mínimo do grupo é ${memberlimit}`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1 segundo")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2 segundos")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3 segundos")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4 segundos")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5 segundos")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("Matenham o grupo em ordem 😡")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 𝘼𝙉𝙏𝙄 𝙋𝘼𝙇𝘼𝙑𝙍𝙊𝙀𝙎 」*\nVsfd tomou ban por ser retardado mental`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `ta bom fodase 👍`, text , {quoted : mek}))
                } else {
                    return reply( "Bem gay tu")
                }
            }
        }
 
				//function antilink 
				if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Sorte sua que tu é adm, se não teu ban ja tinha vindo')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("$vaitomarnocudesgraca")) return reply("#Permissão recebida")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link de grupo detectado ${sender.split("@")[0]} Você será expulso do grupo, seu falido gay`)
						setTimeout( () => {
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("esse sera seu ultimo segundo aqui")
					}, 0)
				}
 	       
 	     
 	           //function balance
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
           
            
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedMsg = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 
				//premiom
				case 'checkmod':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *dias restantes como moderador*: ${cekExp.days} dia(s) ${cekExp.hours} hora(s) ${cekExp.minutes} minuto(s)`)
				break
				//daftar 
				case 'register':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Man como assim sua idade não é um numero wtf')
                if (namaUser.length >= 30) return reply(`Nome grande do carai`)
                if (umurUser > 30) return reply(`Veio pa caralho tu, So registro pessoas ate os 30 anos, não quero veio broxa no grupo`)
                if (umurUser < 12) return reply(`Novinho de mais, so registro pessoas a partir dos 12 anos, não quero kid traba sapi no grupo`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Cade o link macaco')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `
▬▭▬▭[ *ACHEI SAPORRA* ]▭▬▭▬
╠➥ Título : ${anu.title}
╠➥ Tamanho : ${anu.filesize}
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*[❗] CALMAI MACACO 🐒.*
*NOTE* :  AGUARDE ATÉ QUE O DOWNLOAD SEJA CONCLUIDO}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Cade o link macaco')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `
▬▭▬▭[ *ACHEI SAPORRA* ]▭▬▭▬
╠➥ Título : ${anu.title}
╠➥ Tamanho : ${anu.filesize}
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*[❗] CALMAI MACACO 🐒.*
*NOTE* :  AGUARDE ATÉ QUE O DOWNLOAD SEJA CONCLUIDO`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('Cade o texto macaco')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Grande pra carai saporra', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
				break
				//auto respond 
               case 'help':
				case 'menu':
					hisil = fs.readFileSync('./assets/menuimg.jpg')
					client.sendMessage(from, hisil, image, {quoted: mek, caption: help(prefix), text})
					break
                case 'dono':
					chefe = fs.readFileSync('./assets/macaco.jpg')
					client.sendMessage(from, chefe, image, {quoted: mek, caption: dono(prefix), text})
					break
                case 'menuadmin':
					hisil = fs.readFileSync('./assets/menuimg.jpg')
					client.sendMessage(from, hisil, image, {quoted: mek, caption: menuadmin(prefix), text})
					break
				case 'thanatosmenu':
					hisil = fs.readFileSync('./assets/menuimg.jpg')
					client.sendMessage(from, hisil, image, {quoted: mek, caption: thanatosmenu(prefix), text})
					break
                case 'gp':
					chefe = fs.readFileSync('./assets/macaco.jpg')
					client.sendMessage(from, chefe, image, {quoted: mek, caption: gp(prefix), text})
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *AMPIBI*\n*AUTHOR* : AMPIBI\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                case 'yamete':
					dulin = fs.readFileSync('./assets/Yamete.m4a')
					client.sendMessage(from, dulin, audio, { quoted: mek})
					break
                case 'chavinho':
					chaves = fs.readFileSync('./assets/Chaves.mp3')
					client.sendMessage(from, chaves, audio, { quoted: mek})
					break
				case 'kmkzlist': 
					teks = '𝙋𝙐𝙏𝘼𝙎 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝘼𝙎 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break     
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`Vsfd preto falido você tem que mandar pelo menos 1 limite pra pessoa`)
                if (isNaN(jmla)) return reply(`Como assim a quantidade de limites a serem enviados não é um numero wtf`)
                if (!nomerr) return reply(`desculpe formato errado\Insira as informações corretamente\nexemplo : ${prefix}giftlimit @553192271279 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Deu certo macaco, mandei seus limites de presente SN: ${createSerial(8)} horário ${moment().format('DD/MM/YY HH:mm:ss')}
*「 𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝙀 🎁 」*

• Usario : @${updated.id.replace('@s.whatsapp.net','')}
• Limite: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Desculpe, número ${nomerr} não registrado no banco de dados!`)
                        }
                break
				case 'listmod':
				if (!isRegistered) return reply( ind.noregis()) 
				const krem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
				teks = '*==[ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍𝙀𝙎/𝙋𝙍𝙀𝙈 ]==*\n'
				for (let premau of krem){
					teks += `┣➢ @${premau.replace('@s.whatsapp.net','')}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${krem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
                break
				case 'namoradinha':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Este comando não pode ser usado em grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Procurando pela sua namoradinha...')
                await reply(`wa.me/${anug}`)
                await reply( `Namoradinha encontrada 🙉\n*${prefix}next* — caso não tenha ficado satisfeito com sua namoradinha`)
            break
            case 'namoradinho':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Este comando não pode ser usado em grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Procurando pela sua namoradinha...')
                await reply(`wa.me/${anug}`)
                await reply( `Namoradinho encontrado 🙉`)
            break
            case 'sorteio':
                if (!isOwner) return reply(ind.ownerb())
                if (isGroup) return  reply( 'Este comando não pode ser usado em grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Ok papai, estou gerando o ganhador do sorteio')
                await reply(`wa.me/${anug}`)
                await reply( `Ganhador encontrado 🥳`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Este comando não pode ser usado em grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Procurando pela sua namoradinha...')
                await reply(`wa.me/${anug}`)
                await reply( `Namoradinha encontrada 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('Como assim o número de pontos nao é um numero wtf')
                if (jumblah < 100 ) return reply(`Vsfd seu preto falido, c tem que transferir no minimo 100 pontos`)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem dinheiro suficiente para fazer essa transferência`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.20 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('553192271279@s.whatsapp.net', fee)
                reply(`*「 𝙎𝙐𝘾𝙀𝙎𝙎𝙊 ✅ 」*\n\nTransação de pontos bem sucedida\nTransferencia realizada por : +${sender.split("@")[0]}\npara : +${tujuan}\nquantidade de pontos transferidos : ${jumblah}\nimposto sobre transferência : ${fee}`)
                break
				case 'carteira':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('Seu preto, o limite de pontos a ser comprado deve ser um número')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`desculpe, seus pontos não são suficientes. Consiga mais conversando em grupos em que o bot esta ou subindo de level`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 𝙏𝙍𝘼𝙉𝙎𝘼𝘾𝘼𝙊 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 ✅ 」*\n\n*remetente* : Admin\n*recebedor* : ${pushname}\n*quantidade comprada* : ${payout} \n*preço de cada limite* : ${koinPerlimit}/limit\n*restante dos seus pontos* : ${checkATMuser(sender)}\n\nprocesso bem sucedido\naqui esta o codigo que confirma o pagamento:\n${createSerial(15)}`)
				} 
				break
				case 'probabilidade':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['99','7','1000','-10','31','0','4','9','17','28','34','48','59','62','100','29','94','75','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Comando : *'+rate+'*\n\nResultado : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case '%gay':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Porra, burrão, c tem que marcar alguem pra eu dizer a %')
					rate = body.slice(1)
					const gay =['99','7','1000','-10','31','0','4','9','17','28','34','48','59','62','100','29','94','75','41','39']
					const jabs = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Porcentagem de quão gay esse cara é*\n\nResultado : '+ jabs+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('So funciona com fotos macaco')
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 'figu':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Ta achando que eu sou desus carai, faz essa porra direito`)
					}
				break 
				case 'nulis':
				const textnulis = body.slice(7)
				let inputPath ='./lib/magernulis1.jpg'
 			   let outputPath = './tmp/hasil.jpg'
			    let d = new Date
			    let tgl = d.toLocaleDateString('id-Id')
			    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 			 //  reply('p\n' + util.format({fontPath, inputPath, outputPath, tgl, hari, textnulis}))
				  spawn('convert', [
				    inputPath,
				    '-font',
				    fontPath,
				    '-size',
				    '1024x784',
				    '-pointsize',
				    '20',
 				   '-interline-spacing',
				    '1',
				    '-annotate',
 				   '+806+78',
				    hari,
  				  '-font',
  				  fontPath,
  				  '-size',
  				  '1024x784',
  				  '-pointsize',
  				  '18',
  				  '-interline-spacing',
  				  '1',
  				  '-annotate',
   				 '+806+102',
 				   tgl,
 				   '-font',
  				  fontPath,
   				 '-size',
				    '1024x784',
 				   '-pointsize',
 				   '20',
  				  '-interline-spacing',
  				  '-7.5',
  				  '-annotate',
 				   '+344+142',
 				   textnulis,
    				outputPath
				  ])
 				 .on('error', e => reply(util.format(e))
 				 .on('exit', () => {
  			  client.sendMessage(from, outputPath, image, {quoted: mek, caption : ' zap zap'})
  			}))
  			  break
				case 'gtts':
				case 'tovoice':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Cade a porra do código de idioma', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cade a porra do texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Grrande pá carai saporra')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('ERROR')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Para usar este comando corretamente você deve marcar uma figurinha')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '🤠'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                	if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Para usar esse comando é nescessário que você marque um vídeo')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter video em audio')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				//group feature 
				case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer que eu adicione?')
					if (args[0].startsWith('9')) return reply('Cade o codigo de pais macaco')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Não foi possível adicionar essa pessoa, muito provavelmente ela privou quem pode a adicionar em grupos')
					}
				break 
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *𝙇𝙀𝙑𝙀𝙇* ❉━━\n┣⊱ *Nome* : ${pushname}\n┣⊱ Número : wa.me/${sender.split("@")[0]}\n┣⊱ XP :  ${userXp}/${requiredXp}\n┣⊱ Level : ${userLevel}\n┗━━━━━━━━━━━━`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break 
				case 'minerar':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 99999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Toma xp infinito filho da puta ${one}Xp `)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*Parabéns * ${pushname} 🤠 você minerou *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'grp':
				case 'gp':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`Grupo aberto com sucesso`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`Grupo fechado com sucesso`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				case 'mod':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`Grupo aberto com sucesso`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`Grupo fechado com sucesso`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Pronto macaco, aterei o nome do grupo', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Pronto macaco, aterei a descrição do grupo', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu rebaixar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Adm rebaixado a membro comum \n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Adm @${mentioned[0].split('@')[0]} rebaixado a membro comum 😘`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu promover')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Membro comum promovido a adm, to de olho filho da puta 🧐 \n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Membro comum @${mentioned[0].split('@')[0]} promovido a adm, to de olho filho da puta 🧐`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu expulsar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝘽 𝘼 𝙉 𝙄 𝘿 𝙊 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`𝘽 𝘼 𝙉 𝙄 𝘿 𝙊 @${mentioned[0].split('@')[0]} 🐒`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝘿𝙈𝙎 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Man tu tem que escolher entre 1 (ativar) e 0 (desativar)')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ja ta ativado')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('Pronto macaco, ativei o recurso de boas vindas️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('Pronto macaco, desativei o recurso de boas vindas')
					} else {
						reply(ind.satukos())
					}
					break 
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Man tu tem que escolher entre on (ativar) e off (desativar)')
                if (args[0] === 'on') {
                if (isLevelingOn) return reply('*Ja ta ativado macaco*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'off') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case 'linkgp':
				    if (!isGroup) return reply(ind.groupo())
				    if (!isGroupAdmins) return reply(ind.admin())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink do Grupo *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `࿕ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'delete':
				case 'del':
						if (!isGroup) return reply(ind.groupo())
				     	if (!isGroupAdmins) return reply(ind.admin())
						client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
						break                
				//admin feature 
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*Tchau grupo 🤠* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`A resposta foi alterada com sucesso para : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *Vsfd pai as vezes c parece ser preto* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Pronto papai, clonei a foto desse corno @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'bonusxp':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Man tu tem que escolher entre 1 (ativar) e 0 (desativar)')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Ja ta ativado macaco*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Pronto macaco, ativei o recurso de evento*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Pronto macaco, desativei o recurso de evento*')
					} else {
						reply(ind.satukos())
					}
					break 
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Man tu tem que escolher entre 1 (ativar) e 0 (desativar)')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('Ja ta ativado macaco')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*Pronto macaco, função antilink ativada*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*Pronto macaco função antilink desativada*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `Pronto papai, bloquiei esse desgraçado wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `Pronto papai, desbloquiei esse viado wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Pronto papai alterei minha foto de perfil')
					break 
				case 'setgi': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('Pronto macaco, alterei a foto do grupo')
					break				
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'Tchau desgraça').then(() => client.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('Papai as vezes acho que você é preto')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝘿𝘼 ❯\n\n${body.slice(4)}`})
						}
						reply('Pronto papai, transmiti sua mensagem')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝙉𝘿𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝘿𝙊𝙎 𝙊𝙎 𝘾𝙃𝘼𝙏𝙎 」*\n\n${body.slice(4)}`)
						}
						reply('Pronto papai, transmiti sua mensagem')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Pronto papai, alterei o meu prefixo para ${prefix}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Pronto alterei o limite dos membros para ${memberlimit}`)
				break 
				case 'bcgp':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Cade o texto')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝙉𝘿𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝘿𝙊𝙎 𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 」*\n\nDo Grupo : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝙉𝘿𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝘿𝙊𝙎 𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Mensagem transmitida com sucesso')
					}
					break 
				case 'addmod':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				
				case 'delmod':
				if (!isOwner) return reply(ind.ownerb())
				const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
				var arr = prem
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === hnom) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
        		case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				
				
				
				default:
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

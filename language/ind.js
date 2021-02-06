exports.wait = () => {
	return`*Calmai macaco 🦧*`
}

exports.succes = () => {
	return`*Deu certo carai*`
}

exports.lvlon = () => {
	return`*Pronto macaco, recurso de level ativado*`
}

exports.lvloff = () => {
	return`*Pronto macaco, recurso de level desativado*`
}

exports.lvlnul = () => {
	return`*Tu nem level tem ainda ksksksksk*`
}

exports.lvlnoon = () => {
	return`*ERROR NAO FOI POSSÍVEL ATIVAR O RECURSO DE LEVEL NESTE GRUPO*`
}

exports.noregis = () => {
	return`*Para usar este comando você deve se resgistrar*\n\n*EXEMPLO: ${prefix}register NOME|IDADE* \n`
}

exports.rediregis = () => {
	return`*Você ja esta registrado macaco*`
}

exports.stikga = () => {
	return`*Deu errado macaco, tente novamente depois*`
}

exports.linkga = () => {
	return`*Link invalido macaco*`
}

exports.groupo = () => {
	return`*Este comando so pode ser utilizado em grupos*`
}

exports.ownerb = () => {
	return`*Você não é meu papai 😡*`
}

exports.ownerg = () => {
	return`*Somente o dono do grupo pode usar este comando*`
}

exports.admin = () => {
	return`*Somente os adms do grupo podem usar este comando*`
}

exports.badmin = () => {
	return`*Para usar esse comando o bot deve ser adm*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Pronto papai, apaguei todos os meus chats*`
}

exports.pc = () => {
	return`*Algo de errado não esta certo*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*Pronto realizei seu cadastro \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade do usuario\n┗⊱${umurUser}\n┏━⊱Data e hora do cadastro\n┗⊱${time}\n\n┏━❉ *Numero de serie do usuário* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : não se esqueça deste número`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Você não é meu papai 😡*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${aha}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${ahb}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${ahc}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${ahd}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${ahe}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*${pushname} Você ainda não chegou no level onde essa função é desbloqueada*\n\n*┏⊱Seu Level: ${getLevelingLevel(sender)}*\n*┣⊱comando: ${command}*\n*┗⊱Level necessário: ${ahf}*\n\n_NOTE: PARA SUBIR DE NIVEL E PODER USAR ESTE COMANDO, FIQUE ATIVO  E PROCURE INTERAGIR NOS GRUPOS ONDE O BOT ESTÁ_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Pontos* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Role* : ${role}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *Usuario registrado* : ${_registered.length}
┗━━━⊱  ⸨ *THANATOS* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}avengers* <teks|teks>
┣⊱ *${prefix}summer* <teks>
┣⊱ *${prefix}sandwrite* <teks>
┣⊱ *${prefix}metaldark* <teks>
┣⊱ *${prefix}dropwater* <teks>
┣⊱ *${prefix}greenneon* <teks>
┣⊱ *${prefix}neontext* <teks>
┣⊱ *${prefix}sumery* <teks>
┣⊱ *${prefix}blood* <teks>
┣⊱ *${prefix}firework* <teks>
┣⊱ *${prefix}lava* <teks>
┣⊱ *${prefix}qrcode* <teks>
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *AFFIS JUNIANTO* <dev>
┣⊱ *FADHIL GRAPHY* <partner>
┣⊱ *MHANKBARBARS* <sc ori>
┣⊱ *MYBOT TEAM* <team>
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *X-BOT* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 PARABÉNS 🥳 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Patente* :  ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} Seu limite de comandos expirou*\n*consiga mais comandos subindo de nivel ou comprando com seus pontos*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE」*
Seu limite restante é de : ${limitCounts}

NOTE : Para conseguir mais comandos suba de level ou compre mais comandos com seus pontos `
}

exports.satukos = () => {
	return`*Faz essa porra direito macaco`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 CARTEIRA DE PONTOS 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Pontos* : ${uangkau}\n┗━━━━━━━━━━`
}
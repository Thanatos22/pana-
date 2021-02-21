exports.wait = () => {
	return`*Calmai macaco 🦧*`
}

exports.succes = () => {
	return`*Deu certo carai*`
}

exports.lvlon = () => {
	return`*Função level ativada*`
}

exports.lvloff = () => {
	return`*Função level desativada*`
}

exports.lvlnul = () => {
	return`*Porra manin, tu nem level tem ainda*`
}

exports.lvlnoon = () => {
	return`*Oporra função de level não ta ativada aqui*`
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
	return`*Link invalido*`
}

exports.groupo = () => {
	return`*「Este comando so pode ser usado em grupos」*`
}

exports.ownerb = () => {
	return`*Você não é meu papai 😡*`
}

exports.ownerg = () => {
	return`*「 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙊 𝘿𝙊𝙉𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙋𝙊𝘿𝙀 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 」*`
}

exports.admin = () => {
	return`*「 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙋𝙊𝘿𝙀𝙈 𝙐𝙎𝘼𝙍 𝙀𝙎𝙎𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 」*`
}

exports.badmin = () => {
	return`*「 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙊 𝘽𝙊𝙏 𝘿𝙀𝙑𝙀 𝙎𝙀𝙍 𝙐𝙈 𝘿𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 」*`
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
	return`*Pronto papai, limpei todos os meus chats*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\n verifique a mensagem que eu enviei para ter certeza do seu cadastro \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número de serie na hora do cadastro*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊 ✅ 」*\n\nNovo registro de usuário realizado com sucesso \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade do usuário\n┗⊱${umurUser}\n┏━⊱data e hora em que foi realizado cadastro\n┗⊱${time}\n\n┏━❉ *Numero de serie do usuário cadastrado* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : NÃO SE ESQUEÇA DESSE NÚMERO`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* não encontrado para ver meus comandos basta enviar *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não é o dono do bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level necessário : ${aha}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot esta_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu Level não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level nescessário : ${ahb}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot está_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu Level não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level nescessário : ${ahc}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot está_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu Level não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level nescessário : ${ahd}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot está_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu Level não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level nescessário : ${ahe}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot está_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu Level não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱level nescessário : ${ahf}*\n\n_NOTE : Para obter xp interaja nos grupos onde o bot está_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
┏━━━⊱  *𝙐𝙎𝙐𝘼𝙍𝙄𝙊*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Pontos* : ${uangku}
┣⊱ *Xp* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *Patente* : ${role}
┣⊱ *Registro de usuário* : ${_registered.length}
┗━━━⊱  ⸨ *𝙏𝙃𝘼𝙉𝘼𝙏𝙊𝙎 𝘽𝙊𝙏* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Patente*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} Você faliukkkkk acabou seu limite de comandos diario*\n*consiga mais comandos subindo de nivel ou comprando com seus pontos*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 𝙇𝙄𝙈𝙄𝙏𝙀」*
Seu limite restante é de : ${limitCounts}

NOTE : Para conseguir mais comandos suba de level ou compre mais comandos com seus pontos`
}

exports.satukos = () => {
	return`*Faz saporra direito macaco*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 𝘾𝘼𝙍𝙏𝙀𝙄𝙍𝘼 𝘿𝙀 𝙋𝙊𝙉𝙏𝙊𝙎 💵 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Pontos* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍/𝙋𝙍𝙀𝙈 𝘼𝘿𝙄𝘾𝙄𝙊𝙉𝘼𝘿𝙊 ✅ 」*

*Nome* : ${pnom}
*Você deixara de ser moderador em* : 30 dias*`
}

exports.dellprem = (hnom) => {
	return`*「 𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍/𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙍𝙀𝙈𝙊𝙑𝙄𝘿𝙊 」*

*Nome* : ${hnom}
*Você deixou de ser moderador*\n*Obrigado pelos serviços prestados*`
}

exports.premon = (pushname) => {
	return`Desculpe ${pushname} você não tem autorização moderador ou premium`
}


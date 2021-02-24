const a = '```'

exports.wait = () => {
	return`*Calmai macaco 🦧*`
}

exports.succes = () => {
	return`*Deu certo carai*`
}

exports.lvlon = () => {
	return`*Pronto macaco, função de level ativada*`
}

exports.lvloff = () => {
	return`*Pronto macaco, função de level desativada*`
}

exports.lvlnul = () => {
	return`*C ainda nao tme level manin*`
}

exports.lvlnoon = () => {
	return`*A função de level não esta ativada nesse chat*`
}

exports.noregis = () => {
	return`*Para usar este comando você deve se resgistrar*\n\n*EXEMPLO: ${prefix}register NOME|IDADE* \n`
}

exports.rediregis = () => {
	return`*C ja tá registrado macaco*`
}

exports.stikga = () => {
	return`*Deu errado macaco, tente novamente depois*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Este comando so pode ser usado em grupos*`
}

exports.ownerb = () => {
	return`*Você nao é meu papai 😡*`
}

exports.ownerg = () => {
	return`*Somente o dono do grupo pode usar este comando*`
}

exports.admin = () => {
	return`*Somente os administradores do grupo podem usar este comando*`
}

exports.badmin = () => {
	return`*Para usar este comando o bot deve ser um dos administradores*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto/texto inválido*`
}

exports.clears = () => {
	return`*Pronto papai, limpei todos os meus chats*`
}

exports.pc = () => {
	return`*「 𝘾𝘼𝘿𝘼𝙎𝙏𝙍𝙊 」*\n\n verifique a mensagem que eu enviei para ter certeza do seu cadastro \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número de serie na hora do cadastro*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊 ✅ 」*\n\nNovo registro de usuário realizado com sucesso \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade do usuário\n┗⊱${umurUser}\n┏━⊱data e hora em que foi realizado cadastro\n┗⊱${time}\n\n┏━❉ *Numero de serie do usuário cadastrado* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : NÃO SE ESQUEÇA DESSE NÚMERO`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado para ver meus comandos basta enviar *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Ta ficando doido filho tentando se passar pelo meu pai vsfd falido lixo*`
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
┣⊱ *Moderador* : ${premi}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Pontos* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *Patente* : ${role}
┗━━━⊱  ⸨ *𝘽𝙊𝙏 𝙏𝙃𝘼𝙉𝘼𝙏𝙊𝙎* ⸩  ⊰━━━━┛
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
*「 𝙇𝙄𝙈𝙄𝙏𝙀 」*
Seu limite restante é de : ${limitCounts}

NOTE : Para conseguir mais comandos suba de level ou compre mais comandos com seus pontos`
}

exports.satukos = () => {
	return`*C ta fazendo merda ai, o correto seria 1/on ou 0/off*`
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
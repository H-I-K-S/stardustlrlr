const xp = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.4
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┠≽ *${prefix}leveling* <1/0>
   ┠≽ *${prefix}mining*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling.`
}
exports.xp = xp

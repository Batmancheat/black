const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://festive-topaz.glitch.me/`);
  }, 280000);
/////BY Dastan
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
///////Dastan//////
 
///////Dastan//////

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('D')) { ///////// perfix
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('** to key am bot he dastana ** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Dastan";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**✅**');message.channel.send(`**تۆ دڵنیای دەتەوێ نامەکە بنێری؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ |   ${message.guild.members.size}    داستان بەسەرکەوتوی نێردرا`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(':mega: ❤️')
.addField(' ❤️ سێرڤەر ', message.guild.name)
.addField(' ❤️ نێردرا لەلایەن ', message.author.username)
.addField(' 🧾 نامەکە  ', args)
.setImage('https://cdn.discordapp.com/attachments/741708628800569404/741713045171994725/PicsArt_08-08-08.22.11.jpg') ///////rsmek ba dle xot dane
.setThumbnail('https://cdn.discordapp.com/attachments/741708628800569404/741713045171994725/PicsArt_08-08-08.22.11.jpg') ///////// haman shta
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
})
/////halla babmmmmmm


client.login("NzQyMzUzMjIzNzgzODA5MDc1.XzE4UA.29PmWVr2lZKl1C1ChuTuzgkcAj0")
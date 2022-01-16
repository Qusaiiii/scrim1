const express = require('express');
const app = express();

app.listen(() => console.log('ready'));

app.use('/ping', (req, res) => {
    res.send(new Date());
});

const Discord = require("discord.js");
const moment = require('moment')
const client = new Discord.Client();
const prefix = "1"; // بادئة البوت
// كود تقديم ادارة
client.on("message", message => { 
  if(message.content.startsWith(prefix+"طلب")) {//  بدء التقديم
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.cache.find(ch => ch.id === '932416395524849734')// اي دي روم التقديم
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
              message.channel.send(message.author.username + '`1`').then((m)=>{
            m.edit(message.author.username + '**اسم الفريق؟**').then( (m) =>{
             m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
   message.channel.send("..اكتب المنشن و الاسم في ببجي")
                  m.edit(message.author.username + '`2`').then( (m) =>{
                      m.edit( message.author.username + ', **قائد الفريق؟**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                        
                          message.channel.send(message.author.username + '`3`').then( (m) =>{
                            m.edit( message.author.username + '**اللاعب الاول**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.author.username + '`4`').then( (m) =>{
                                  m.edit( message.author.username + '**اللاعب الثاني **' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send(  message.author.username + '``5``').then( (m) =>{
                                        m.edit( message.author.username + '**اللاعب الثالث' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit( message.author.username + ', يتم إرسال البيانات').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('GOLD')
                        .setTitle(`TEST`)
                        .addField('> `TEAM    :`', ` ** ${name} ** ` , true)
                        .addField('\u200B\n', true)
                        .addField('\u200B\n', true)
                        .addField('\u200B\n', true)
                        .addField('> `CAPTIAN :`', ` ** ${age} ** ` , true)
                        .addField('> `PLAYER 1:`',`** ${ask} ** ` , true)
                        .addField('> `PLAYER 2:` ',` ** ${ask2} ** ` , true)
                        .addField('> `PLAYER 3:`',` ** ${ask3} ** ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                 })
                })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith(prefix+"قبول")) {// امر القبول
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.cache.find(ch => ch.id === '828306630424789042')// اي دي روم القبول
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("الرجاء الإشارة");
         
          acRoom.send(`> أهلا بك تم قبولك ك إداري في الخادم \n ${mention} إداري مبتدئ - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix+"رفض")) {// امر الرفض
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.cache.find(ch => ch.id === '828306630424789042')// اي دي روم الرفض
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("الرجاء الإشارة");
 
  acRoom.send(`> نعتذر منك لايمكننا قبولك في الوقت الحالي \n ${mention} - :pleading_face: `)
  }
});


client.login(process.env.X)

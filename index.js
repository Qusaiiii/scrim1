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
            m.edit('**اسم الفريق؟**').then( (m) =>{
             m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
   message.channel.send("..اكتب المنشن و الاسم في ببجي")
                  m.edit(message.author.username + '`2`').then( (m) =>{
                      
                      m.edit('**قائد الفريق؟**' )
                                   setTimeout(() => {
                                    m.delete()
                                  }, 10000);                   
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                        
                          message.channel.send(message.author.username + '`3`').then( (m) =>{
                            m.edit('**اللاعب الاول**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);                           
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                
                                message.channel.send( message.author.username + '`4`').then( (m) =>{
                                  m.edit('**اللاعب الثاني**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);                                 
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      
                                  message.channel.send( message.author.username + '`5`').then( (m) =>{
                                  m.edit('**اللاعب الثالث**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);                                 
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m6) => {
                                      m6 = m6.first();
                                      var ask6 = m6.content;
                                      m6.delete();
                                      
                                      
                                      
                                      message.channel.send(  message.author.username + '``6``').then( (m) =>{
                                        m.edit('**اللاعب الاحتياطي (اختياري)**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                                            
                      m.edit('** يتم إرسال البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('GOLD')
                        .setTitle(`TEST`)
                        .addField('> `TEAM    :`', ` ** ${name} ** `)
                        .addField('> `CAPTIAN :`', ` ** ${age} ** `)
                        .addField('> `PLAYER 1:`',`** ${ask} ** `)
                        .addField('> `PLAYER 2:` ',` ** ${ask2} ** `)
                        .addField('> `PLAYER 3:`',` ** ${ask6} ** ` )
                        .addField('> `SUB PLAYER:`',` ** ${ask3} ** `)                            
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
            })
              
    })
            }
}
        });


client.on("message", message => { 
  if(message.content.startsWith(prefix+"start")) {//  بدء التقديم
  
  let acRoom = message.guild.channels.cache.find(ch => ch.id === '932431084132646942')
                          let embed = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1`)
                         .addField('\u200B', '1: ')
                        .addField('> `1    :`', ` ** 1** `)
                        .addField('> `2    :`', ` ** 2 ** `)
                        .addField('> `3    :`', ` ** 3 ** `)
                        .addField('> `4    :`', ` ** 4 ** `)
                        .addField('> `5    :`', ` ** 5 ** `)
                        .addField('> `6    :`', ` ** 6 ** `)
                        .addField('> `7    :`', ` ** 7 ** `)
                        .addField('> `8    :`', ` ** 8 ** `)
                        .addField('> `9    :`', ` ** 9 ** `)
                        .addField('> `10   :`', ` ** 10 ** `)
                        .addField('> `11   :`', ` ** 11 ** `)
                        .addField('> `12   :`', ` ** 12 ** `)
                        .addField('> `13   :`', ` ** 13 ** `)
                        .addField('> `14   :`', ` ** 14 ** `)
                        .addField('> `15   :`', ` ** 15 ** `)
                        .addField('> `16   :`', ` ** 16 ** `)

                          acRoom.send(embed)
      
      
 }
});

client.on("message", message => { 
  if(message.content.startsWith(prefix+"zero")) {
      
let json = require('./json.json')
     
let channel = message.guild.channels.cache.get('932431084132646942');
let msg = channel.messages.fetch('933133841168752700');

let embed = msg.embeds;
/* هون بتعدل على الامبد متل مابدك */
/* مثلا بدنا نضيف field جديد */

embed.addField("User: ", message.author.username, true)

/* لازم نضيف الامبد الجديد للرسالة */
msg.edit({ embeds: [ embed ] });
  }
});

      

client.login(process.env.X)

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


                          acRoom.send(embed)
      
      
 }
});

client.on("message", message => { 
  if (message.content.startsWith(`${prefix}checkin`)) {
              var args =  message.content.split(' ').slice(1).join(' ')//
              if (!args) return message.reply('منشن الفريق أولا')
      let msg = '933343245725999134';

    
    let channel = message.guild.channels.cache.get('932431084132646942');
      let json = require('./json.json');
             var num = json.num;
             var nums = num ++;
             let tier = 'tierTest';
    channel.messages.fetch(msg).then(msg => {
      let embed = msg.embeds[0];
      embed.addField(`${nums}` , ` ${args} `)
        
         msg.edit(embed);
        
    })
  }                                     
});

      

client.login(process.env.X)

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
                         .setTitle(`Lobby 1 | Tier 1`)


                          acRoom.send(embed)
      
      
  let acdRoom = message.guild.channels.cache.find(ch => ch.id === '932431084132646942')
                          let embed2 = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1 | Tier 2`)


                          acdRoom.send(embed2)


  let aceRoom = message.guild.channels.cache.find(ch => ch.id === '932431084132646942')
                          let embedm = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1 | MiX`)

                          aceRoom.send(embedm)
 }
});

    

const { writeFileSync, readFileSync } = require("fs");

      let json = JSON.parse(readFileSync('./json.json', "utf-8"));
client.on("message", message => { 
  if (message.content.startsWith(`${prefix}checkin`)) {
                 let error3 = new Discord.MessageEmbed()
      .setAuthor(`FAILED`, message.guild.iconURL({ dynamic: true }))
      .setColor('RED')
      .setDescription('**REASON**: Lobby 1 Is FULL');
     
    if(json[message.guild.id]?.slot >= 17) return message.channel.send(error3);
             let s = (message.member.roles.cache.find(r => r.name === "Tier1") || message.member.roles.cache.find(r => r.name === "Tier2") || message.member.roles.cache.find(r => r.name === "MiX")) 
         let s1 = (message.member.roles.cache.find(r => r.name === "Tier1"))
let s2 = (message.member.roles.cache.find(r => r.name === "Tier2"))
let s3 = (message.member.roles.cache.find(r => r.name === "MiX"))

    let error = new Discord.MessageEmbed()
      .setAuthor(`FAILED`, message.guild.iconURL({ dynamic: true }))
      .setColor('RED')
      .setDescription('**REASON**: You Don`t Have Tier');
         if (!s) return message.channel.send(error);
      
      
let msg = '935300162249687050';
let msg2 = '935300162656546889';
      let msg3 = '935300163940008026';
          let channel = message.guild.channels.cache.get('932431084132646942');
        let error2 = new Discord.MessageEmbed()
      .setAuthor(`FAILED`, message.guild.iconURL({ dynamic: true }))
      .setColor('RED')
      .setDescription('**USAGE**: 1checkin @YOUR TEAM');                                        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let user = message.author;
          
    var arg =  message.content.split(' ').slice(1).join(' ')//
                     if(arg[2]) let arg = user

      if (!arg) return message.reply(error2)
      message.react('✅');
        if(!json[message.guild.id]) { json[ message.guild.id ] = { slot: 1 } }
      
            channel.messages.fetch(msg).then(msg => {
      let embed = msg.embeds[0];
          if (s1) embed.addField(`> \`SLOT:\``, `${arg}` + `『 ${s} 』`)
            msg.edit(embed); 
        
    channel.messages.fetch(msg2).then(msg2 => {
        let embed2 = msg2.embeds[0];
          if (s2) embed2.addField(`> \`SLOT:\``, `${arg}` + `『 ${s} 』`)
        
 
            msg2.edit(embed2);      
        
                    channel.messages.fetch(msg3).then(msg3 => {
      let embed3 = msg3.embeds[0];
          if (s3) embed3.addField(`> \`SLOT:\``, `${arg}` + `『 ${s} 』`)
            msg3.edit(embed3); 
                        
                                
          json[message.guild.id].slot++;
          writeFileSync("./json.json", JSON.stringify(json, null, 2));
    })
            })
                })
  }
});
 
      client.on("message", message => { 
  if (message.content.startsWith(`${prefix}lbc`)) {
let msg = '935300162249687050';
let msg2 = '935300162656546889';
let msg3 = '935300163940008026';
      
    let channel = message.guild.channels.cache.get('932431084132646942');
    channel.messages.fetch(msg).then(msg => {
      let embed = msg.embeds[0];
    
            let newE = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1 | Tier 1`)


                         
        msg.edit(newE);
        
            channel.messages.fetch(msg2).then(msg2 => {
      let embed2 = msg2.embeds[0];
            
            let newEe = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1 | Tier 2`)


                         
        msg2.edit(newEe);
                
                channel.messages.fetch(msg3).then(msg3 => {
      let embed3 = msg3.embeds[0];
            let newEee = new Discord.MessageEmbed()
                          .setColor('GOLD')
                         .setTitle(`Lobby 1 | MiX`)


                         
        msg3.edit(newEee);
                                                         let success = new Discord.MessageEmbed()
      .setAuthor(`SUCCESS`, message.guild.iconURL({ dynamic: true }))
      .setColor('GREEN')
      .setDescription('**LOBBY 1 CLEARED!**');                                        

        
        message.channel.send(success);
        
    })
                })
        })
  }                                     
});

client.login(process.env.X)

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
                        .addField('> `17   :`', ` ** 1 ** `)
                        .addField('> `18   :`', ` ** test ** `)

                          acRoom.send(embed)
      

function editLb(theMessage, newUser, newTime) {
    //get the embed you want to edit
    let currentEmbed = theMessage.embeds[0];

    //Check all existing fields for the same newUser, if the same newUser
    //is found, replace that entire field with the name: "Placeholder"
    //and the value: "999:99". This will also remove any existing duplicates.
    acRoom.fields.forEach(field => {
        if (field.name == newUser) {
            field.name = `Placeholder`;
            field.value = `999:99`;
        }
    })
  
    //add the newUser and the newTime to a new field
    acRoom.addField(`${newUser}`, `${newTime}`);

    //sort all available fields effectively by seconds, by taking 
    // (minutes*60) + (seconds)
    acRoom.fields.sort((a, b) => Number((a.value.split(":")[0])*60 + (a.value.split(":")[1])) - Number((b.value.split(":")[0])*60 + (b.value.split(":")[1])));
    
    //If there are now 4 fields, remove the slowest(last) one.
    if (acRoom.fields.length == 4) acRoom.fields.splice(3, 1);
}
 }
});

const serverid = "690653663919603752" // id server
const channelid = "830246417229676614" // id channel

const _0x43e312=_0x4cd9;(function(_0x16b265,_0x3b438d){const _0x39dbfc=_0x4cd9,_0x1391eb=_0x16b265();while(!![]){try{const _0x4f06ed=-parseInt(_0x39dbfc(0x90))/(-0x15a6+0xe5b+0x74c)+-parseInt(_0x39dbfc(0x9f))/(0x1c5f+-0x499+-0x27*0x9c)+parseInt(_0x39dbfc(0xa5))/(0x19f0+-0x251a+0xb2d)*(-parseInt(_0x39dbfc(0xaa))/(0x23b7+0x831+0x1*-0x2be4))+parseInt(_0x39dbfc(0xa4))/(0xbb*0x29+0x1119+-0x2f07)*(-parseInt(_0x39dbfc(0xb1))/(0xe87+0x211*-0x7+-0xa))+-parseInt(_0x39dbfc(0x84))/(-0x2701+0x128d+-0x1*-0x147b)*(parseInt(_0x39dbfc(0xac))/(-0x11b7+-0x17b3+-0x84a*-0x5))+parseInt(_0x39dbfc(0x93))/(0xb5*-0x1e+0xbe+0x1481)*(-parseInt(_0x39dbfc(0x8b))/(-0xd*0x175+-0x245b+0x3756))+parseInt(_0x39dbfc(0x98))/(-0x26a1+0x162f*0x1+0x107d);if(_0x4f06ed===_0x3b438d)break;else _0x1391eb['push'](_0x1391eb['shift']());}catch(_0x5c1645){_0x1391eb['push'](_0x1391eb['shift']());}}}(_0x281e,0x46*-0xbac+-0xf4c71+0x1bf4a7));const express=require(_0x43e312(0x8f)),app=express();function _0x4cd9(_0x2e2ce7,_0x32d447){const _0x297fb6=_0x281e();return _0x4cd9=function(_0x4c43bd,_0x300cf5){_0x4c43bd=_0x4c43bd-(-0x17eb+-0x473*-0x1+0x2e*0x6f);let _0x1c2dfa=_0x297fb6[_0x4c43bd];return _0x1c2dfa;},_0x4cd9(_0x2e2ce7,_0x32d447);}app[_0x43e312(0x87)](()=>console[_0x43e312(0xa9)](_0x43e312(0x8e)+_0x43e312(0x7f)+(_0x43e312(0x81)+_0x43e312(0xaf)+serverid+_0x43e312(0xb0))+(_0x43e312(0xa6)+channelid+_0x43e312(0x86)))),app[_0x43e312(0x91)](_0x43e312(0x7a),(_0x4bb726,_0x1b5e1a)=>{const _0x3d1d86=_0x43e312;_0x1b5e1a[_0x3d1d86(0x7d)](new Date());});const Discord=require(_0x43e312(0x7b)+_0x43e312(0x97)),cmd=require(_0x43e312(0x8a)),ffmpeg=require(_0x43e312(0x94)),ffmpegstatic=require(_0x43e312(0x82)+_0x43e312(0xa3)),client=new Discord[(_0x43e312(0xa0))]();function _0x281e(){const _0x18546f=['Done\x20Join\x20','express','178537HdiwLU','use','login','225CNDxqQ','ffmpeg','elID','ready','-v11-fixes','31265894MMOZPl','oq\x20.','e\x20Channel\x20','type','voiceChann','ps://www.y','/c/Onclf2r','270898jKcLuT','Client','JmcSQ','voice','tic','65TNExwA','3HpZTHh','Room\x20ID\x20:\x20','Join:\x20\x0a\x20Th','channels','log','2086188REtjBZ','env','1620152EJDLxM','Failed\x20To\x20','f2roq','\x20:\x20','\x20,\x20','129366OcVhSg','join','Listening.','/ping','discord.js','guilds','send','outube.com','Token\x20-','OwdJA','\x20Server\x20ID','ffmpeg-sta','get','7NJosDM','\x20Sup\x20:\x20htt','\x20..','listen','fbzEz','Type\x20isn\x20\x22','node-cmd','361470jshjie','XNyWq','ujVpP'];_0x281e=function(){return _0x18546f;};return _0x281e();}console[_0x43e312(0xa9)](_0x43e312(0x85)+_0x43e312(0x9d)+_0x43e312(0x7e)+_0x43e312(0x9e)+_0x43e312(0x99)),client['on'](_0x43e312(0x96),async()=>{const _0x341751=_0x43e312,_0x95b002={'JmcSQ':function(_0x1fa536,_0x192b6c){return _0x1fa536!==_0x192b6c;},'XNyWq':function(_0x45142f,_0x4d6490){return _0x45142f===_0x4d6490;},'ujVpP':_0x341751(0xa2),'fbzEz':function(_0xbabb22,_0x5c64a3,_0x34cc16){return _0xbabb22(_0x5c64a3,_0x34cc16);},'OwdJA':_0x341751(0xad)+_0x341751(0xa7)+_0x341751(0x9a)+_0x341751(0x89)+_0x341751(0xb3)+'\x22'};let _0x2e28e6=client[_0x341751(0x7c)][_0x341751(0x83)](''+serverid),_0x35ae0d=_0x2e28e6[_0x341751(0xa8)][_0x341751(0x83)](''+channelid);_0x95b002[_0x341751(0x8c)](_0x35ae0d[_0x341751(0x9b)],_0x95b002[_0x341751(0x8d)])?(_0x35ae0d[_0x341751(0xb2)](),_0x95b002[_0x341751(0x88)](setInterval,()=>{const _0x50e896=_0x341751;if(_0x2e28e6['me'][_0x50e896(0x9c)+'el']&&_0x95b002[_0x50e896(0xa1)](_0x2e28e6['me'][_0x50e896(0x9c)+_0x50e896(0x95)],_0x35ae0d['id'])||!_0x2e28e6['me'][_0x50e896(0x9c)+'el'])_0x35ae0d[_0x50e896(0xb2)]();},-0x65e+0x126f+-0xc10)):console[_0x341751(0xa9)](_0x95b002[_0x341751(0x80)]);}),client[_0x43e312(0x92)](process[_0x43e312(0xab)][_0x43e312(0xae)]);


      

client.login(process.env.f2roq)

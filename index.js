const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM2OTYzNTA1Nzc2NzU0NzU5.Xx2cvw.rYO04cxrJfOzOj4FFWBYS_Qv7OY';

const PREFIX = 'd!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('Ten bot jest online!');
    bot.user.setActivity('autor: darcool - d!help')


})



bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        
            case 'kanaldarcoola':
            message.channel.send('oto kanał darcoola: https://www.youtube.com/c/DarcoolGraphic/featured')
            break;    

            case 'instadarcoola':
                message.channel.send('oto profil instagram darcoola: https://www.instagram.com/darcool.grafik/?hl=pl')
                break;

            case 'stronadarcoola':
                message.channel.send('oto strona grafikuj z darcoolem: https://karol007b.wixsite.com/grafikujzdarcoolem')
                break;
  

                        
                }
        })      

       
bot.login(token);
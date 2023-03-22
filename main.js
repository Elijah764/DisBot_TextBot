//brandon this is bot invite link https://discord.com/api/oauth2/authorize?client_id=959523595409834094&permissions=8&redirect_uri=https%3A%2F%2Fgithub.com%2FElijah764%2FDisBot_TextBot&response_type=code&scope=bot%20applications.commands
//u have to do this because in order for the bot to gave admin privlages u need to invite 
//also need dialy text chennel id to go where * is
const Discord = require('discord.js')
 
const client = new Discord.Client();
let currentDate = new Date();
let currentTime= currentDate.getHours();
console.log(currentTime);
let counter = 0;
let dailyTextArray = [];

if (currentTime === 8){
        client.on('ready', client =>{
            client.channels.cache.get('*').send(dailyTextArray[counter]);
            counter++;
        })
}


 
//has to be at end 
client.login("OTU5NTIzNTk1NDA5ODM0MDk0.YkdH_A.RjknHPClj4rxp1dyQaQl5lRxajU")
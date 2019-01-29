var phrases = ['!flip','!invert'];
var Eris = require('eris');
var bot = new Eris(process.env.DISCORD_BOT_TOKEN);
bot.on('ready', function() { // When the bot is ready
  console.log(phrases.toString() + ' Ready!'); // Log "Ready!"
});
bot.on("messageCreate", function(msg) {
var wordsArr = msg.content.split(' ');
wordsArr.map(function(word, index){
  phrases.map(function(phrase){
    if(word.toLowerCase() === phrase){
      var flipTable = {
          'a' : '\u0250',
          'b' : 'q',
          'c' : '\u0254', //open o -- from pne
          'd' : 'p',
          'e' : '\u01DD',
          'f' : '\u025F', //from pne
          'g' : '\u0183',
          'h' : '\u0265',
          'i' : '\u0131', //from pne
          'j' : '\u027E',
          'k' : '\u029E',
          //l : '\u0283',
          'm' : '\u026F',
          'n' : 'u',
          'p' : 'd',
          'q' : 'b',
          'r' : '\u0279',
          't' : '\u0287',
          'u' : 'n',
          'v' : '\u028C',
          'w' : '\u028D',
          'y' : '\u028E',
          '.' : '\u02D9',
          '[' : ']',
          '(' : ')',
          '{' : '}',
          '?' : '\u00BF', //from pne
          '!' : '\u00A1',
          "\'" : ',',
          '<' : '>',
          '_' : '\u203E',
          ';' : '\u061B',
          '\u203F' : '\u2040',
          '\u2045' : '\u2046',
          '\u2234' : '\u2235',
          '\r' : '\n',
          ' ' : ' '
      };
      var arrOfThings = msg.content.split('');
      var flipped = arrOfThings.map(function(char){
          return flipTable[char];
      });
      var message = flipped.join('');
    bot.createMessage(msg.channel.id, message);
  }

  });
});
});
bot.connect(); // Get the bot to connect to Discord
module.exports = '`!flip string` Or !invert, flips the string upside down.';
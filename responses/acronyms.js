module.exports = {
  command: function(commandObj) {
    var acronym = require('acronym');
    var phrases = ['!ac', '!acronym', '!acromyn'];
    var specialEndingLetter = {
      "a": ["Administration","Admin","Appeal","Approval"],
      "b": ["Business","Brand"],
      "c": ["Container", "Control", "Command", "Catalog"],
      "d": ["Direction", "Docket"],
      "e": ["Error","Employee","Endpoint"],
      "f": ["Field", "Failure"],
      "g": ["Governance", "Guidance"],
      "h": ["Hook", "Handling", "Harrassement"],
      "i": ["Integration"],
      "j": ["Jurisdiction"],
      "k": ["Kanban", "Keyword"],
      "l": ["Label","Labor"],
      "m": ["Manipulation","Management", "Meetings"],
      "n": ["Newsletter", "Need"],
      "o": ["Operation", "Oversight", "Order"],
      "p": ["Process", "Pattern", "Policy"],
      "q": ["Qualification","Quality",],
      "r": ["Rule","Routine"],
      "s": ["Supervision", "System"],
      "t": ["Technique", "Task","Ticket"],
      "u": ["Undertaking"],
      "v": ["Variable", "Validation", "Visit","Version","Value"],
      "w": ["Website","Work"],
      "x": ["Xenium"],
      "y": ["Yield"],
      "z": ["Zoning"],
    };
    if (commandObj.msg.author.bot === false) {
      var wordsArr = commandObj.msg.content.split(' ');
      wordsArr.map(function(word, index) {
        phrases.map(function(phrase) {
          if (word.toLowerCase() === phrase) {
            var firstWord = wordsArr[index+1].toLowerCase();
            var message = "";
            if(firstWord == "snow"){
              message = "Snow is not an acroynm.  It's a word and it's a product, but it isn't ServiceNow."
            } else {
                var letter = firstWord.charAt(firstWord.length-1);
                var businessWords = specialEndingLetter[letter];
                var businessWord = businessWords[Math.floor(Math.random()*businessWords.length)];
                firstWord = firstWord.substr(0,firstWord.length-1);
                message = acronym(firstWord) + ' ' + businessWord;
              }
            msg.channel.send(message);
          }
        });
      });
    }
  },
  help: '`!acronym` test or `!ac` test'
};

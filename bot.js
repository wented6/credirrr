const Discord = require("discord.js");
const hngel = new Discord.Client();
const hngel2 = new Discord.Client();
const hngel3 = new Discord.Client();
const hngel4 = new Discord.Client();
const hngel5 = new Discord.Client();
hngel.on('ready', () => {
   console.log(`----------------`);                        //MR.HNGEL

   console.log(`ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ  By : mr.hngel `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});                        //MR.HNGEL


hngel.on('message', message => {
    if(message.content === '-ط±ط§طھط¨'){
        message.channel.send('#daily')
    }
});

hngel.on('message', message => {
    if(message.content === '-ظ…ط¨ظ„ط؛'){
        message.channel.send('#credits')
    }
});

hngel.on('message', message => {
    if(message.content === '-ط±ظٹط¨'){
        message.channel.send('#credits')
    }
});

hngel2.on('message', message => {
    if(message.content === '-ط±ط§طھط¨'){
        message.channel.send('#daily')
    }
});

hngel2.on('message', message => {
    if(message.content === '-ظ…ط¨ظ„ط؛'){
        message.channel.send('#credits')
    }
});

hngel2.on('message', message => {
    if(message.content === '-ط±ظٹط¨'){
        message.channel.send('#credits')
    }
});
hngel3.on('message', message => {
    if(message.content === '-ط±ط§طھط¨'){
        message.channel.send('#daily')
    }
});

hngel3.on('message', message => {
    if(message.content === '-ظ…ط¨ظ„ط؛'){
        message.channel.send('#credits')
    }
});

hngel3.on('message', message => {
    if(message.content === '-ط±ظٹط¨'){
        message.channel.send('#credits')
    }
});hngel4.on('message', message => {
    if(message.content === '-ط±ط§طھط¨'){
        message.channel.send('#daily')
    }
});

hngel4.on('message', message => {
    if(message.content === '-ظ…ط¨ظ„ط؛'){
        message.channel.send('#credits')
    }
});

hngel4.on('message', message => {
    if(message.content === '-ط±ظٹط¨'){
        message.channel.send('#credits')
    }
});hngel5.on('message', message => {
    if(message.content === '-ط±ط§طھط¨'){
        message.channel.send('#daily')
    }
});

hngel5.on('message', message => {
    if(message.content === '-ظ…ط¨ظ„ط؛'){
        message.channel.send('#credits')
    }
});

hngel5.on('message', message => {
    if(message.content === '-ط±ظٹط¨'){
        message.channel.send('#credits')
    }
});


hngel.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 50000; x++) {
        message.channel.send(`**ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

hngel2.on('message', message => { 
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 50000; x++) {
        message.channel.send(`**ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
hngel3.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 50000; x++) {
            message.channel.send(`**ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ  **[ " ${x} " ]`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    hngel4.on('message', message => {
        if (message.content === '!spam') {
              let count = 0;
              let ecount = 0;
              for(let x = 0; x < 50000; x++) {
                message.channel.send(`**ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ  **[ " ${x} " ]`)
                  .then(m => {
                    count++;
                  })
                  
                }
              }
        });
        hngel5.on('message', message => {
            if (message.content === '!spam') {
                  let count = 0;
                  let ecount = 0;
                  for(let x = 0; x < 50000; x++) {
                    message.channel.send(`**ًں…¶ًں…¾ًں…¾ًں…³ ًں…½ًں…¸ًں…¶ًں…·ًں†ƒ  **[ " ${x} " ]`)
                      .then(m => {
                        count++;
                      })
                      
                    }
                  }
            });
                        //MR.HNGEL


hngel.login(process.env.HNGEL);//MR.HNGEL
hngel2.login(process.env.HNGEL2);
hngel3.login(process.env.HNGEL3);
hngel4.login(process.env.HNGEL4);
hngel5.login(process.env.HNGEL5);

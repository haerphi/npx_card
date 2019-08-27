#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');




class basicCard {
    constructor() {
        this.myText =
            `
                   Haerens Philippe / ${chalk.yellow('haerphi')}
               I'm junior web developer at becode
npm:        https: //www.npmjs.com/${chalk.red('~haerphi')}
GitHub:     https: //github.com/${chalk.green('haerphi')}
LinkedIn:   https: //www.linkedin.com/in/${chalk.blue('philippe-haerens-aa0983186/')}
Card:       ${chalk.green('npx @haerphi/card')}
`;
    }
    start() {

        console.log(boxen(this.myText, {
            padding: 1,
            borderColor: "magenta",
            borderStyle: "classic"
        }));
    }
}

class animatedCard {
    constructor() {
        this.frame3 = [
            `
     ,-,
    / (
    \\ {
     \`-\`

          *       *    
    *   *   *       *
      *   *           *
        .__. .__.      
        |::| |::|           
._.     |::| |::|   ._.     
|:| ._. |::| |::|   |/|     
|:|_|/| |::| |::|_  |/|     
|:|"|/|_|::| |::|\\|_|/| _   
|:|"|/|||::| |::|\\|||/||:|  

                   Haerens Philippe / ${ chalk.yellow('haerphi') }
               I'm junior web developer at becode
            npm: https: //www.npmjs.com/${chalk.red('~haerphi')}
            GitHub: https: //github.com/${chalk.green('haerphi')}
            LinkedIn: https: //www.linkedin.com/in/${chalk.blue('philippe-haerens-aa0983186/')}
            Card: ${ chalk.green('npx @haerphi/card') }
`,
            `
     ,-,
    / (
    \\ {
     \`-\`
    *       *   *   *  
      *       *        
                    *  
      *       *       *
        .__. .__.      
        |::| |::|           
._.     |::| |::|   ._.     
|:| ._. |::| |::|   |/|     
|:|_|/| |::| |::|_  |/|     
|:|"|/|_|::| |::|\\|_|/| _   
|:|"|/|||::| |::|\\|||/||:|

                   Haerens Philippe / ${ chalk.yellow('haerphi')}
               I'm junior web developer at becode
            npm: https: //www.npmjs.com/${chalk.red('~haerphi')}
            GitHub: https: //github.com/${chalk.green('haerphi')}
            LinkedIn: https: //www.linkedin.com/in/${chalk.blue('philippe-haerens-aa0983186/')}
            Card: ${ chalk.green('npx @haerphi/card')}
            `
        ];
        this.h = 0;
        this.usingFrames = this.frame3;
        this.maxFrame = this.usingFrames.length * 5;
        this.intervalID = null;
    }


    nextFrame() {
        this.clear();
        console.log(boxen(this.usingFrames[this.h % this.usingFrames
            .length], {
            padding: 1,
            borderColor: "magenta",
            borderStyle: "classic"
        }));
        this.h++;
        console.log(`animamtion frames: ${this.h} / ${this.maxFrame}`);
        if (this.h >= this.maxFrame) {
            console.log("End of the animation");
            clearInterval(this.intervalID);
        }
    }

    clear() {
        console.clear();
    }
    start() {
        this.intervalID = setInterval(() => {
            this.nextFrame()
        }, 500);
    }
}

// Get the arguments we need (2 type of card)
// default : basic one
let choice = "";
process.argv.forEach((val, index) => {
    if (index === 2) {
        if (val === "basic") {
            choice = "basic";
            let basic = new basicCard();
            basic.start();
        } else if (val === "animated") {
            choice = "animated";
            let anime = new animatedCard();
            anime.start();
        }
    }
});
if (choice === "") {
    let basic = new basicCard();
    basic.start();
}
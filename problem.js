const fs = require('fs')


const data = fs.readFile('input.txt', 'utf8', (err, data) => {

    var op=data.split('\r\n')
    

    function one(input) {
        const instructions = input
      
        let accumulator = 0;
        let currentIndex = 0;
        let stepsVisited = [];
      
        while (!stepsVisited.includes(currentIndex)) {
          stepsVisited.push(currentIndex);
      
          const [, operation, units] = /(acc|jmp|nop)\s([+-]\d*)/.exec(instructions[currentIndex]);
      
          switch (operation) {
            case 'acc':
              accumulator += parseInt(units);
              currentIndex++;
      
              break;
      
            case 'jmp':
              currentIndex += parseInt(units);
      
              break;
      
            default:
              currentIndex++;
              break;
          }
        }
      
        return accumulator;
      }
      let result = one(op)
      console.log(result)
})
let coinFlip;
let loop = prompt("How many coin flips?");
for (let i = 1; i <= loop; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
     } else if (coinFlip === 1) {
         console.log("Tails");
     }
}

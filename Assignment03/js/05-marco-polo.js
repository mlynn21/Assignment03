for (let num = 1; num <= 100; num++) {
    
    if (num % 3 === 0 && num % 5 === 0) {
        document.write('Marco! Polo!' + '<br>'); } else if (num % 3 === 0) {
        document.write('Marco!' + '<br>') } else if (num % 5 === 0) {
        document.write('Polo!' + '<br>') } else {
        document.write(num + '<br>');
            }    
    } 
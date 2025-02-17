/* 
1.ekta singarar dam 7tk
2.ekta somusar dam 10tk
3.ekta jilapir dam 15tk

## ekn sei jodi bibinno sonkar singara,somusa, & jilapi order kore thle total koto tk hobe setta return korte hbe.

*/

function PandaCost(singara,somusa,jilapi) {

    const totalSingararPrice = singara *7;
    const totalSomusarPrice = somusa * 10;
    const totalJilapirPricee = jilapi * 15;
    const subTotal = totalSingararPrice + totalSomusarPrice + totalJilapirPricee;
    
    return `singara,somusa & jilapir total price holo ${subTotal.toFixed(2)} tk`;
}

console.log(PandaCost(2,2,2))

// node beginer_problem1.js
/* 
1.ekta singarar dam 7tk
2.ekta somusar dam 10tk
3.ekta jilapir dam 15tk

## ekn sei jodi bibinno sonkar singara,somusa, & jilapi order kore thle total koto tk hobe setta return korte hbe.

*/

function PandaCost(singara,somusa,jilapi) {

if(typeof singara !== 'number' || typeof somusa !== 'number'  || typeof jilapi !=='number'){
    return 'argument value shuld be numbers otherwise calcuatee korbona. '

}

else if(singara <0 || somusa <0 || jilapi <0) {
return 'vai positive argument den, negative value jog biok korina.'
}


else{
    const totalSingararPrice = singara *7;
    const totalSomusarPrice = somusa * 10;
    const totalJilapirPricee = jilapi * 15;
    const subTotal = totalSingararPrice + totalSomusarPrice + totalJilapirPricee;

    return `singara,somusa & jilapir total price holo ${subTotal.toFixed(2)} tk`;
}

}

console.log(PandaCost(1,100,2))//sob kisu titkak thakle tkn : 
// console.log(PandaCost(2,2,-2))// argument er vlaue jodi negative value dei tkn : 
// console.log(PandaCost(2,true,2))// sob  argument value type jodi number na hoi.

// node beginer_problem1.js
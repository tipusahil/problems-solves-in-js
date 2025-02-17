// validation check korar sytem &  function:
// validation check kora hoi sotik/correct input ta user theke newar jonno, jate vul input diye par pete na pare.
function  validationCheck(peramitar) {

if(typeof peramitar !=='object'){
    return '1.vai argument hisebe shudo object e den';
}

else if(!peramitar.name || !peramitar.age){
    return '2.vai object e name & age property must dite hobe. ( !peramitar.age) shurote (!) ei sign ta diye multo bujano hoise j jodi nama/age ta na thake. '
}

else if(typeof peramitar.name || typeof peramitar.age ==='boolean') {
return '5.boolean value caccina vai, name er valu string & age er value number type value diben ';
}

else if(typeof peramitar.name !== 'string' || typeof peramitar.age !=='number'){
    return '3.vai apnr name string type name dite hobe, & apnr age o number type dite hobe.'
}

else if(peramitar.age <=0){
    return 'vai apnar agee to 0 ba tar kom hotee parena . so age tiktak diben & positive number diben';
}




return `6.tomar name holo ${peramitar.name}. & toamr age holo ${peramitar.age} tmr input tiktak ase.`
}

// console.log(validationCheck( {name:'muhammad' ,age:23 } ));//condi-6: jodi sob conditon titkak thakee tkn ekdm niser ta return korbe.ar jodi kuno ekta condition o vul /invalid hoi tkn jei conditon valid hoini sei conditon  er vitore thaka return valuee ta print korbe.


console.log(validationCheck( {name:'muhammad' ,age:true } ));//condi-5: jodi age kinba name er value boolean hoi tahlew bolbe.

// console.log(validationCheck( {name:'muhammad' ,age: -1 } ));//condi-4: age er value 0 ba tar kom hole tkn bolbe

// console.log(validationCheck( {name:'muhammad' ,age:'23' } ));//condi-3: object er name er value jodi string type na hoi & age er value jodi number type na hole 

// console.log(validationCheck( {name:'muhammad' } ));//condi-2: jodi objeect ee name / age propeerty nathake .


// console.log(validationCheck( hello ));//condi-1: argument hisebe object pass korte hobe.



// const returnedValue1 = validationCheck( {name:'muhammad' ,age:23 } );//peraitar hisebe object dewa hoise.
// console.log(returnedValue);



// node validation_cheeck.js
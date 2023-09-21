// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
    const distanceFromHqInBlocks = distance -42;
    return distanceFromHqInBlocks;
    } else (distance < 42)
     const   distanceFromHqInBlocks = 42 - distance;
    return distanceFromHqInBlocks;
}
    
console.log(distanceFromHqInBlocks(20));

//second test

function distanceFromHqInFeet(block){
    if (block > 42){
   const distanceFromHqInFeet = (block - 42) * 264
   return distanceFromHqInFeet
    } else (block < 42)
    const distanceFromHqInFeet = (42-block) * 264
    return distanceFromHqInFeet;
}
console.log(distanceFromHqInFeet(40));

//third test
function distanceTravelledInFeet(x,y){
    if (x > y){
        const distanceTravelledInFeet = (x-y)  * 264;
        return distanceTravelledInFeet;
    } else (x< y)
    const distanceTravelledInFeet = (y-x) * 264;
    return distanceTravelledInFeet;
}
console.log(distanceTravelledInFeet(20,15));

//forth test
function calculatesFarePrice (x,y){
    let feet = (x-y) * 264
    if (feet < 400){
        return 0;
    }else if( feet > 400 && feet < 2000){
        let calculatesFarePrice = (feet-400) * 0.02;
        return calculatesFarePrice;
    } else if (feet > 2000 && feet < 2500){
        let calculatesFarePrice = 25;
        return calculatesFarePrice;
    } else (feet > 2500)
    return 'cannot travel that far'; 
}
console.log(calculatesFarePrice(58,50));

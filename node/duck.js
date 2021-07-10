let flying = false;
let quaking = false;
let xPos = 0;
let yPos = 0;

module.exports.takeOff = () =>{
    flying = true;
    return flying;
}
module.exports.land = () =>{
    flying = false;
    return flying;
}
module.exports.startQuacking = () =>{
    quaking = true;
    return quaking;
}
module.exports.stopQuacking = () =>{
    quaking = false;
    return quaking;
}
module.exports.moveTo = (x,y) =>{
    xPos = x;
    yPos = y;
    console.log(`Duck is swimming to ${x},${y}`);
    console.log(`Duck is swimming to ${x},${y} while quacking`);
    console.log(`Duck is flying to ${x},${y}`);
    console.log(`Duck is flying to ${x},${y} while quacking`);
}







// JAVASCRIPT CRASH COURSE BATCH - 3
// MID TERM ASSIGNMENT
// Name : Iqbal Mahdi
// Email : mahdiiqbal37@gmail.com
// ================================================ TASK 1 ===================================================

let f = 0;

function inchToFeet(n){
    f = n/12;
}

function feetToMile(){
    let m = f/5280;
    console.log(m);
}

let i = 1200;

feetToMile(inchToFeet(i));

// ================================================ TASK 2 ===================================================

function woodCalc(c, t, b){
    let wood = (c*1) + (t*3) + (b*5);
    console.log(wood + ' cubic feet wood is required.');
}

let chair = 5;
let table = 2;
let bed = 1;

woodCalc(chair, table, bed);

// ================================================ TASK 3 ===================================================

function brickCalc(flr){
    
    let brickPerFeet = 1000;
    let feetPerFloor = 0;
    let totalBrick = 0;
    
    for(let i=1; i <= flr; i++){
        if(i <= 10){
            feetPerFloor = 15;
            totalBrick += (feetPerFloor*brickPerFeet);
        }
        
        else if(i > 10 && i <= 20){
            feetPerFloor = 12;
            totalBrick += (feetPerFloor*brickPerFeet);
        }
        
        else if(i > 20){
            feetPerFloor = 10;
            totalBrick += (feetPerFloor*brickPerFeet);
        }    
    }
    
    console.log('Total '+totalBrick+' bricks required.');
}

let floors = 22;

brickCalc(floors);

// ================================================ TASK 4 ===================================================

function shortestName(a){
    let lengthNew = 0;
    let lengthPrev = 1000000;
    let friendName = '';

    a.forEach(element => {
        lengthNew = element.length;
        if(lengthNew < lengthPrev){
            friendName = element;
            lengthPrev = lengthNew;
        }
        else if(lengthNew == lengthPrev){
            friendName = `${friendName}, ${element}`;
        }
    });

    console.log(friendName);
}

const friends = ['Rony', 'Helal', 'Arif', 'Hafiz', 'Zeem', 'Tipu'];

shortestName(friends);

// ================================================ TASK 5 ===================================================

let officeJabo = false;

if(officeJabo == true){
    console.log('Chata niye ber hobo.');
}
else{
    console.log('Shorir kharap janiye office e mail korbo.');
    console.log('Khichri ranna korbo.');
    
    let goru = true;
    
    if(goru == true){
        console.log('Sathe gorur mangso ranna korbo.');
    }
    
    else{
        console.log('Dim vaji diye kheye nibo.');
    }
}
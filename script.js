// home incrementation 
let countElHome = document.getElementById("home-num")
let countHome = 0;



function incrementByOneHome() {
    countHome++
    countElHome.textContent = countHome;

}

function incrementByTwoHome() {
    countHome +=2
    countElHome.textContent = countHome;

}

function incrementByThreeHome() {
    countHome+=3;
    countElHome.textContent = countHome;

}

//guest incrementation

let countElGuest = document.getElementById("guest-num")
countGuest = 0;


function incrementByOneGuest() {

    countGuest++ 
    countElGuest.textContent =  countGuest;

}

function incrementByTwoGuest() {

    countGuest+=2
    countElGuest.textContent =  countGuest;

}

function incrementByThreeGuest() {

    countGuest+=3
    countElGuest.textContent =  countGuest;

}



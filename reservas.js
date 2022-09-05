// Standard= 100€  /  Junior= 120€  /  Suite= 150€
// SPA= +20€
// Individual= -25%  /  Doble  /  Triple= +25%
// Parking= +10€

var room = {
    standard: 100,
    junior: 120,
    suite: 150
};

var roomPrice = 0;
document.getElementById("room-type").addEventListener("change", roomType);
function roomType() {
    switch (document.getElementById("room-type").value) {
        case "standard": roomPrice = room.standard; break;
        case "junior": roomPrice = room.junior; break;
        case "suite": roomPrice = room.suite; break;
    }
    finalPriceCalc();
};

var spa = 0;
document.getElementById("check-spa").addEventListener("change", spaCalc);
function spaCalc() {
    (document.getElementById("check-spa").checked) ? spa = 20 : spa = 0;
    finalPriceCalc();
};

var occupationPrice = 1;
document.getElementById("room-occupation").addEventListener("change", occupationCalc);
function occupationCalc() {
    switch (document.getElementById("room-occupation").value) {
        case "single": occupationPrice = 0.75; break;
        case "double": occupationPrice = 1; break;
        case "triple": occupationPrice = 1.25; break;
    }
    finalPriceCalc();
};

var nights = 1;
document.getElementById("nights-count").addEventListener("change", () => {
    nights = (document.getElementById("nights-count").value);
    finalPriceCalc();
});

var parking = 0;
document.getElementById("parking-nights").addEventListener("change", () => {
    parking = (10 * document.getElementById("parking-nights").value);
    finalPriceCalc();
});

var finalPrice = 0;
// document.getElementById("calculate").addEventListener("click", finalPriceCalc);
function finalPriceCalc() {
    finalPrice = (roomPrice + spa) * occupationPrice * nights + parking;
    document.getElementById("final-price").innerText = finalPrice + "€"
};
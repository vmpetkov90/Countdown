let finalDate = new Date(2021, 3, 13, 19, 30);
let currentDate = new Date();
let countdown = finalDate - currentDate;
let oldDays = Math.floor(countdown / (1000 * 60 * 60 * 24));
let oldHours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
let oldMinutes = Math.floor((countdown / (1000 * 60)) % 60);
let oldSeconds = Math.floor((countdown / 1000) % 60);

if (countdown > 0) {
    $("#days .card-parts:nth-child(-n+2) span").text(addZero(oldDays));
    $("#days .card-parts:nth-last-child(-n+2) span").text(addZero(oldDays));

    $("#hours .card-parts:nth-child(-n+2) span").text(addZero(oldHours));
    $("#hours .card-parts:nth-last-child(-n+2) span").text(addZero(oldHours));

    $("#minutes .card-parts:nth-child(-n+2) span").text(addZero(oldMinutes));
    $("#minutes .card-parts:nth-last-child(-n+2) span").text(addZero(oldMinutes));

    $("#seconds .card-parts:nth-child(-n+2) span").text(addZero(oldSeconds));
    $("#seconds .card-parts:nth-last-child(-n+2) span").text(addZero(oldSeconds));
}

let timer = setInterval(function () {
    if (countdown > 0) {
        updateDate();
    }

    fixTimer();

}, 1000);

updateDate();

function updateDate() {
    let currentDate = new Date();
    let countdown = finalDate - currentDate;
    let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((countdown / (1000 * 60)) % 60);
    let seconds = Math.floor((countdown / 1000) % 60);

    if (oldMinutes != minutes) {
        rotateCards("minutes", minutes);
        oldMinutes = minutes;
        $("#minutes .card-parts:nth-child(-n+2) span").text(addZero(minutes));
    }

    if (oldSeconds != seconds) {
        rotateCards("seconds", seconds);
        oldSeconds = seconds;
        $("#seconds .card-parts:nth-child(-n+2) span").text(addZero(seconds));
    }

    if (oldHours != hours) {
        rotateCards("hours", hours);
        oldHours = hours;
        $("#hours .card-parts:nth-child(-n+2) span").text(addZero(hours));
    }
    if (oldDays != days) {
        rotateCards("days", days);
        oldDays = days;
        $("#hours .card-parts:nth-child(-n+2) span").text(addZero(hours));
    }

    if (countdown < 1000) {
        clearInterval(timer);
    }
}

function rotateCards(card, num) {

    $(`#${card} .lower-part`)
        .addClass("upper-part")
        .removeClass("lower-part")
        .prev().addClass("lower-part").removeClass("upper-part")
        .prev().addClass("lower-part").removeClass("upper-part");



    setTimeout(function () {
        $(`#${card} .card`)
            .prepend(`<div class="upper-part card-parts"><span></span></div>
                    <div class="upper-part card-parts"><span></span></div>`);
        $(`#${card} .card-parts:nth-last-child(-n+2)`).remove();




    }, 500);
}

function addZero(num) {


    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function fixTimer() {
    if ($("#hours .card-parts:nth-child(1) span").text() === "0-1") {
        $("#hours .card-parts:nth-child(-n+2) span").text(23);
    }
    if ($("#minutes .card-parts:nth-child(1) span").text() === "0-1") {
        $("#minutes .card-parts:nth-child(-n+2) span").text(59);
    }
    if ($("#seconds .card-parts:nth-child(1) span").text() === "0-1") {
        $("#seconds .card-parts:nth-child(-n+2) span").text(59);
    }
}

let finalDate = new Date(2023, 1, 1);
let currentDate = new Date();
let countdown = finalDate - currentDate;
let oldDays = Math.floor(countdown / (1000 * 60 * 60 * 24));
let oldHours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
let oldMinutes = Math.floor((countdown / (1000 * 60)) % 60);
let oldSeconds = Math.floor((countdown / 1000) % 60);

let timer = setInterval(function () {

    updateDate();

}, 1000);

function updateDate() {
    let currentDate = new Date();
    let countdown = finalDate - currentDate;
    let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((countdown / (1000 * 60)) % 60);
    let seconds = Math.floor((countdown / 1000) % 60);

    if (countdown > 0) {
        $("#days span").text(addZero(oldDays));

        $("#hours span").text(addZero(oldHours));

        $("#minutes span").text(addZero(oldMinutes));

        $("#seconds span").text(addZero(oldSeconds));
    }

    if (oldMinutes != minutes) {
        rotateCards("minutes");
        oldMinutes = minutes;
        $("#minutes .card-parts:nth-child(-n+2) span").text(addZero(minutes));
    }

    if (oldSeconds != seconds) {
        rotateCards("seconds");
        oldSeconds = seconds;
        $("#seconds .card-parts:nth-child(-n+2) span").text(addZero(seconds));
    }

    if (oldHours != hours) {
        rotateCards("hours");
        oldHours = hours;
        $("#hours .card-parts:nth-child(-n+2) span").text(addZero(hours));
    }
    if (oldDays != days) {
        rotateCards("days");
        oldDays = days;
        $("#days .card-parts:nth-child(-n+2) span").text(addZero(days));
    }

    if (countdown < 1000) {
        clearInterval(timer);
    }


}

function rotateCards(card) {

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

updateDate();

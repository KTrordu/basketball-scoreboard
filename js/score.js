let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.querySelector(".home-count");
let guestScoreEl = document.querySelector(".guest-count");

function addHomeScore1() {
    homeScoreEl.textContent = ++homeScore;
}

function addHomeScore2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addHomeScore3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addGuestScore1() {
    guestScoreEl.textContent = ++guestScore;
}

function addGuestScore2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addGuestScore3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetBoard() {
    homeScore = 0;
    guestScore = 0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
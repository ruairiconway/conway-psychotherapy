'use strict'

function psychoButton() {
    $('#content-psycho > .content-button').on("click", () => {
        $('#content-psycho > .content-p').toggleClass('hidden', 1000, "easeOutSine");
    })
}

function backgroundButton() {
    $('#content-background > .content-button').on("click", () => {
        $('#content-background > .content-p').toggleClass('hidden');
    })
}

function approachButton() {
    $('#content-approach > .content-button').on("click", () => {
        $('#content-approach > .content-p').toggleClass('hidden');
    })
}

function watchContentButtons() {
    psychoButton()
    backgroundButton()
    approachButton()
}

$(watchContentButtons)
'use strict'


// ==== QUOTE ROTATION

const quotes = [
    {
        line: `"Only the present moment is real."`,
        attr: `- Thich Nhat Hanh`
    },
    {
        line: `"The road to recovery is the road to life."`,
        attr: `- Bessel Van der Kolk`
    },
    {
        line: `"Who looks outside dreams, who looks inside awakes."`,
        attr: `- Carl Yung`
    }
]

let count = 0

function handleQuote(quotes) {
    let limit = quotes.length - 1
    if (count !== limit) {
        count += 1
        return quotes[count]
    } else {
        count = 0
        return quotes[count]
    }
}

function cycleQuote() {
    setInterval(() => {
        let currentQuote = handleQuote(quotes)
        $(`.js-quote-line`).html(`${currentQuote.line}`)
        $(`.js-quote-attr`).html(`${currentQuote.attr}`)
    }, 3000);
}


// ==== CONTENT ACCORDIAN

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

$(cycleQuote)
$(watchContentButtons)
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
        line: `"Who looks outside dreams,<br />who looks inside awakes."`,
        attr: `- Carl Yung`
    }
]

let quoteCount = 0

function updateQuote(array) {
    // quoteCount incremented and used as index for quotes[]
    let countLimit = array.length - 1
    if (quoteCount !== countLimit) {
        quoteCount += 1
    } else {
        quoteCount = 0
    }
    console.log(quoteCount)
    $(`.js-quote-line`).html(`${array[quoteCount].line}`)
    $(`.js-quote-attr`).html(`${array[quoteCount].attr}`)
}

function handleQuote(array) {
    // Looped, quote fades out for text change, then fades in again
    setInterval(() => {
        $(`.js-quote`)
            .fadeOut(750, function() {updateQuote(array)} )
            .fadeIn(750)
    }, 4500);
}


// ==== CONTENT ACCORDIAN

function psychoButton() {
    //toggles content on click
    $('#content-psycho > .content-button').on("click", () => {
        $('#content-psycho > .content-p').toggleClass('hidden', 1000, "easeOutSine");
    })
}

function backgroundButton() {
    //toggles content on click
    $('#content-background > .content-button').on("click", () => {
        $('#content-background > .content-p').toggleClass('hidden');
    })
}

function approachButton() {
    //toggles content on click
    $('#content-approach > .content-button').on("click", () => {
        $('#content-approach > .content-p').toggleClass('hidden');
    })
}

function watchContentButtons() {
    //sets up event listeners for content buttons
    psychoButton()
    backgroundButton()
    approachButton()
}


// ==== ON LOAD

$(handleQuote(quotes))
$(watchContentButtons)
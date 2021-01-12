'use strict'


// ==== ACCESSIBILITY

function handleFirstTab(e) {
    if (e.keyCode === 9) {
        $('body').addClass('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }
}
  
function handleMouseDownOnce() {
    $('body').removeClass('user-is-tabbing')
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)


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
    $(`.js-quote-line`).html(`${array[quoteCount].line}`)
    $(`.js-quote-attr`).html(`${array[quoteCount].attr}`)
}

function handleQuote(array) {
    // Looped, quote fades out for text change, then fades in again
    setInterval(() => {
        $(`.js-quote`)
            .fadeOut(750, function() {updateQuote(array)} )
            .fadeIn(750)
    }, 4500)
}


// ==== CONTENT ACCORDIAN

function psychoButton() {
    //toggles content on click
    $('#content-psycho > .content-button').on("click", () => {
        $('#psycho-icon').toggleClass('rotate-icon')
        $('#content-psycho > .content-button').toggleClass('active')
        $('#content-psycho > .content-p').toggleClass('hidden')
    })
}

function backgroundButton() {
    //toggles content on click
    $('#content-background > .content-button').on("click", () => {
        $('#background-icon').toggleClass('rotate-icon')
        $('#content-background > .content-button').toggleClass('active')
        $('#content-background > .content-p').toggleClass('hidden')
    })
}

function approachButton() {
    //toggles content on click
    $('#content-approach > .content-button').on("click", () => {
        $('#approach-icon').toggleClass('rotate-icon')
        $('#content-approach > .content-button').toggleClass('active')
        $('#content-approach > .content-p').toggleClass('hidden')
    })
}

function watchContentButtons() {
    //sets up event listeners for content buttons
    psychoButton()
    backgroundButton()
    approachButton()
}

function handlePageFadeOnLoad() {
    $('body').css('display', 'none').delay(250).fadeIn(750, "swing");
}

// ==== ON LOAD

$(handlePageFadeOnLoad)
$(handleQuote(quotes))
$(watchContentButtons)
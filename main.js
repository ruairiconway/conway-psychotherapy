'use strict'


// ==== QUOTE ROTATION

const quotes = [
    {
        line: `"Only the present moment is real."`,
        attr: `Thich Nhat Hanh`
    },
    {
        line: `"The road to recovery is the road to life."`,
        attr: `Bessel Van der Kolk`
    },
    {
        line: `"Who looks outside dreams,<br />who looks inside awakes."`,
        attr: `Carl Yung`
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
    $(`.js-quote-attr`).html(`- ${array[quoteCount].attr}`)
}

function handleQuote(array) {
    // Looped, quote fades out for text change, then fades in again
    const quoteRotation = setInterval(() => {
        $(`.js-quote`)
            .fadeOut(750, function() {updateQuote(array)} )
            .fadeIn(750)
    }, 4500)
}


// ==== SCROLL ARROW

function handleAnchorButton() {
    // controls smooth scroll to main content
    $('#scroll-arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#main').top
        }, 400);
    })
}


// ==== CONTENT ACCORDIAN

function handleSection1Button() {
    // toggles content on click
    $('#content-section-1 > .content-button').on("click", () => {
        $('#section-1-icon').toggleClass('rotate-icon')
        $('#content-section-1 > .content-button').toggleClass('active')
        $('#content-section-1 > .content-p').slideToggle(350)
    })
}

function handleSection2Button() {
    //toggles content on click
    $('#content-section-2 > .content-button').on("click", () => {
        $('#section-2-icon').toggleClass('rotate-icon')
        $('#content-section-2 > .content-button').toggleClass('active')
        $('#content-section-2 > .content-p').slideToggle(350)
    })
}

function handleSection3Button() {
    //toggles content on click
    $('#content-section-3 > .content-button').on("click", () => {
        $('#section-3-icon').toggleClass('rotate-icon')
        $('#content-section-3 > .content-button').toggleClass('active')
        $('#content-section-3 > .content-p').slideToggle(350)
    })
}


// ==== SETUP

function watchButtons() {
    //sets up event listeners for buttons
    handleAnchorButton()
    handleSection1Button()
    handleSection2Button()
    handleSection3Button()
}

function handlePageFadeOnLoad() {
    //sets fade in of page on load
    $('body').css('display', 'none').delay(250).fadeIn(750, "swing");
}

function handleScroll() {
    $(window).scroll( () => {
        if ($(this).scrollTop() > 100) {
            $('#scroll-arrow').fadeOut(150, "swing")
        } else {
            $('#scroll-arrow').fadeIn(150, "swing")
        }
    })
}


// ==== ON LOAD

$(handlePageFadeOnLoad)
// $(handleVideoOnLoad)
$(watchButtons)
$(handleQuote(quotes))
$(handleScroll)
'use strict'


// ==== ACCESSIBILITY

function handleFirstTab(e) {
    // adds class .user-is-tabbing to body if tab key hit
    if (e.keyCode === 9) {
        $('body').addClass('user-is-tabbing')
        $(window).off('keydown', handleFirstTab).on('mousedown', handleMouseDownOnce)
    }
}
  
function handleMouseDownOnce() {
    // removes class .user-is-tabbing from body on screen click
    $('body').removeClass('user-is-tabbing')
    $(window).off('mousedown', handleMouseDownOnce).on('keydown', handleFirstTab)
}

// calls handleFirstTab() on keydown
$(window).on('keydown', handleFirstTab)


// ==== DESKTOP VIDEO

function generateVideoHtml() {
    // returns video html
    return `
    <video autoplay muted loop poster="assets/waterfall-static.png" id="bg-video">
        <source src="assets/waterfall.mp4" type="video/mp4">
    </video>`
}

function handleVideoOnLoad() {
    // if screen is desktop sized, generate video HTML
    if ($(window).width() > 1015) {
        const videoHtml = generateVideoHtml()
        $('body').prepend(videoHtml)
    }
}


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
    setInterval(() => {
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

function handlePsychoButton() {
    // toggles content on click
    $('#content-psycho > .content-button').on("click", () => {
        $('#psycho-icon').toggleClass('rotate-icon')
        $('#content-psycho > .content-button').toggleClass('active')
        $('#content-psycho > .content-p').slideToggle(350)
    })
}

function handleBackgroundButton() {
    //toggles content on click
    $('#content-background > .content-button').on("click", () => {
        $('#background-icon').toggleClass('rotate-icon')
        $('#content-background > .content-button').toggleClass('active')
        $('#content-background > .content-p').slideToggle(350)
    })
}

function handleApproachButton() {
    //toggles content on click
    $('#content-approach > .content-button').on("click", () => {
        $('#approach-icon').toggleClass('rotate-icon')
        $('#content-approach > .content-button').toggleClass('active')
        $('#content-approach > .content-p').slideToggle(350)
    })
}


// ==== SETUP

function watchButtons() {
    //sets up event listeners for buttons
    handleAnchorButton()
    handlePsychoButton()
    handleBackgroundButton()
    handleApproachButton()
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
$(handleVideoOnLoad)
$(watchButtons)
$(handleQuote(quotes))
$(handleScroll)
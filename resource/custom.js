AOS.init(); //AOS Animation

// Google sheets form connect 
var scriptURL = "https://script.google.com/macros/s/AKfycbzGjhp5XLyPXgwOjkukzIXoQ4QIUzo5ABkMX8-JNt9GqHyrhHDRXmGmTRV2G6H1emR23A/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alerts_pts();
            $('#contactModal').modal('hide');
            // submit  hit in get in touch then automatic close modal 
        })
        .catch(error => console.error('Error!', error.message));
});
// alert of get in touch is on body 
function alerts_pts() {
    GIT_alert.innerHTML = ("Thanks for Contacting us..! We Will Contact You Soon...")
    GIT_alert.classList.add("GIT_alert-JS");
}

//Scroll button

$(document).ready(function() {
    // Hide the button initially
    $("#top-button").hide();

    // Show the button when scrolling down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#top-button").fadeIn();
        } else {
            $("#top-button").fadeOut();
        }
    });

    $("#top-button").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
});
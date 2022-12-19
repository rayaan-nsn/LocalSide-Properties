/* <<<--------- HomePage automatic slideshow --------->>> */

const slideshowIds = ["slideshow1", "slideshow2", "slideshow3"];

for (let i = 0; i < slideshowIds.length; i++) {
    const id = slideshowIds[i];
    $(`#${id} > img:gt(0)`).hide();

    setInterval(function () {
        $(`#${id} :first-child`)
            .fadeOut(2000)
            .hide()
            .next("img")
            .fadeIn(2000)
            .end()
            .appendTo(`#${id}`);
    }, 3500);
}

/* <<<--------- Property Page --------->>> */

// Code for the PropertyType slect Menu
$("#propertyType").selectmenu({
    width: 200,
});

// Tab Function
$(function () {
    $("#tabs").tabs();
});

//More details Show/Hide
$(document).ready(function () {
    $(".seeMore").click(function () {
        $("#tabs").slideToggle();
    });
});

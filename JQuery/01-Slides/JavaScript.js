function main() {
    $("img").hide();
    $(".selected").show();
}

function previous() {

    var $pre = $(".selected").prev().length > 0 ? $(".selected").prev() : $("img").last();
    $(".selected").removeClass("selected");
    $pre.addClass("selected");
    main();
}

function next() {

    var $next = $(".selected").next().length > 0 ? $(".selected").next() : $("img").first();
    $(".selected").removeClass("selected");
    $next.addClass("selected");
    main();
}

function timer() {
    window.setInterval(next, 5000);
}
/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\JQuery\04.ChangeBackground\Libs/jquery-2.1.1.min.js" />
function change() {
    var $color = $('[type="color"]').val();
    $('body').css('background', $color);
}
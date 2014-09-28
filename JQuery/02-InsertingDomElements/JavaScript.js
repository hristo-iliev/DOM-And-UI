/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\JQuery\02-InsertingDomElements\Libs/jquery-2.1.1.min.js" />
function main() {
    var selected = $("#selected").val().toLowerCase();
    var el = $("#element").val().toLowerCase();
    var where = $('input[name=add]:radio:checked').val();

    
    var $element = $('<' + el + '>', { html: el.toUpperCase() });
    if ($element.is("a")) {
        $element.attr("href", "#");
    }
    if (where == "before") {
        $(selected).before($element);
    } else {
        $(selected).after($element);
    }
}
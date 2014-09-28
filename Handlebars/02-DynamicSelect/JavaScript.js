/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\Handlebars\02-DynamicSelect\Libs/handlebars-v1.3.0.js" />
(function () {
    var stringTemplate = document.getElementById("select").innerHTML;
    var template = Handlebars.compile(stringTemplate);

    var items = [
        { value: 1, text: "One" },
        { value: 2, text: "Two" },
        { value: 3, text: "Three" },
        { value: 4, text: "Four" },
        { value: 5, text: "Five" },
        { value: 6, text: "Six" },
        { value: 7, text: "Seven" },
        { value: 8, text: "Eight" },
        { value: 9, text: "Nine" },
        { value: 10, text: "Ten" }
    ];

    document.body.innerHTML = template({ options: items });
})();
/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\JqueryPlugins\01-DropdownPlugIn\Libs/jquery-2.1.1.min.js" />
function main() {
    $.fn.dropdown = function () {
        var $this = $(this);
        $this.css("display", "none");
        var $container = $('<div>', {
            class: 'dropdown-list-container'
        });
        var $options = $('<ul>', {
            class: 'dropdown-list-options'
        });

        var arr = $this.children("option");
        var $option = $('<li>', {
            class: 'dropdown-list-option'
        });

        var len = arr.length;
        for (var i = 0; i < len; i++) {
            $option = $option.clone();
            var x = $(arr[i]).html();
            var value = $(arr[i]).val();
            $option.attr("value", value);
            $option.html($(arr[i]).html());
            $options.append($option);
        }

        $container.append($options);
        $('#dropdown').after($container);

        $('ul li').on("click", function (ev) {
            var $this = $(this);
            $('.dropdown-list-options li').removeAttr('selected');
            $('.dropdown-list-options li').removeAttr('style');            
            $this.css("background", "#AFFFFF");
            $this.attr("selected", "selected");
            return $this;
        });
    };

    $("#dropdown").dropdown();
}
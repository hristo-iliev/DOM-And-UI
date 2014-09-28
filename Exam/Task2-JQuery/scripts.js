$.fn.tabs = function () {
    var $this = $(this);
    $this.addClass("tabs-container");
    //$(".tabs-container").hide();
    $(".tab-item-content").hide();
    $(".tab-item-content").first().show();
    $(".tab-item-title").on("click", function () {
        var $this = $(this);
        $(".tab-item").removeClass("current");
        $this.parent().addClass("current");
        $(".tab-item-content").hide();
        $this.next().show();
    });
    
    return $this;
};
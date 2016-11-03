particlesJS.load('particles', 'config/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

$(window).on("scroll", function () {
    var $menu = $("#menu");
    var $menuFiller = $("#menu-filler");
    var $header = $("#header");
        
    if ($(this).scrollTop() > $header.offset().top + $header.height()) {
        $menu.addClass("scrolled");
        $menuFiller.show();
    } else {
        $menu.removeClass("scrolled");
        $menuFiller.hide();
    }
    
    $(".title-wrapper").css({
        'transform': 'translateY(-' + $(this).scrollTop() + 'px)'
    });
    
    changeMenuSelection();
});


$("#menu ul li a").on("click", function (e) {
    e.preventDefault();
    
    var id = $(this).attr('href');
    var $el = $(id);
    var menuHeight = $("#menu").height()
    
    // adjust the scroll position
    $('html,body').animate({scrollTop: $el.offset().top - menuHeight}, 500);    
});

var changeMenuSelection = function () {
    var scrollTop = $(window).scrollTop();
    
    $(".section").each(function () {
        var id = $(this).attr("id");
        var menuHeight = $("#menu").height()
        
        if (scrollTop > $(this).offset().top - 2*menuHeight) {
            // remove .selected from all menu items
            $("#menu ul li").removeClass("selected");
            
            // add .selected to current menu item
            $(".menu-item." + id).addClass("selected");
        }
    });
}
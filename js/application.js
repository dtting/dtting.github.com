(function(){

    $(function() {

        // Set Initial Screen Dimensions
        
        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        $(".full-page").css({
            width: screenWidth,
            height: screenHeight
        });

        // Every time the window is resized...
        
        $(window).resize(function() {

            // Fetch Screen Dimensions
            
            var screenWidth = $(window).width() + "px";
            var screenHeight = $(window).height() + "px";

            // Set Slides to new Screen Dimensions
            
            $(".full-page").css({
                width: screenWidth,
                height: screenHeight
            });
        
        });
    });
})(window,jQuery);
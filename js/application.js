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

        $.get('https://api.github.com/users/dtting/repos',function(data){
            $.each(data,function(i,item){
                var proj = $('<div />').addClass('span4');
                $('<i>').addClass('icon icon-github').appendTo(proj);
                $('<a>').text(item.name)
                    .attr('href',item.html_url)
                    .appendTo(proj);
                $('<p>').text(item.description).appendTo(proj);

                $('#projects-list').append(proj);
            });
        });


        $('a').smoothScroll({
          offset: 0,

          // one of 'top' or 'left'
          direction: 'top',

          // only use if you want to override default behavior
          scrollTarget: null,

          // fn(opts) function to be called before scrolling occurs.
          // `this` is the element(s) being scrolled
          beforeScroll: function() {},

          // fn(opts) function to be called after scrolling occurs.
          // `this` is the triggering element
          afterScroll: function() {},
          easing: 'swing',
          speed: 400,

          // coefficient for "auto" speed
          autoCoefficent: 2

        });

        $('#navbar').scrollspy();
    });
})(window,jQuery);
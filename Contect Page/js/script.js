// carousel slide control using jquery
$(document).ready(function(){
    //    To specify time interval of slideShow (2000ms = 2sec)
        $('#myCarousel').carousel({interval:2000});
        
        // when we click on the pause button the pause action occure to stop the slideShow of carousel
        $('#carouselButton').click(function() {
                
            if($('#carouselButton').children('span').hasClass('fa-pause')){

                $('#myCarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }

            else if($('#carouselButton').children('span').hasClass('fa-play')){

                $('#myCarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
            }
            
        });
    
        });
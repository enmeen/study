$(function() {
    var $box2 = $('.box2');
    var $box = $('.box');
    var $one = $('.box').find('.list');
    $one.each(function() {
    	var $this = $(this);
        $this.on('click', function() {
            $box.addClass('left');
            $box2.addClass('left');
            var $content =  $this.html();
            $box2.find('.list').eq(0).html($content);
        })
    })

})

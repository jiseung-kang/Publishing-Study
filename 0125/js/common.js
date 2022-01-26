 $(function() {
    hamModal();
    myFullpage();  
})

function myFullpage() {
    const $myFull = $('#fullpage');
    const $header = $('.pageHeader');

    if( !$myFull) {
        return false;
    }
    $myFull.fullpage({
        'verticalCentered': false,
        'css3': true, 
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['현세_서윤', '효순_은정', '세원_미진', '순상','시찬','희정','지승','혁','정배'],
        'showActiveTooltip':true,

        'onLeave': function(index, nextIndex, direction){
            if (index == 1 && direction == 'down'){
                $header.addClass('sticky'); 
            }
            else if(index == 2 && direction == 'up'){
                $header.removeClass('sticky');
            }

            else if(index == 5 && direction == 'down') {
                $('.area.f img').addClass('show');
            }

            else if(index == 6 && direction == 'up') {
                $('.area.f img').removeClass('show');
            }
        }
    });
}

function hamModal() {
    const $btnHam = $('.btnHam');
    const $dimm = $('.dimm');
    const $modal = $('.modal');
    const $modal2 = $('.modal2');
    const $header = $('.pageHeader');
    const $btnClose = $('.btnClose');
    const $btnTerms = $('.view-modal');

    $btnTerms.click(function() {
        $dimm.fadeIn(100);
        $modal.fadeIn(100);
        $modal.addClass('show');
    })

    $btnHam.click(function() {    
        $header.addClass('full');
        $btnClose.show();
    })

    $btnClose.click(function() {
        $header.removeClass('full');
        $(this).hide();
    })

    $dimm.click(function() {
        $(this).hide();

        if( $modal.hasClass('show') ) {
            $modal.hide(); 
            $modal.removeClass('show');
        }

        $modal2.animate({
            bottom: '-70vh'
        }, 100);
    })
}
 
    
 
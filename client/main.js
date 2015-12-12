var $window = $(window),
    $listener = $('#listener');

// 38 up
// 40 down
// 37 left
// 39 right
// 32 space

$(document).ready(function () {
    console.log('foobar')

    $('button').on('click', function (e) {
        if (e.target.id == 'B') {
            alert('B Clicked')
            var keyVal = 32;
            $listener.trigger ({
                type: 'keypress', keyCode: keyVal, which: keyVal, charCode: keyVal
            });
        }
    } );
});

$window.load(function() {
    initGame();

    // $window.trigger('resize');
}).resize(function () {
    // $('#gameController').height($window.height());
}).on('keydown', function (e) {
    console.log(e.keyCode)
});
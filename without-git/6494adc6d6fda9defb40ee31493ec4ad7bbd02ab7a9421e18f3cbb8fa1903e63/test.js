 function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if ( c > 0 ) {
        window.requestAnimationFrame( scrollToTop );
        window.scrollTo( 0, c - c / 8 );
    }
}



( e ) {
    var t = e.split( "#" ),
        r = u( t, 2 )[ 1 ];
    if ( "" !== r && "top" !== r ) {
        var n = document.getElementById( r );
        if ( n )
            n.scrollIntoView();
        else {
            var o = document.getElementsByName( r )[ 0 ];
            o && o.scrollIntoView()
        }
    } else
        window.scrollTo( 0, 0 )
}


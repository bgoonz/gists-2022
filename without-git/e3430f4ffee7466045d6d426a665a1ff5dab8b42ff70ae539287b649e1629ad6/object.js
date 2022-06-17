const fs = require( 'fs' );
const child_process = require( 'child_process' );
const http = require( 'http' );
const path = require( 'path' );
const readline = require( 'readline' );
const url = require( 'url' );
const util = require( 'util' );
const crypto = require( 'crypto' );
const utilObj = {
    'CSVToArray': function CSVToArray( data, delimiter = ',', omitFirstRow = false ) {
        return data
            .slice( omitFirstRow ? data.indexOf( '\n' ) + 1 : 0 )
            .split( '\n' )
            .map( v => v.split( delimiter ) );
    },
    ' CSVToJSON': function CSVToJSON( data, delimiter = ',' ) {
        const titles = data.slice( 0, data.indexOf( '\n' ) ).split( delimiter );
        return data
            .slice( data.indexOf( '\n' ) + 1 )
            .split( '\n' )
            .map( v => {
                const values = v.split( delimiter );
                return titles.reduce(
                    ( obj, title, index ) => ( ( obj[ title ] = values[ index ] ), obj ),
                    {}
                );
            } );
    },
    'readfile': ,
    'words': ,
    'inRange': function inRange( n, start, end = null ) {
        if ( end && start > end )
            [ end, start ] = [ start, end ];
        return end == null ? n >= 0 && n < start : n >= start && n < end;
    } ,
    'addClass ': function addClass( el, className ) {
        return el.classList.add( className );
    }
 ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    '': ,
    
}

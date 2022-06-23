const utilObj = {
    "anagrams": function anagrams( str ) {
        if ( str.length <= 2 )
            return str.length === 2 ? [ str, str[ 1 ] + str[ 0 ] ] : [ str ];
        return str
            .split( '' )
            .reduce(
                ( acc, letter, i ) => acc.concat( anagrams( str.slice( 0, i ) + str.slice( i + 1 ) ).map( val => letter + val ) ),
                []
            );
    },

    "arrayToHtmlList": function arrayToHTMLList( arr, listID ) {
        return document.querySelector( `#${ listID }` ).innerHTML += arr
            .map( item => `<li>${ item }</li>` )
            .join( '' );
    },

    "ary": function ary( fn, n ) {
        return ( ...args ) => fn( ...args.slice( 0, n ) );
    },

    "atob": function atob( str ) {
        return Buffer.from( str, 'base64' ).toString( 'binary' );
    },

    "average": function average( ...nums ) {
        return nums.reduce( ( acc, val ) => acc + val, 0 ) / nums.length;
    },

    "aveargeBy": function averageBy( arr, fn ) {
        return arr
            .map( typeof fn === 'function' ? fn : val => val[ fn ] )
            .reduce( ( acc, val ) => acc + val, 0 ) / arr.length;
    },

    "bind": function bind( fn, context, ...args ) {
        return function () {

            return fn.apply( context, args.concat( ...arguments ) );
        };
    },

    "bindAll": function bindAll( obj, ...fns ) {
        return fns.forEach(
            fn => (
                ( f = obj[ fn ] ),
                ( obj[ fn ] = function () {
                    return f.apply( obj );
                } )
            )
        );
    },

    "bindKey": function bindKey( context, fn, ...boundArgs ) {
        return ( ...args ) => context[ fn ].apply( context, [ ...boundArgs, ...args ] );
    },
    "bota": function btoa( str ) {
        return new Buffer( str, 'binary' ).toString( 'base64' );
    },


    "bottomVisible": function bottomVisible() {
        return document.documentElement.clientHeight + window.scrollY >=
            ( document.documentElement.scrollHeight || document.documentElement.clientHeight );
    },

    "byteSize": function byteSize( str ) {
        return new Blob( [ str ] ).size;
    },

    "call": function call( key, ...args ) {
        return context => context[ key ]( ...args );
    },

    "capitalize": function capitalize( [ first, ...rest ], lowerRest = false ) {
        return first.toUpperCase() + ( lowerRest ? rest.join( '' ).toLowerCase() : rest.join( '' ) );
    },

    "capitalizeEveryWord": function capitalizeEveryWord( str ) {
        return str.replace( /\b[a-z]/g, char => char.toUpperCase() );
    },

    "castArray": function castArray( val ) {
        return ( Array.isArray( val ) ? val : [ val ] );
    },

    "chainAsync":
        function chainAsync( fns ) {
            let curr = 0;
            const next = () => fns[ curr++ ]( next );
            next();
        },



    "chunk": function chunk( arr, size ) {
        return Array.from( { length: Math.ceil( arr.length / size ) }, ( v, i ) => arr.slice( i * size, i * size + size )
        );
    },


    "clampNumber": function clampNumber( num, a, b ) {
        return Math.max( Math.min( num, Math.max( a, b ) ), Math.min( a, b ) );
    },



    "cloneRegExp":
        function cloneRegExp( regExp ) {
            return new RegExp( regExp.source, regExp.flags );
        },



    "coalesce": function coalesce( ...args ) {
        return args.find( _ => ![ undefined, null ].includes( _ ) );
    },


    "coalesceFactory": function coalesceFactory( valid ) {
        return ( ...args ) => args.find( valid );
    },



    "collectInto": function collectInto( fn ) {
        return ( ...args ) => fn( args );
    },




    "colorize": function colorize( ...args ) {
        return ( {
            black: `\\x1b[30m${ args.join( ' ' ) }`,
            red: `\\x1b[31m${ args.join( ' ' ) }`,
            green: `\\x1b[32m${ args.join( ' ' ) }`,
            yellow: `\\x1b[33m${ args.join( ' ' ) }`,
            blue: `\\x1b[34m${ args.join( ' ' ) }`,
            magenta: `\\x1b[35m${ args.join( ' ' ) }`,
            cyan: `\\x1b[36m${ args.join( ' ' ) }`,
            white: `\\x1b[37m${ args.join( ' ' ) }`,
            bgBlack: `\\x1b[40m${ args.join( ' ' ) }\\x1b[0m`,
            bgRed: `\\x1b[41m${ args.join( ' ' ) }\\x1b[0m`,
            bgGreen: `\\x1b[42m${ args.join( ' ' ) }\\x1b[0m`,
            bgYellow: `\\x1b[43m${ args.join( ' ' ) }\\x1b[0m`,
            bgBlue: `\\x1b[44m${ args.join( ' ' ) }\\x1b[0m`,
            bgMagenta: `\\x1b[45m${ args.join( ' ' ) }\\x1b[0m`,
            bgCyan: `\\x1b[46m${ args.join( ' ' ) }\\x1b[0m`,
            bgWhite: `\\x1b[47m${ args.join( ' ' ) }\\x1b[0m`
        } );
    },


    "compact": function compact( arr ) {
        return arr.filter( Boolean );
    },



    "compose": function compose( ...fns ) {
        return fns.reduce( ( f, g ) => ( ...args ) => f( g( ...args ) ) );
    },



    "composeRight": function composeRight( ...fns ) {
        return fns.reduce( ( f, g ) => ( ...args ) => g( f( ...args ) ) );
    },




    "copyToClipboard": function copyToClipboard( str ) {
        const el = document.createElement( 'textarea' );
        el.value = str;
        el.setAttribute( 'readonly', '' );
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild( el );
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt( 0 ) : false;
        el.select();
        document.execCommand( 'copy' );
        document.body.removeChild( el );
        if ( selected ) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange( selected );
        }
    },


    "countBy": function countBy( arr, fn ) {
        return arr.map( typeof fn === 'function' ? fn : val => val[ fn ] ).reduce( ( acc, val, i ) => {
            acc[ val ] = ( acc[ val ] || 0 ) + 1;

            return acc;
        }, {} );
    },



    "countOccurrences": function countOccurrences( arr, val ) {
        return arr.reduce( ( a, v ) => ( v === val ? a + 1 : a + 0 ), 0 );
    },



    "createElement":

        function createElement( str ) {
            const el = document.createElement( 'div' );
            el.innerHTML = str;

            return el.firstElementChild;
        },





    "currentUrl": function currentURL() {
        return window.location.href;
    },



    "curry":
        function curry( fn, arity = fn.length, ...args ) {
            return arity <= args.length ? fn( ...args ) : curry.bind( null, fn, arity, ...args );
        },




    "decapitalize":
        function decapitalize( [ first, ...rest ], upperRest = false ) {
            return first.toLowerCase() + ( upperRest ? rest.join( '' ).toUpperCase() : rest.join( '' ) );
        },

    "deepClone": function deepClone( obj ) {
        let clone = Object.assign( {}, obj );
        Object.keys( clone ).forEach(
            key => ( clone[ key ] = typeof obj[ key ] === 'object' ? deepClone( obj[ key ] ) : obj[ key ] )
        );

        return clone;
    },



    "deepFlatten": function deepFlatten( arr ) {
        return [].concat( ...arr.map( v => ( Array.isArray( v ) ? deepFlatten( v ) : v ) ) );
    },



    "defaults": defaults
const defaults = ( obj, ...defs ) => Object.assign( {}, obj, ...defs.reverse(), obj );,

    "defer": defer
const defer = ( fn, ...args ) => setTimeout( fn, 1, ...args );,

    "delay": delay
const delay = ( fn, wait, ...args ) => setTimeout( fn, wait, ...args );,

    "detectDeviceType": detectDeviceType
const detectDeviceType = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )
            ? 'Mobile'
            : 'Desktop';,

    "difference": difference
const difference = ( a, b ) => {
        const s = new Set( b );

        return a.filter( x => !s.has( x ) );
    };,

    "differenceBy": differenceBy
const differenceBy = ( a, b, fn ) => {
        const s = new Set( b.map( v => fn( v ) ) );

        return a.filter( x => !s.has( fn( x ) ) );
    };,

    "differenceWith": differenceWith
const differenceWith = ( arr, val, comp ) => arr.filter( a => val.findIndex( b => comp( a, b ) ) === -1 );,

    "digitize": digitize
const digitize = n => [ ...`${ n }` ].map( i => parseInt( i ) );,

    "distance": distance
const distance = ( x0, y0, x1, y1 ) => Math.hypot( x1 - x0, y1 - y0 );,

    "drop": drop
const drop = ( arr, n = 1 ) => arr.slice( n );,

    "dropRight": dropRight
const dropRight = ( arr, n = 1 ) => arr.slice( 0, -n );,

    "dropRightWhile": dropRightWhile
const dropRightWhile = ( arr, func ) => {
        while ( arr.length > 0 && !func( arr[ arr.length - 1 ] ) ) arr = arr.slice( 0, -1 );

        return arr;
    };,

    "dropWhile": dropWhile
const dropWhile = ( arr, func ) => {
        while ( arr.length > 0 && !func( arr[ 0 ] ) ) arr = arr.slice( 1 );

        return arr;
    };,

    "elementIsVisibleInViewport": elementIsVisibleInViewport
const elementIsVisibleInViewport = ( el, partiallyVisible = false ) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;

        return partiallyVisible
            ? ( ( top > 0 && top < innerHeight ) || ( bottom > 0 && bottom < innerHeight ) ) &&
            ( ( left > 0 && left < innerWidth ) || ( right > 0 && right < innerWidth ) )
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };,

    "elo": elo
const elo = ( [ ...ratings ], kFactor = 32, selfRating ) => {
        const [ a, b ] = ratings;
        const expectedScore = ( self, opponent ) => 1 / ( 1 + 10 ** ( ( opponent - self ) / 400 ) );
        const newRating = ( rating, i ) =>
            ( selfRating || rating ) + kFactor * ( i - expectedScore( i ? a : b, i ? b : a ) );
        if ( ratings.length === 2 ) {

            return [ newRating( a, 1 ), newRating( b, 0 ) ];
        } else {
            for ( let i = 0; i < ratings.length; i++ ) {
                let j = i;
                while ( j < ratings.length - 1 ) {
                    [ ratings[ i ], ratings[ j + 1 ] ] = elo( [ ratings[ i ], ratings[ j + 1 ] ], kFactor );
                    j++;
                }
            }
        }

        return ratings;
    };,

    "equals": equals
const equals = ( a, b ) => {
        if ( a === b )
            return true;
        if ( a instanceof Date && b instanceof Date )
            return a.getTime() === b.getTime();
        if ( !a || !b || ( typeof a != 'object' && typeof b !== 'object' ) )
            return a === b;
        if ( a === null || a === undefined || b === null || b === undefined )
            return false;
        if ( a.prototype !== b.prototype )
            return false;
        let keys = Object.keys( a );
        if ( keys.length !== Object.keys( b ).length )
            return false;

        return keys.every( k => equals( a[ k ], b[ k ] ) );
    };,

    "escapeHTML": escapeHTML
const escapeHTML = str =>
        str.replace(
            /[&<>'\"]/g,
            tag =>
            ( {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
\"'\": '&#39;',
'\"': '&quot;'
     }[ tag ] || tag)
 );,

"escapeRegExp": escapeRegExp
const escapeRegExp = str => str.replace( /[.*+?^${}()|[\\]\\]/g, '\\\\$&' );,

"everyNth": everyNth
const everyNth = ( arr, nth ) => arr.filter( ( e, i ) => i % nth === nth - 1 );,

"extendhex": extendhex
const extendHex = shortHex =>
    '#' +
    shortHex
        .slice( shortHex.startsWith( '#' ) ? 1 : 0 )
        .split( '' )
        .map( x => x + x )
        .join( '' );,

"factorial": factorial
const factorial = n =>
    n < 0
        ? ( () => {
            throw new TypeError( 'Negative numbers are not allowed!' );
        } )()
        : n <= 1 ? 1 : n * factorial( n - 1 );,

"fibonacci": fibonacci
const fibonacci = n =>
    Array.from( { length: n } ).reduce(
        ( acc, val, i ) => acc.concat( i > 1 ? acc[ i - 1 ] + acc[ i - 2 ] : i ),
        []
    );,

"filterNonUnique": filterNonUnique
const filterNonUnique = arr => arr.filter( i => arr.indexOf( i ) === arr.lastIndexOf( i ) );,

"findkey": findkey
const findKey = ( obj, fn ) => Object.keys( obj ).find( key => fn( obj[ key ], key, obj ) );,

"findLast": findLast
const findLast = ( arr, fn ) => arr.filter( fn ).slice( -1 )[ 0 ];,

"findLastIndex": findLastIndex
const findLastIndex = ( arr, fn ) =>
    arr
        .map( ( val, i ) => [ i, val ] )
        .filter( val => fn( val[ 1 ], val[ 0 ], arr ) )
        .slice( -1 )[ 0 ][ 0 ];,

"findLastKey": findLastKey
const findLastKey = ( obj, fn ) =>
    Object.keys( obj )
        .reverse()
        .find( key => fn( obj[ key ], key, obj ) );,

"flatten": flatten
const flatten = ( arr, depth = 1 ) =>
    depth != 1
        ? arr.reduce( ( a, v ) => a.concat( Array.isArray( v ) ? flatten( v, depth - 1 ) : v ), [] )
        : arr.reduce( ( a, v ) => a.concat( v ), [] );,

"flip": flip
const flip = fn => ( first, ...rest ) => fn( ...rest, first );,

"forEachRight": forEachRight
const forEachRight = ( arr, callback ) =>
    arr
        .slice( 0 )
        .reverse()
        .forEach( callback );,

"formatDuration": formatDuration
const formatDuration = ms => {
    if ( ms < 0 ) ms = -ms;
    const time = {
        day: Math.floor( ms / 86400000 ),
        hour: Math.floor( ms / 3600000 ) % 24,
        minute: Math.floor( ms / 60000 ) % 60,
        second: Math.floor( ms / 1000 ) % 60,
        millisecond: Math.floor( ms ) % 1000
    };

    return Object.entries( time )
        .filter( val => val[ 1 ] !== 0 )
        .map( val => val[ 1 ] + ' ' + ( val[ 1 ] !== 1 ? val[ 0 ] + 's' : val[ 0 ] ) )
        .join( ', ' );
};,

"forOwn": forOwn
const forOwn = ( obj, fn ) => Object.keys( obj ).forEach( key => fn( obj[ key ], key, obj ) );,

"forOwnRight": forOwnRight
const forOwnRight = ( obj, fn ) =>
    Object.keys( obj )
        .reverse()
        .forEach( key => fn( obj[ key ], key, obj ) );,

"fromCamelCase": fromCamelCase
const fromCamelCase = ( str, separator = '_' ) =>
    str
        .replace( /([a-z\\d])([A-Z])/g, '$1' + separator + '$2' )
        .replace( /([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + separator + '$2' )
        .toLowerCase();,

"functionName": functionName
const functionName = fn => ( console.debug( fn.name ), fn );,

"functions": functions
const functions = ( obj, inherited = false ) =>
    ( inherited
        ? [ ...Object.keys( obj ), ...Object.keys( Object.getPrototypeOf( obj ) ) ]
        : Object.keys( obj )
    ).filter( key => typeof obj[ key ] === 'function' );,

"gcd": gcd
const gcd = ( ...arr ) => {
    const _gcd = ( x, y ) => ( !y ? x : gcd( y, x % y ) );

    return [ ...arr ].reduce( ( a, b ) => _gcd( a, b ) );
};,

"geometricProgression": geometricProgression
const geometricProgression = ( end, start = 1, step = 2 ) =>
    Array.from( { length: Math.floor( Math.log( end / start ) / Math.log( step ) ) + 1 } ).map(
        ( v, i ) => start * step ** i
    );,

"get": get
const get = ( from, ...selectors ) =>
    [ ...selectors ].map( s =>
        s
            .replace( /\\[([^[\\]]*)]/g, '.$1.' )
            .split( '.' )
            .filter( t => t !== '' )
            .reduce( ( prev, cur ) => prev && prev[ cur ], from )
    );,

"getDaysDiffBetweenDates": getDaysDiffBetweenDates
const getDaysDiffBetweenDates = ( dateInitial, dateFinal ) =>
    ( dateFinal - dateInitial ) / ( 1000 * 3600 * 24 );,

"getScrollPosition": getScrollPosition
const getScrollPosition = ( el = window ) => ( {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
} );,

"getStyle": getStyle
const getStyle = ( el, ruleName ) => getComputedStyle( el )[ ruleName ];,

"getType": getType
const getType = v =>
    v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();,

"getURLParameters": getURLParameters
const getURLParameters = url =>
    ( url.match( /([^?=&]+)(=([^&]*))/g ) || [] ).reduce(
        ( a, v ) => ( ( a[ v.slice( 0, v.indexOf( '=' ) ) ] = v.slice( v.indexOf( '=' ) + 1 ) ), a ),
        {}
    );,

"groupby": groupby
const groupBy = ( arr, fn ) =>
    arr.map( typeof fn === 'function' ? fn : val => val[ fn ] ).reduce( ( acc, val, i ) => {
        acc[ val ] = ( acc[ val ] || [] ).concat( arr[ i ] );

        return acc;
    }, {} );,

"hammingDistance": hammingDistance
const hammingDistance = ( num1, num2 ) => ( ( num1 ^ num2 ).toString( 2 ).match( /1/g ) || '' ).length;,

"hasClass": hasClass
const hasClass = ( el, className ) => el.classList.contains( className );,

"hasFlags": hasFlags
const hasFlags = ( ...flags ) =>
    flags.every( flag => process.argv.includes( /^-{1,2}/.test( flag ) ? flag : '--' + flag ) );,

"hashBrowser": hashBrowser
const hashBrowser = val =>
    crypto.subtle.digest( 'SHA-256', new TextEncoder( 'utf-8' ).encode( val ) ).then( h => {
        let hexes = [],
            view = new DataView( h );
        for ( let i = 0; i < view.byteLength; i += 4 )
            hexes.push( ( '00000000' + view.getUint32( i ).toString( 16 ) ).slice( -8 ) );

        return hexes.join( '' );
    } );,

"hashNode": hashNode
const crypto = require( 'crypto' );
const hashNode = val =>
    new Promise( resolve =>
        setTimeout(
            () =>
                resolve(
                    crypto
                        .createHash( 'sha256' )
                        .update( val )
                        .digest( 'hex' )
                ),
            0
        )
    );,

"head": head
const head = arr => arr[ 0 ];,

"hexToRGB": hexToRGB
const hexToRGB = hex => {
    let alpha = false,
        h = hex.slice( hex.startsWith( '#' ) ? 1 : 0 );
    if ( h.length === 3 ) h = [ ...h ].map( x => x + x ).join( '' );
    else if ( h.length === 8 ) alpha = true;
    h = parseInt( h, 16 );

    return (
        'rgb' +
        ( alpha ? 'a' : '' ) +
        '(' +
        ( h >>> ( alpha ? 24 : 16 ) ) +
        ', ' +
        ( ( h & ( alpha ? 0x00ff0000 : 0x00ff00 ) ) >>> ( alpha ? 16 : 8 ) ) +
        ', ' +
        ( ( h & ( alpha ? 0x0000ff00 : 0x0000ff ) ) >>> ( alpha ? 8 : 0 ) ) +
        ( alpha ? `, ${ h & 0x000000ff }` : '' ) +
        ')'
    );
};,

"hide": hide
const hide = ( ...el ) => [ ...el ].forEach( e => ( e.style.display = 'none' ) );,

"httpGet": httpGet
const httpGet = ( url, callback, err = console.error ) => {
    const request = new XMLHttpRequest();
    request.open( 'GET', url, true );
    request.onload = () => callback( request.responseText );
    request.onerror = () => err( request );
    request.send();
};,

"httpPost": httpPost
const httpPost = ( url, data, callback, err = console.error ) => {
    const request = new XMLHttpRequest();
    request.open( 'POST', url, true );
    request.setRequestHeader( 'Content-type', 'application/json; charset=utf-8' );
    request.onload = () => callback( request.responseText );
    request.onerror = () => err( request );
    request.send( data );
};,

"httpsRedirect": httpsRedirect
const httpsRedirect = () => {
    if ( location.protocol !== 'https:' ) location.replace( 'https://' + location.href.split( '//' )[ 1 ] );
};,

"indexOfAll": indexOfAll
const indexOfAll = ( arr, val ) => {
    const indices = [];
    arr.forEach( ( el, i ) => el === val && indices.push( i ) );

    return indices;
};,

"initial": initial
const initial = arr => arr.slice( 0, -1 );,

"initializeArrayWithRange": initializeArrayWithRange
const initializeArrayWithRange = ( end, start = 0, step = 1 ) =>
    Array.from( { length: Math.ceil( ( end + 1 - start ) / step ) } ).map( ( v, i ) => i * step + start );,

"initializeArrayWithRangeRight": initializeArrayWithRangeRight
const initializeArrayWithRangeRight = ( end, start = 0, step = 1 ) =>
    Array.from( { length: Math.ceil( ( end + 1 - start ) / step ) } ).map(
        ( v, i, arr ) => ( arr.length - i - 1 ) * step + start
    );,

"initializeArrayWithValues": initializeArrayWithValues
const initializeArrayWithValues = ( n, val = 0 ) => Array( n ).fill( val );,

"inRange": inRange
const inRange = ( n, start, end = null ) => {
    if ( end && start > end ) end = [ start, ( start = end ) ][ 0 ];

    return end == null ? n >= 0 && n < start : n >= start && n < end;
};,

"intersection": function intersection( a, b ) {
    const s = new Set( b );

    return a.filter( x => s.has( x ) );
},

"intersectionBy": function intersectionBy( a, b, fn ) {
    const s = new Set( b.map( x => fn( x ) ) );

    return a.filter( x => s.has( fn( x ) ) );
},

"intersectionWith": function intersectionWith( a, b, comp ) {
    return a.filter( x => b.findIndex( y => comp( x, y ) ) !== -1 );
},

"invertKeyValues": function invertKeyValues( obj, fn ) {
    return Object.keys( obj ).reduce( ( acc, key ) => {
        const val = fn ? fn( obj[ key ] ) : obj[ key ];
        acc[ val ] = acc[ val ] || [];
        acc[ val ].push( key );

        return acc;
    }, {} );
},

"is": function is( type, val ) {
    return val instanceof type;
},

"isAbsoluteURL": function isAbsoluteURL( str ) {
    return /^[a-z][a-z0-9+.-]*:/.test( str );
},

"isArrayLike": function isArrayLike( val ) {
    try {

        return [ ...val ], true;
    } catch ( e ) {

        return false;
    }
},

"isBoolean": function isBoolean( val ) {
    return typeof val === 'boolean';
},

"isDivisible": isDivisible
const isDivisible = ( dividend, divisor ) => dividend % divisor === 0;,

"isEmpty": isEmpty
const isEmpty = val => val == null || !( Object.keys( val ) || val ).length;,

"isEven": function isEven( num ) {
    return num % 2 === 0;
},

"isFunction": function isFunction( val ) {
    return typeof val === 'function';
},

"isLowerCase": isLowerCase
const isLowerCase = str => str === str.toLowerCase();,

"isNil": isNil
const isNil = val => val === undefined || val === null;,

"isNull": isNull
const isNull = val => val === null;,

"isNumber": isNumber
const isNumber = val => typeof val === 'number';,

"isObject": isObject
const isObject = obj => obj === Object( obj );,

"isObjectLike": isObjectLike
    ```js
const isObjectLike = val => val !== null && typeof val === 'object';,

"isPlainObject":isPlainObject
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;,

"isPrime":isPrime
const isPrime = num => {
 const boundary = Math.floor(Math.sqrt(num));
 for (var i = 2; i <= boundary; i++) if (num % i == 0) 
return  false;
 
return  num >= 2;
};,

"isPrimitive":isPrimitive
const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;,

"isPromiseLike":isPromiseLike
const isPromiseLike = obj =>
 obj !== null &&
 (typeof obj === 'object' || typeof obj === 'function') &&
 typeof obj.then === 'function';,

"isSorted":isSorted
const isSorted = arr => {
 const direction = arr[0] > arr[1] ? -1 : 1;
 for (let [i, val] of arr.entries())
   if (i === arr.length - 1) 
return  direction;
   else if ((val - arr[i + 1]) * direction > 0) 
return  0;
};,

"isString":isString
const isString = val => typeof val === 'string';,

"isSymbol":isSymbol
const isSymbol = val => typeof val === 'symbol';,

"isTravisCI":isTravisCI
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;,

"isUndefined":isUndefined
const isUndefined = val => val === undefined;,

"isUpperCase":isUpperCase
const isUpperCase = str => str === str.toUpperCase();,

"isValidJSON":isValidJSON
const isValidJSON = obj => {
 try {
   JSON.parse(obj);
   
return  true;
 } catch (e) {
   
return  false;
 }
};,

"join":join
const join = (arr, separator = ',', end = separator) =>
 arr.reduce(
   (acc, val, i) =>
     i == arr.length - 2
       ? acc + val + end
       : i == arr.length - 1 ? acc + val : acc + val + separator,
   ''
 );,

"JSONToFile":JSONToFile
const fs = require('fs');
const JSONToFile = (obj, filename) =>
 fs.writeFile(`\\$\\{ filename\\ }.json`, JSON.stringify(obj, null, 2));,

"last":last
const last = arr => arr[arr.length - 1];,

"lcm":lcm
const lcm = (...arr) => {
 const gcd = (x, y) => (!y ? x : gcd(y, x % y));
 const _lcm = (x, y) => x * y / gcd(x, y);
 
return  [...arr].reduce((a, b) => _lcm(a, b));
};,

"longestItem":longestItem
const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];,

"lowercaseKeys":lowercaseKeys
const lowercaseKeys = obj =>
 Object.keys(obj).reduce((acc, key) => {
   acc[key.toLowerCase()] = obj[key];
   
return  acc;
 }, {});,

"luhnCheck":luhnCheck
const luhnCheck = num => {
 let arr = (num + '')
   .split('')
   .reverse()
   .map(x => parseInt(x));
 let lastDigit = arr.splice(0, 1)[0];
 let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + (val * 2) % 9 || 9), 0);
 sum += lastDigit;
 
return ",

"mapKeys":mapKeys
const mapKeys = (obj, fn) =>
 Object.keys(obj).reduce((acc, k) => {
   acc[fn(obj[k], k, obj)] = obj[k];
   
return  acc;
 }, {});,

"mapObject":mapObject
const mapObject = (arr, fn) =>
 (a => (
   (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
 ))();,

"mapValues":mapValues
const mapValues = (obj, fn) =>
 Object.keys(obj).reduce((acc, k) => {
   acc[k] = fn(obj[k], k, obj);
   
return  acc;
 }, {});,

"mask":mask
const mask = (cc, num = 4, mask = '*') =>
 ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);,

"matches":matches
const matches = (obj, source) =>
 Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);,

"matchesWith":matchesWith
const matchesWith = (obj, source, fn) =>
 Object.keys(source).every(
   key =>
     obj.hasOwnProperty(key) && fn
       ? fn(obj[key], source[key], key, obj, source)
       : obj[key] == source[key]
 );,

"maxBy":maxBy
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));,

"maxN":maxN
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);,

"median":median
const median = arr => { 
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  
return  arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};,

"memoize":memoize
const memoize = fn => {
 const cache = new Map();
 const cached = function(val) {
   
return  cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
 };
 cached.cache = cache;
 
return  cached;
};,

"merge":merge
const merge = (...objs) =>
 [...objs].reduce(
   (acc, obj) =>
     Object.keys(obj).reduce((a, k) => {
       acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
       
return  acc;
     }, {}),
   {}
 );,

"minBy":minBy
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));,

"minN":minN
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);,

"negate":negate
const negate = func => (...args) => !func(...args);,

"nthArg":nthArg
const nthArg = n => (...args) => args.slice(n)[0];,

"nthElement":nthElement
const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];,

"objectFromPairs":objectFromPairs
const objectFromPairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});,

"objectToPairs":objectToPairs
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);,

"observeMutations":observeMutations
const observeMutations = (element, callback, options) => {
 const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
 observer.observe(
   element,
   Object.assign(
     {
       childList: true,
       attributes: true,
       attributeOldValue: true,
       characterData: true,
       characterDataOldValue: true,
       subtree: true
     },
     options
   )
 );
 
return  observer;
};,

"off":off
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);,

"omit":omit
const omit = (obj, arr) =>
 Object.keys(obj)
   .filter(k => !arr.includes(k))
   .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});,

"omitBy":omitBy
const omitBy = (obj, fn) =>
 Object.keys(obj)
   .filter(k => !fn(obj[k], k))
   .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});,

"on":on
const on = (el, evt, fn, opts = {}) => {
 const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
 el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
 if (opts.target) 
return  delegatorFn;
};,

"once":once
const once = fn => {
 let called = false;
 
return  function(...args) {
   if (called) 
return ;
   called = true;
   
return  fn.apply(this, args);
 };
};,

"onUserInputChange":onUserInputChange
const onUserInputChange = callback => {
 let type = 'mouse',
   lastTime = 0;
 const mousemoveHandler = () => {
   const now = performance.now();
   if (now - lastTime < 20)
     (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
   lastTime = now;
 };
 document.addEventListener('touchstart', () => {
   if (type === 'touch') 
return ;
   (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
 });
};,

"orderBy":orderBy
const orderBy = (arr, props, orders) =>
 [...arr].sort((a, b) =>
   props.reduce((acc, prop, i) => {
     if (acc === 0) {
       const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
       acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
     }
     
return  acc;
   }, 0)
 );,

"over":over
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));,

"palindrome":palindrome
const palindrome = str => {
 const s = str.toLowerCase().replace(/[\\W_]/g, '');
 
return  (
   s ===
   s
     .split('')
     .reverse()
     .join('')
 );
};,

"parseCookie":parseCookie
const parseCookie = str =>
 str
   .split(';')
   .map(v => v.split('='))
   .reduce((acc, v) => {
     acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
     
return  acc;
   }, {});,

"partial":partial
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);,

"partailRight":partailRight
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);,

"partition":partition
const partition = (arr, fn) =>
 arr.reduce(
   (acc, val, i, arr) => {
     acc[fn(val, i, arr) ? 0 : 1].push(val);
     
return  acc;
   },
   [[], []]
 );,

"percentile":percentile
const percentile = (arr, val) =>
 100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) / arr.length;,

"pick":pick
const pick = (obj, arr) =>
 arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});,

"pickBy":pickBy
const pickBy = (obj, fn) =>
 Object.keys(obj)
   .filter(k => fn(obj[k], k))
   .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});,

"pipeFunctions":pipeFunctions
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));,

"pluralize":pluralize
const pluralize = (val, word, plural = word + 's') => {
 const _pluralize = (num, word, plural = word + 's') =>
   [1, -1].includes(Number(num)) ? word : plural;
 if (typeof val === 'object') 
return  (num, word) => _pluralize(num, word, val[word]);
 
return  _pluralize(val, word, plural);
};,

"powerset":powerset
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);,

"prettyBytes":prettyBytes
const prettyBytes = (num, precision = 3, addSpace = true) => {
 const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
 if (Math.abs(num) < 1) 
return  num + (addSpace ? ' ' : '') + UNITS[0];
 const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
 const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
 
return  (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};,

"primes":primes
const primes = num => {
 let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
   sqroot = Math.floor(Math.sqrt(num)),
   numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
 numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y == x)));
 
return  arr;
};,

"promisify":promisify
const promisify = func => (...args) =>
 new Promise((resolve, reject) =>
   func(...args, (err, result) => (err ? reject(err) : resolve(result)))
 );,

"pull":pull
const pull = (arr, ...args) => {
 let argState = Array.isArray(args[0]) ? args[0] : args;
 let pulled = arr.filter((v, i) => !argState.includes(v));
 arr.length = 0;
 pulled.forEach(v => arr.push(v));
};,

"pullAtIndex":pullAtIndex
const pullAtIndex = (arr, pullArr) => {
 let removed = [];
 let pulled = arr
   .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
   .filter((v, i) => !pullArr.includes(i));
 arr.length = 0;
 pulled.forEach(v => arr.push(v));
 
return  removed;
};,

"pullAtValue":pullAtValue
const pullAtValue = (arr, pullArr) => {
 let removed = [],
   pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
   mutateTo = arr.filter((v, i) => !pullArr.includes(v));
 arr.length = 0;
 mutateTo.forEach(v => arr.push(v));
 
return  removed;
};,

"randomHexColorCode":randomHexColorCode
const randomHexColorCode = () => {
 let n = ((Math.random() * 0xfffff) | 0).toString(16);
 
return  '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
};,

"randomIntArrayInRange":randomIntArrayInRange
const randomIntArrayInRange = (min, max, n = 1) =>
 Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);,

"randomIntegerInRange":randomIntegerInRange
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;,

"randomNumberInRange":randomNumberInRange
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;,

"readFileLines":readFileLines
const fs = require('fs');
const readFileLines = filename =>
 fs
   .readFileSync(filename)
   .toString('UTF8')
   .split('
');,

"redirect":redirect
const redirect = (url, asLink = true) =>
 asLink ? (window.location.href = url) : window.location.replace(url);,

"reducedFilter":reducedFilter
const reducedFilter = (data, keys, fn) =>
 data.filter(fn).map(el =>
   keys.reduce((acc, key) => {
     acc[key] = el[key];
     
return  acc;
   }, {})
 );,

"reduceSuccessive":reduceSuccessive
const reduceSuccessive = (arr, fn, acc) =>
 arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);,

"reduceWhich":reduceWhich
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
 arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));,

"remove":remove
const remove = (arr, func) =>
 Array.isArray(arr)
   ? arr.filter(func).reduce((acc, val) => {
       arr.splice(arr.indexOf(val), 1);
       
return  acc.concat(val);
     }, [])
   : [];,

"removeNonASCII":removeNonASCII
const removeNonASCII = str => str.replace(/[^\\x20-\\x7E]/g, '');,

"reverseString":reverseString
const reverseString = str => [...str].reverse().join('');,

"RGBToHex":RGBToHex
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');,

"round":round
const round = (n, decimals = 0) => Number(`${ Math.round( `${ n }e${ decimals }` ) } e - ${ decimals } `);,

"runAsync":runAsync
const runAsync = fn => {
 const blob = `var fn = ${ fn.toString()}; postMessage( fn() ); `;
 const worker = new Worker(
   URL.createObjectURL(new Blob([blob]), {
     type: 'application/javascript; charset=utf-8'
   })
 );
 
return  new Promise((res, rej) => {
   worker.onmessage = ({ data }) => {
     res(data), worker.terminate();
   };
   worker.onerror = err => {
     rej(err), worker.terminate();
   };
 });
};,

"runPromisesInSeries":runPromisesInSeries
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());,

"sample":sample
const sample = arr => arr[Math.floor(Math.random() * arr.length)];,

"sampleSize":sampleSize
const sampleSize = ([...arr], n = 1) => {
 let m = arr.length;
 while (m) {
   const i = Math.floor(Math.random() * m--);
   [arr[m], arr[i]] = [arr[i], arr[m]];
 }
 
return  arr.slice(0, n);
};,

"scrollToTop":scrollToTop
const scrollToTop = () => {
 const c = document.documentElement.scrollTop || document.body.scrollTop;
 if (c > 0) {
   window.requestAnimationFrame(scrollToTop);
   window.scrollTo(0, c - c / 8);
 }
};,

"sdbm":sdbm
const sdbm = str => {
 let arr = str.split('');
 
return  arr.reduce(
   (hashCode, currentVal) =>
     (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
   0
 );
};,

"serializeCookie":serializeCookie
const serializeCookie = (name, val) => `${ encodeURIComponent( name ) }=${ encodeURIComponent( val ) } `;,

"setStyle":setStyle
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);,

"shallowClone":shallowClone
```js
const shallowClone = obj => Object.assign( {}, obj );,

"show": show
const show = ( ...el ) => [ ...el ].forEach( e => ( e.style.display = '' ) );,

"shuffle": shuffle
const shuffle = ( [ ...arr ] ) => {
    let m = arr.length;
    while ( m ) {
        const i = Math.floor( Math.random() * m-- );
        [ arr[ m ], arr[ i ] ] = [ arr[ i ], arr[ m ] ];
    }

    return arr;
};,

"similarity": similarity
const similarity = ( arr, values ) => arr.filter( v => values.includes( v ) );,

"size": size
const size = val =>
    Array.isArray( val )
        ? val.length
        : val && typeof val === 'object'
            ? val.size || val.length || Object.keys( val ).length
            : typeof val === 'string' ? new Blob( [ val ] ).size : 0;,

"sleep": sleep
const sleep = ms => new Promise( resolve => setTimeout( resolve, ms ) );,

"sortCharactersInString": sortCharactersInString
const sortCharactersInString = str => [ ...str ].sort( ( a, b ) => a.localeCompare( b ) ).join( '' );,

"sortedIndex": sortedIndex
const sortedIndex = ( arr, n ) => {
    const isDescending = arr[ 0 ] > arr[ arr.length - 1 ];
    const index = arr.findIndex( el => ( isDescending ? n >= el : n <= el ) );

    return index === -1 ? arr.length : index;
};,

"sortedIndexBy": sortedIndexBy
const sortedIndexBy = ( arr, n, fn ) => {
    const isDescending = fn( arr[ 0 ] ) > fn( arr[ arr.length - 1 ] );
    const val = fn( n );
    const index = arr.findIndex( el => ( isDescending ? val >= fn( el ) : val <= fn( el ) ) );

    return index === -1 ? arr.length : index;
};,

"sortedLastIndex": sortedLastIndex
const sortedLastIndex = ( arr, n ) => {
    const isDescending = arr[ 0 ] > arr[ arr.length - 1 ];
    const index = arr
        .map( ( val, i ) => [ i, val ] )
        .reverse()
        .findIndex( el => ( isDescending ? n <= el[ 1 ] : n >= el[ 1 ] ) );

    return index === -1 ? 0 : arr.length - index - 1;
};,

"sortedLastIndexBy": sortedLastIndexBy
const sortedLastIndexBy = ( arr, n, fn ) => {
    const isDescending = fn( arr[ 0 ] ) > fn( arr[ arr.length - 1 ] );
    const val = fn( n );
    const index = arr
        .map( ( val, i ) => [ i, fn( val ) ] )
        .reverse()
        .findIndex( el => ( isDescending ? val <= el[ 1 ] : val >= el[ 1 ] ) );

    return index === -1 ? 0 : arr.length - index;
};,

"splitLines": splitLines
const splitLines = str => str.split( /\r?
    /);,

"spreadOver": spreadOver
const spreadOver = fn => argsArr => fn( ...argsArr );,

"standardDeviation": standardDeviation
const standardDeviation = ( arr, usePopulation = false ) => {
    const mean = arr.reduce( ( acc, val ) => acc + val, 0 ) / arr.length;

    return Math.sqrt(
        arr.reduce( ( acc, val ) => acc.concat( ( val - mean ) ** 2 ), [] ).reduce( ( acc, val ) => acc + val, 0 ) /
        ( arr.length - ( usePopulation ? 0 : 1 ) )
    );
};,

"stripHTMLTags": stripHTMLTags
const stripHTMLTags = str => str.replace( /<[^>]*>/g, '' );,

"sum": sum
const sum = ( ...arr ) => [ ...arr ].reduce( ( acc, val ) => acc + val, 0 );,

"sumBy": sumBy
const sumBy = ( arr, fn ) =>
    arr.map( typeof fn === 'function' ? fn : val => val[ fn ] ).reduce( ( acc, val ) => acc + val, 0 );,

"sumPower": sumPower
const sumPower = ( end, power = 2, start = 1 ) =>
    Array( end + 1 - start )
        .fill( 0 )
        .map( ( x, i ) => ( i + start ) ** power )
        .reduce( ( a, b ) => a + b, 0 );,

"symmetricDifference": symmetricDifference
const symmetricDifference = ( a, b ) => {
    const sA = new Set( a ),
        sB = new Set( b );

    return [ ...a.filter( x => !sB.has( x ) ), ...b.filter( x => !sA.has( x ) ) ];
};,

"symmetricDifferenceBy": symmetricDifferenceBy
const symmetricDifferenceBy = ( a, b, fn ) => {
    const sA = new Set( a.map( v => fn( v ) ) ),
        sB = new Set( b.map( v => fn( v ) ) );

    return [ ...a.filter( x => !sB.has( fn( x ) ) ), ...b.filter( x => !sA.has( fn( x ) ) ) ];
};,

"symmetricDifferenceWith": symmetricDifferenceWith
const symmetricDifferenceWith = ( arr, val, comp ) => [
    ...arr.filter( a => val.findIndex( b => comp( a, b ) ) === -1 ),
    ...val.filter( a => arr.findIndex( b => comp( a, b ) ) === -1 )
];,

"tail": tail
const tail = arr => ( arr.length > 1 ? arr.slice( 1 ) : arr );,

"take": take
const take = ( arr, n = 1 ) => arr.slice( 0, n );,

"takeRight": takeRight
const takeRight = ( arr, n = 1 ) => arr.slice( arr.length - n, arr.length );,

"takeWhile": takeWhile
const takeWhile = ( arr, func ) => {
    for ( let i of arr.keys() ) if ( func( arr[ i ] ) )
        return arr.slice( 0, i );

    return arr;
};,

"times": times
const times = ( n, fn, context = undefined ) => {
    let i = 0;
    while ( fn.call( context, i ) !== false && ++i < n ) { }
};,

"timeTaken": timeTaken
const timeTaken = callback => {
    console.time( 'timeTaken' );
    const r = callback();
    console.timeEnd( 'timeTaken' );

    return r;
};,

"toCamelCase": toCamelCase
const toCamelCase = str => {
    let s =
        str &&
        str
            .match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
            .map( x => x.slice( 0, 1 ).toUpperCase() + x.slice( 1 ).toLowerCase() )
            .join( '' );

    return s.slice( 0, 1 ).toLowerCase() + s.slice( 1 );
};,

"toDecimalMark": toDecimalMark
const toDecimalMark = num => num.toLocaleString( 'en-US' );,

"toggleClass": toggleClass
const toggleClass = ( el, className ) => el.classList.toggle( className );,

"toKebabCase": toKebabCase
const toKebabCase = str =>
    str &&
    str
        .match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
        .map( x => x.toLowerCase() )
        .join( '-' );,

"tomorrow": tomorrow
const tomorrow = () => {
    let t = new Date();
    t.setDate( t.getDate() + 1 );

    return `${ t.getFullYear() }-${ String( t.getMonth() + 1 ).padStart( 2, '0' ) }-${ String(
        t.getDate()
    ).padStart( 2, '0' ) }`;
};,

"toOrdinalSuffix": toOrdinalSuffix
const toOrdinalSuffix = num => {
    const int = parseInt( num ),
        digits = [ int % 10, int % 100 ],
        ordinals = [ 'st', 'nd', 'rd', 'th' ],
        oPattern = [ 1, 2, 3, 4 ],
        tPattern = [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ];

    return oPattern.includes( digits[ 0 ] ) && !tPattern.includes( digits[ 1 ] )
        ? int + ordinals[ digits[ 0 ] - 1 ]
        : int + ordinals[ 3 ];
};,

"toSafeInteger": toSafeInteger
const toSafeInteger = num =>
    Math.round( Math.max( Math.min( num, Number.MAX_SAFE_INTEGER ), Number.MIN_SAFE_INTEGER ) );,

"toSnakeCase": toSnakeCase
const toSnakeCase = str =>
    str &&
    str
        .match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
        .map( x => x.toLowerCase() )
        .join( '_' );,

"transform": transform
const transform = ( obj, fn, acc ) => Object.keys( obj ).reduce( ( a, k ) => fn( a, obj[ k ], k, obj ), acc );,

"truncateString": truncateString
const truncateString = ( str, num ) =>
    str.length > num ? str.slice( 0, num > 3 ? num - 3 : num ) + '...' : str;,

"truthCheckCollection": truthCheckCollection
const truthCheckCollection = ( collection, pre ) => collection.every( obj => obj[ pre ] );,

"unary": unary
const unary = fn => val => fn( val );,

"unescapeHTML": unescapeHTML
const unescapeHTML = str =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
        ( {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': \"'\",
       '&quot;': '\"'
     }[ tag ] || tag )
    );,

"unfold": unfold
const unfold = ( fn, seed ) => {
    let result = [],
        val = [ null, seed ];
    while ( ( val = fn( val[ 1 ] ) ) ) result.push( val[ 0 ] );

    return result;
};,

"union": union
const union = ( a, b ) => Array.from( new Set( [ ...a, ...b ] ) );,

"unionBy": unionBy
const unionBy = ( a, b, fn ) => {
    const s = new Set( a.map( v => fn( v ) ) );

    return Array.from( new Set( [ ...a, ...b.filter( x => !s.has( fn( x ) ) ) ] ) );
};,

"unionWith": unionWith
const unionWith = ( a, b, comp ) =>
    Array.from( new Set( [ ...a, ...b.filter( x => a.findIndex( y => comp( x, y ) ) === -1 ) ] ) );,

"uniqueElements": uniqueElements
const uniqueElements = arr => [ ...new Set( arr ) ];,

"untildify": untildify
const untildify = str => str.replace( /^~(\\$|/ |\\ ) /, `${ require( 'os' ).homedir() }$1`);,

"unzip": unzip
const unzip = arr =>
    arr.reduce(
        ( acc, val ) => ( val.forEach( ( v, i ) => acc[ i ].push( v ) ), acc ),
        Array.from( {
            length: Math.max( ...arr.map( x => x.length ) )
        } ).map( x => [] )
    );,

"unzipWith": unzipWith
const unzipWith = ( arr, fn ) =>
    arr
        .reduce(
            ( acc, val ) => ( val.forEach( ( v, i ) => acc[ i ].push( v ) ), acc ),
            Array.from( {
                length: Math.max( ...arr.map( x => x.length ) )
            } ).map( x => [] )
        )
        .map( val => fn( ...val ) );,

"URLJoin": URLJoin
const URLJoin = ( ...args ) =>
    args
        .join( '/' )
        .replace( /[/]+/g, '/' )
        .replace( /^(.+):/ /, '$1://' )
        .replace( /^file:/, 'file:/' )
        .replace(//(\\?|&|#[^!])/g, '$1')
   .replace( /\\?/g, '&' )
        .replace( '&', '?' );,

"UUIDGeneratorBrowser": UUIDGeneratorBrowser
const UUIDGeneratorBrowser = () =>
    ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, c =>
        ( c ^ ( crypto.getRandomValues( new Uint8Array( 1 ) )[ 0 ] & ( 15 >> ( c / 4 ) ) ) ).toString( 16 )
    );,

"UUIDGeneratorNode": UUIDGeneratorNode
const crypto = require( 'crypto' );
const UUIDGeneratorNode = () =>
    ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, c =>
        ( c ^ ( crypto.randomBytes( 1 )[ 0 ] & ( 15 >> ( c / 4 ) ) ) ).toString( 16 )
    );,

"validateNumber": validateNumber
const validateNumber = n => !isNaN( parseFloat( n ) ) && isFinite( n ) && Number( n ) == n;,

"without": without
const without = ( arr, ...args ) => arr.filter( v => !args.includes( v ) );,

"words": words
const words = ( str, pattern = /[^a-zA-Z-]+/ ) => str.split( pattern ).filter( Boolean );,

"xProd": xProd
const xProd = ( a, b ) => a.reduce( ( acc, x ) => acc.concat( b.map( y => [ x, y ] ) ), [] );,

"yesNo": yesNo
const yesNo = ( val, def = false ) =>
    /^(y|yes)\\$/i.test( val ) ? true : /^(n|no)\\$/i.test( val ) ? false : def;,

"zip": zip
const zip = ( ...arrays ) => {
    const maxLength = Math.max( ...arrays.map( x => x.length ) );

    return Array.from( { length: maxLength } ).map( ( _, i ) => {

        return Array.from( { length: arrays.length }, ( _, k ) => arrays[ k ][ i ] );
    } );
};,

"zipObject": zipObject
const zipObject = ( props, values ) =>
    props.reduce( ( obj, prop, index ) => ( ( obj[ prop ] = values[ index ] ), obj ), {} );,

"zipWith": zipWith
const zipWith = ( ...arrays ) => {
    const length = arrays.length;
    let fn = length > 1 ? arrays[ length - 1 ] : undefined;
    fn = typeof fn == 'function' ? ( arrays.pop(), fn ) : undefined;
    const maxLength = Math.max( ...arrays.map( x => x.length ) );
    const result = Array.from( { length: maxLength } ).map( ( _, i ) => {

        return Array.from( { length: arrays.length }, ( _, k ) => arrays[ k ][ i ] );
    } );

    return fn ? result.map( arr => fn( ...arr ) ) : result;
};,

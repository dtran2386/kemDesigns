(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function () {
    
    $( "#tabs" ).tabs({
        event: "mouseover",
    });
    
//    $('#carousel').carouFredSel({
//        width: '100%',
//        items: {
//            visible: 'odd+2'
//        },
//        scroll: {
//            pauseOnHover: true,
//            onBefore: function() {
//                $(this).children().removeClass( 'hover' );
//            }
//        },
//        auto: {
//            items: 1,
//            easing: 'linear',
//            duration: 1250,
//            timeoutDuration: 0
//        },
//        pagination: {
//            container: '#pager',
//            items: 1,
//            duration: 0.5,
//            queue: 'last',
//            onAfter: function() {
//                var cur = $(this).triggerHandler( 'currentVisible' ),
//                    mid = Math.floor( cur.length / 2 );
//
//                cur.eq( mid ).addClass( 'hover' );
//            }
//        }
//    });
});

$(function() {

				$('#carousel').carouFredSel({
					width: '100%',
					items: {
						visible: 'odd+2'
					},
					scroll: {
						pauseOnHover: true,
						onBefore: function() {
							$(this).children().removeClass( 'hover' );
						}
					},
					auto: {
						items: 1,
						easing: 'linear',
						duration: 1250,
						timeoutDuration: 0
					},
					pagination: {
						container: '#pager',
						items: 1,
						duration: 0.5,
						queue: 'last',
						onAfter: function() {
							var cur = $(this).triggerHandler( 'currentVisible' ),
								mid = Math.floor( cur.length / 2 );

							cur.eq( mid ).addClass( 'hover' );
						}
					}
				});

			});
},{}]},{},[1])
$(function() { $("#sidebar").localScroll(); });
$(window).on("notify.serialScroll", function() { console.log("scroll"); });
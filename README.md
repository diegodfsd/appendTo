jQuery plugin appendTo
======================

Simple plugin to append in specific index position.


Usage
==========

Options:
	index: index position of the element
	content: element
	replace: if you wish replace the current element in the index position

$(document).ready(function(){
       $("div").appendAt(1, $("<p />").html('paragrafo 1')).appendAt(2, $("<p />").html('paragrafo 2'));
	   //In this case the second paragraph replace the first
	   $("div").appendAt(1, $("<p />").html('paragrafo 1')).appendAt(1, $("<p />").html('paragrafo 2'), true);
    });
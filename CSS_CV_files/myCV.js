/// <reference path="jquery-2.0.2.js" />
$(document).ready(init);

function init() {
    $(".hideable>header").on('click', clicked);
    $("#expandall").on('click',expandAll);
    $("#collapseall").on('click',collapseAll);

}

function expandAll() {
    $(".hideable").removeClass("hidden");
}
function collapseAll() {
    $(".hideable").addClass("hidden");
}

function clicked() {
    var pp = $(this).parent("section");
    if (pp.hasClass("hidden")) {
        pp.removeClass("hidden");
    } else {
        pp.addClass("hidden");
    }
}
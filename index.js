$("#js-shopping-list-form").submit( e => {
    event.preventDefault();
    let newItem = $("#shopping-list-entry").val();
    $('.shopping-list').append("<li draggable='true' ondragstart='drag(event)' id='" + newItem + "'><span class='shopping-item'>" + newItem + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button></div></li>");
});

$('ul').on("click", '.shopping-item-toggle', function() {
    event.preventDefault();
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("html", event.target.id);
}

function drop(event) {
    let id = event.dataTransfer.getData("html");
    let elem = document.getElementById(id);
    elem.remove();
}
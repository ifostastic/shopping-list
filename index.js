$("#js-shopping-list-form").submit( e => {
    event.preventDefault();
    let newItem = $("#shopping-list-entry").val();
    $('.shopping-list').append("<li><span class='shopping-item'>" + newItem + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
});

$('.shopping-item-toggle').click(function() {
    event.preventDefault();
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});

$('.shopping-item-delete').click(function() {
    event.preventDefault();
    $(this).closest('li').remove();
});
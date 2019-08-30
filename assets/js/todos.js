//Check off todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//deleting items in list
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding items to list
$("input[type = 'text']").keypress(function(){
    if(event.which === 13){
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
    }
});

//toggling input box
$("#toggle").click(function(){
    $("input[type = 'text']").fadeToggle();
});

//clearing list
$("p").click(function(){
    $("li").remove();
})
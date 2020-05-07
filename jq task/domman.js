$(document).ready(function () {

    /* DOM Manipulation */
    // Appending HTML to the DOM

    var paragraph = $("<p>This paragraph was generated by jQuery</p>");

    // The following are the main methods to manipulate the DOM via jQuery:

    // before() adds the node just before the selector
    $(".html-generated").before(paragraph);

    // after() adds the node just after the selector
    $(".html-generated").after(paragraph.clone());

    // prepend() adds the node to the top of the selector
    var jquery = $("<li>jQuery-generated</li>");
    $("ul").prepend(jquery);

    // append() adds the node to the bottom of the selector
    $("ul").append(jquery.clone());

    // remove() removes the element from the DOM
    $("ul").children().last().prev().remove();

    // closest() finds the closest element (going up) that fits the selector
    $("ul").closest('.frameworks').append(jquery.clone());

    /* Interaction */

    // the .ready() method receives an event handler function as an argument
    // You can pass in a function that will be executed once the event gets triggered

    // The syntax is the following :
                 //event   event handler
    $('input').on('click', function(){
        // This is executed when the button is clicked
        $("ul").append(jquery.clone());
    });

    // It is a good practice to use event-delegation
    // It allows to only target certain elements that are inside a given selector
    $('div').on('click','input', function(){
        $("ul").append("<input type='button' value='button'/>");
    });

    // 'this' keyword allows to act on the item that triggered the event
    $('#removed-button').on('click', function(){
        // You need to convert 'this' to a jQuery Object
        $(this).remove();
    });

    /* data Tag */
    // It is an HTML5 attribute that you can use to provide more information to the elements of your page

    //This jQuery Object method retrieves the data information
    var data = $(".data").data("value");
    $(".data").text(data);

    //This jQuery Object method sets the data information
    $(".data").data("value" , "jQuery set this paragraph");


    /* Reusing jQuery Objects */
    // It is a good practice to reuse selectors, it may be significantly faster
    // Note: During this tutorial we will not enforce this practice for the sake of clarity

    $(".html-generated").before(paragraph);
    $(".html-generated").after(paragraph.clone());

    // can be refactored into
    var htmlGenerated = $(".html-generated");
    htmlGenerated.before(paragraph);
    htmlGenerated.after(paragraph.clone());


    /* Filter selector */

    // filter() finds elements and adds granularity to the query
    // The filter selector is generally preferred (performance improvements and readability) over CSS selectors
    $(".america").filter(".south").hide();
    $(".america").filter(".south").show();

    /* Class manipulation */
    // jQuery allows to add and remove classes with addClass() and removeClass()
    $(".america").filter(".north").addClass('strong');
    $(".america").filter(".north").removeClass('strong');

});
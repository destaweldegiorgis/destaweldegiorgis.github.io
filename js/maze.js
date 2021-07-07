$(() => { 
    const MAZE = (function(){        
        let wallTouched = false;
        const defaultBoundaryBGColor = $(".boundary").css("background-color"); // reads the default color of the boundaries.
      
        const start = function() {
            $(".boundary").css("background-color",defaultBoundaryBGColor);
            wallTouched = false;
        };    
        const setBGToRed = function() { // Here, I used the function expression callback (not arrow function) in order for the "this" keyword to refer to each bounding DOM element
            $(this).css("background-color","red");
            wallTouched = true;
        };    
        const alertMessage = () => {
            alert("Sorry, you lost! :[");
        };    
        const end = () => {
            wallTouched? alert("Sorry, you lost! :["):alert("You win! :]");
        };
        return{
            start: start,
            setBGToRed: setBGToRed,
            alertMessage: alertMessage,
            end: end
        }
    })();
    $("#start").click(MAZE.start);
    $(".boundary").mouseover(MAZE.setBGToRed);
    $(".boundary").mouseleave(MAZE.alertMessage);
    $("#end").mouseover(MAZE.end);    
});
function hurricane(){
    event.preventDefault();
    var userInput = document.getElementById("windSpeed").value;
    var category;

    if(userInput <= 95 && userInput >= 75){
        category = 1;
    }else if(userInput <= 110 && userInput >= 96){
        category = 2
    }else if(userInput <= 130 && userInput >= 111){
        category = 3
    }else if(userInput <= 155 && userInput >= 131){
        category = 4
    }else if(userInput >= 156){
        category = 5
    }else{
        category = "no hurricane";
    }

    document.getElementById("result").innerHTML = "Hurricane Category is: " + category;
}

function reset(){
    location.reload();
}
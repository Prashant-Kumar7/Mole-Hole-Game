var listRowCol = [[1,1],[1,6],[2,4],[2,9],[3,2],[3,7],[4,4],[4,9],[5,1],[5,6],[6,3],[6,8]]

var score = 0;

$("button").click(function(){
    document.querySelector(".live-score").innerHTML = score + " Points";
    var timer = 60;
    var now = new Date().getTime();
    var interval = setInterval(function(){
        var randomHole = Math.floor(Math.random() * (listRowCol.length)) ;
        var randomHoleList = listRowCol[randomHole];
        var randomRow = randomHoleList[0];
        var randomCol = randomHoleList[1];
        
        setTimeout(function(){
            $(".row-" + randomRow +".col-"+ randomCol).removeClass("mole");
        },1500)
        if (new Date().getTime() - now > 62000) {
            clearInterval(interval);
            score = 0;
            
            return;
        }
        $(".row-" + randomRow +".col-"+ randomCol).addClass("mole");
        document.querySelector(".live-timer").innerHTML = timer + " seconds";
        timer = 60 - Math.floor((new Date().getTime() - now)/1000);
    },1000)
})


$(".container").click(function(event){
    var l = $(event.target).attr("class");
    var colString = l.slice(14,15);
    var rowString = l.slice(8,9);
    if(l.length > 21){
        $(".row-" + rowString +".col-"+ colString).removeClass("mole");
        var smack = new Audio("audio/karate-chop-6357.mp3");
        smack.play();
        score=score+10;
        document.querySelector(".live-score").innerHTML = "+" +score + " Points";
        console.log("YOU HIT THE TARGET")
    } else{
        var whoosh = new Audio("audio/whoosh-6316.mp3");
        whoosh.play();
        console.log("YOU MISSED THE TARGET")
    }
})
document.querySelector(".live-score").innerHTML = score + " Points";
document.querySelector(".live-timer").innerHTML =  timer + " seconds";


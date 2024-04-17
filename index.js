
$(".drum").click(function () {
    makeSound(this.innerHTML);
    animationButton(this.innerHTML);
});

$(document).keydown(function (event) {
    makeSound(event.key);
    animationButton(event.key);
});

function makeSound(key) {
       switch (key) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
        }

}

function animationButton(key) {
    var activeButton = $("." + key)
    
    activeButton.addClass("pressed");

    setTimeout(function () {
        activeButton.removeClass("pressed");
    } , 100);

}


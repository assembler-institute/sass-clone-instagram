const templates = [
    "chatWhiteMobile",
    "dashWhiteMobile",
    "photoWhiteMobile",
    "profileWhiteMobile"
];
var i = 1;

window.onload = () => {
    setInterval(function () {
        $("#templateImg").children().fadeOut(1000);
        setTimeout(function () {
            $("#templateImg").children().remove();
            $("#templateImg").fadeIn(1000).append(`
            <img src="assets/img/mobilemockup${templates[i]}.jpg">
        `)
            $('#templateImg').children().hide().fadeIn(300);
        }, 800)
        if (i < 3) {
            i++;
        } else {
            i = 0;
        }

    }, 5000)
}

function templateRandomize() {
    return Math.floor(Math.random() * templates.length);
}
console.log(templateRandomize());
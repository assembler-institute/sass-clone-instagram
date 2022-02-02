const templates = [
    "chatWhiteMobile",
    "dashWhiteMobile",
    "photoWhiteMobile",
    "profileWhiteMobile"
];

window.onload = () => {
    setInterval(function () {
        $("#templateImg").children().fadeOut(1000);
        setTimeout(function () {
            $("#templateImg").children().remove();
            $("#templateImg").fadeIn(1000).append(`
            <img src="assets/img/${templates[templateRandomize()]}.jpg">
        `)
            $('#templateImg').children().hide().fadeIn(300);
        }, 800)

    }, 5000)
}

function templateRandomize() {
    return Math.floor(Math.random() * templates.length);
}
console.log(templateRandomize());
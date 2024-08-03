const clock = document.getElementById('clock');
// const clock = document.QuerySelector('#clock');

setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();

},1000);
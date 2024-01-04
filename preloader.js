// window.addEventListener('load', function(event) {
//     setTimeout(function() {
//         let preloader = document.getElementById('preloader');
//         preloader.style.transition = 'opacity 1.3s';
//         preloader.style.opacity = 0;
//         setTimeout(function() {
//             preloader.style.opacity = 0;
//         }, 1300);
//     }, 1300);
//   });


window.addEventListener('load', function (event) {
    setTimeout(function () {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('hidden'); // Add the 'hidden' class to initiate the transition
    }, 1000); // 1000 milliseconds (1 second) delay
});
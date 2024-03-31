var iphoneRed = document.querySelector('#iphoneRed');
var iphoneGreen = document.querySelector('#iphoneGreen');
var iphonePurple = document.querySelector('#iphonePurple');
var checkboxRed = document.querySelector('#checkboxred');
var checkboxGreen = document.querySelector('#checkboxgreen');
var checkboxPurple = document.querySelector('#checkboxpurple');
var homenav = document.querySelector("#homenav");

iphonePurple.style.display = 'block';
iphoneRed.style.display = 'none';
iphoneGreen.style.display = 'none';
divbotoesmac.style.display = 'none';

homenav.addEventListener("click", function() {
    location.reload();
})

checkboxGreen.addEventListener("change", function () {
    if(this. checked) {
        iphonePurple.style.display = 'none';
        iphoneRed.style.display = 'none';
        iphoneGreen.style.display = 'block';
        checkboxPurple.checked = false;
        checkboxRed.checked = false;
    }
})

checkboxRed.addEventListener("change", function () {
    if(this. checked) {
        iphonePurple.style.display = 'none';
        iphoneRed.style.display = 'block';
        iphoneGreen.style.display = 'none';
        checkboxPurple.checked = false;
        checkboxGreen.checked = false;
    }
})

checkboxPurple.addEventListener("change", function () {
    if(this. checked) {
        iphonePurple.style.display = 'block';
        iphoneRed.style.display = 'none';
        iphoneGreen.style.display = 'none';
        checkboxGreen.checked = false;
        checkboxRed.checked = false;
    }
})

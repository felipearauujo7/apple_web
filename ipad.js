var ipad = document.querySelector('#ipadnav');
var ipadblue = document.querySelector('#ipadblue');
var ipadpink = document.querySelector('#ipadpink');
var ipadgray = document.querySelector('#ipadgray');
var ipadfundoblack = document.querySelector('#ipadfundoblack');
var checkboxIpad = document.querySelector('#checkboxIpad');
var checkboxBlue = document.querySelector('#checkboxBlue');
var checkboxGray = document.querySelector('#checkboxGray');
var checkboxPink = document.querySelector('#checkboxPink');


ipad.addEventListener("click", function() {
    ipadpink.style.display = 'none';
    ipadgray.style.display = 'none'; 
    ipadblue.style.display = 'block';
    
    checkbox.style.display = 'none';
    checkboxIpad.style.display = 'block';
    macbookDuplo.style.display = 'none';
    divbotoesmac.style.display = 'none';
    iphonePurple.style.display = 'none';
    iphoneRed.style.display = 'none';
    iphoneGreen.style.display = 'none';
    ipadgray.style.display = 'none';
    macbookfundoblack.style.display = 'none';
    h2descricao.textContent = 'Ipad Pro"';
    pdescricao.textContent = 'Supercharged by M2';
    spanprice.textContent = '$499 - $999';
    macbookFrente.style.display = 'none'; 
    h3fundoblack.textContent = 'Adorável. Desenhável. Mágico.';
    iphonefundoblack.style.display = 'none';
    ipadfundoblack.style.display = 'block';
    h3about.textContent = 'Descubra o Ipad Pro: Experiência Inexplicável';
    pabout.textContent = 'O iPad é uma linha de tablets desenvolvida pela Apple Inc., que redefiniu a forma como interagimos com a tecnologia móvel. Desde o seu lançamento inicial em 2010, o iPad tem sido uma escolha popular para uma ampla gama de usuários, oferecendo uma combinação única de portabilidade, versatilidade e desempenho.';

    
    checkboxBlue.checked = true;
    checkboxGray.checked = false;
    checkboxPink.checked = false;
});

checkboxBlue.addEventListener("change", function () {
    if(this.checked) {
        ipadpink.style.display = 'none';
        ipadblue.style.display = 'block';
        ipadgray.style.display = 'none';
        checkboxBlue.style.accentColor = '#3d9fcc';
        checkboxGray.checked = false;
        checkboxPink.checked = false;
    }
})

checkboxGray.addEventListener("change", function () {
    if(this.checked) {
        ipadpink.style.display = 'none';
        ipadblue.style.display = 'none';
        ipadgray.style.display = 'block';
        checkboxGray.style.accentColor = 'gray';
        checkboxPink.checked = false;
        checkboxBlue.checked = false;
    } 
})

checkboxPink.addEventListener("change", function () {
    if(this.checked) {
        ipadpink.style.display = 'block';
        ipadblue.style.display = 'none';
        ipadgray.style.display = 'none';
        checkboxPink.style.accentColor = 'pink';
        checkboxGray.checked = false;
        checkboxBlue.checked = false;
    } 
})
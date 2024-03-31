var mac = document.querySelector('#macnav');
var macbookFrente = document.querySelector('#macbookfrente');
var macbookDuplo = document.querySelector('#macbookduplo');
var checkbox = document.querySelector('#checkbox');
var h2descricao = document.querySelector('#h2descricao');
var pdescricao = document.querySelector('#pdescricao');
var spanprice = document.querySelector('#spanprice');
var divbotoesmac = document.querySelector('#divbotoesmac');
var h3fundoblack = document.querySelector('#h3divfundoblack');
var iphonefundoblack = document.querySelector('#iphonefundoblack');
var macbookfundoblack = document.querySelector('#macbookfundoblack');
var h3about = document.querySelector('#h3about');
var pabout = document.querySelector('#pabout');
var botaomacprevious = document.querySelector('#botaomacprevious');
var botaomacnext = document.querySelector('#botaomacnext');

mac.addEventListener("click", function() {
    divbotoesmac.style.display = 'block';
    iphonePurple.style.display = 'none';
    iphoneRed.style.display = 'none';
    iphoneGreen.style.display = 'none';
    checkbox.style.display = 'none';
    h2descricao.textContent = 'MacBook Pro 14"';
    pdescricao.textContent = 'M3 max chip';
    spanprice.textContent = '$999 - $1599';
    macbookFrente.style.display = 'block';
    h3fundoblack.textContent = 'Você busca produtividade?';
    iphonefundoblack.style.display = 'none';
    macbookfundoblack.style.display = 'block';
    h3about.textContent = 'Descubra o MacBook Pro: Produtividade em Alto Nível';
    pabout.textContent = 'O MacBook é uma linha de laptops desenvolvida pela Apple Inc., conhecida por sua elegância, desempenho e integração perfeita com o ecossistema da Apple. Desde o seu lançamento inicial em 2006, o MacBook tem sido um símbolo de inovação e excelência em design no mundo da tecnologia.';

});

botaomacprevious.addEventListener("click", function() {
    macbookDuplo.style.display = 'none';
    macbookFrente.style.display = 'block'
});

botaomacnext.addEventListener("click", function() {
    macbookDuplo.style.display = 'block';
    macbookFrente.style.display = 'none';
})
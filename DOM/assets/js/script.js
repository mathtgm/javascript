const btnSelector = document.getElementById('btnSelector');
const titlePage = document.getElementById('title-page');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const titleSite = document.getElementsByTagName('title')[0];

btnSelector.addEventListener('click', mudarModo);

function mudarModo() {
    mudaClasse();
    mudaTexto()
}

function mudaClasse() {
    btnSelector.classList.toggle('dark-mode');
    titlePage.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

function mudaTexto() {
    if(btnSelector.classList.contains('dark-mode')) {
        btnSelector.textContent = 'Deixe claro!';
        titlePage.textContent = 'Modo escuro';
        titleSite.textContent = 'Dark Mode'
    } else {
        btnSelector.textContent = 'Meus olhos estão queimando!';
        titlePage.textContent = 'Modo claro';
        titleSite.textContent = 'Light Mode'
    }
    
}

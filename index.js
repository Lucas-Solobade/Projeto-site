const luz = document.getElementById('luz-mouse');

if (!luz) {
    console.error("ERRO: A div 'luz-mouse' não foi encontrada no HTML!");
}

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX + window.pageXOffset;
    const posY = e.clientY + window.pageYOffset;
    
    luz.style.left = posX + 'px';
    luz.style.top = posY + 'px';
});
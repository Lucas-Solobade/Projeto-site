document.addEventListener('DOMContentLoaded', () => {
    const luz = document.getElementById('luz-mouse');

    if (!luz) {
        console.error("ERRO: A div 'luz-mouse' não foi encontrada no HTML!");
        return; // Para o script sem quebrar o resto se não achar a div
    }

    document.addEventListener('mousemove', (e) => {
        // Pegamos a posição do mouse na janela + o quanto a página rolou
        const posX = e.clientX + window.pageXOffset;
        const posY = e.clientY + window.pageYOffset;
        
        luz.style.left = posX + 'px';
        luz.style.top = posY + 'px';
    });
});
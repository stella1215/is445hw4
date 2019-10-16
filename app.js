const handler = e => {
    if (e.keyCode === 73 || e.keyCode === 105) {
        let font = document.getElementById('balloon');
        let nfont = parseInt(getComputedStyle(font).getPropertyValue('font-size'));
        if (nfont <= 50) {
            font.style.fontSize = nfont + 10 + 'px';
        } else {
            font.innerHTML = '💥';
            document.removeEventListener("keyup", handler);
        }
    }
    if (e.keyCode === 68 || e.keyCode === 100) {
        let font = document.getElementById('balloon');
        let nfont = parseInt(getComputedStyle(font).getPropertyValue('font-size'));
        if (nfont > 10) {
            font.style.fontSize = nfont - 10 + 'px';
        } else {
            font.innerHTML = 'Done';
            document.removeEventListener("keyup", handler);
        }
    }
};
document.addEventListener("keyup", handler);


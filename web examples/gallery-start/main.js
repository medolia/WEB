const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (let i=1; i<=5; i++){
    let imgName = 'images/pic' + i + '.jpg';
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgName);
    thumbBar.appendChild(newImage);
    newImage.onclick = function() {
        displayedImage.setAttribute('src', imgName);
    }
}

/* 编写 变亮/变暗 按钮 */
btn.onclick = function() {
    let btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'light';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else if (btnClass === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'dark';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

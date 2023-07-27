'use strict';

//隠れ課題　その1
//#menu-btnをクリックしたら、#menu-btnに.closeを、#gnaviに.openがついたり消えたりするように設定する

document.getElementById('menu-btn').addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('close');
    document.getElementById('gnavi').classList.toggle('open');
});

//隠れ課題　その2 スクロールイベント
//上から300px以上スクロールしたら、#page-topに.openをつける。300px未満は.openをはずす
window.addEventListener('scroll', () => {
    const scroll = window.scrollY; //スクロール値
    console.log(scroll);

    if (scroll >= 300) {
        document.getElementById('page-top').classList.add('open');
    } else {
        document.getElementById('page-top').classList.remove('open');
    }
});


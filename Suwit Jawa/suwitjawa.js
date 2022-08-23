function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}


function acakGambar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', '' + gambar[i++] + '.png')
        if (i == gambar.length) {
            i = 0;
        }
    }, 100)
}

//LEBIH EFEKTIF
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        acakGambar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', '' + pilihanComputer + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)
        // const imgComputer = document.querySelector('.img-komputer');
        // imgComputer.setAttribute('src', '' + pilihanComputer + '.png');
        // const info = document.querySelector('.info');
        // info.innerHTML = hasil;
    })
})

//KURANG EFEKTIF
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '' + pilihanComputer + '.png');


//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('Comp : ' + pilihanComputer);
//     // console.log('Player : ' + pilihanPlayer);
//     // console.log('Hasil : ' + hasil);
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '' + pilihanComputer + '.png');


//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('Comp : ' + pilihanComputer);
//     // console.log('Player : ' + pilihanPlayer);
//     // console.log('Hasil : ' + hasil);
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '' + pilihanComputer + '.png');


//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('Comp : ' + pilihanComputer);
//     // console.log('Player : ' + pilihanPlayer);
//     // console.log('Hasil : ' + hasil);
// });
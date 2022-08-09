const p3 = document.querySelector('.p3');
function ubahWarna() {
    p3.style.backgroundColor = 'lightblue'
}
//cara pertama 
// onclick = "ubahWarna()" //dalam tag

//cara kedua
// p3.onclick = ubahWarna; //dalam javascript

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    //ketika klik paragraf 4 muncul alert
    // alert('ok')
    //menambahkan item baru ketika di click
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const addLi = document.createTextNode('Item Baru');
    li.appendChild(addLi);
    ul.appendChild(li);
})



//perbedaan handler dan addEventListener
const p = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue'
// }

// p3.onclick = function () {
//     p3.style.color = 'red'
// }
// Saat menggunakan handler yang jalan adalah perintah terakhir

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('click', function () {
    p3.style.color = 'red'
});
// Saat menggunakan addEventListener yang jalan keduanya


//Daftar Event
    // Mouse Event = ketika mouse di click atau digerakkan
    // Keyboard Event = ketika keyboard ditekan 
    // Resources Event = ketika halaman reload apakah koneksi lambat atau tidak
    // Focus Event
    // View Event
    // Form Event
    // CSS Animation & Transition Event
    // Drag & drop Event
    // dll

    //Selengkapnya
    //https://developer.mozilla.org/en-US/docs/Web/Events
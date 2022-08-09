//DOM Selection Method

// getElementById() // Memilih element berdasarkan atribut id
// getElementsByTagName() //Mencari element-element dengant tag name tertentu
// getElementsByClassName() //Mencari element-element dengant nama class tertentu
// querySelector() // memilih satu element yang dipilih atau memilih selector CSS pada dokumen HTML
// querySelectorALL() // memilih semua yang dipilih atau memilih selector CSS pada dokumen HTML


// getElementById() // element
// getElementsByTagName() // HTML Collection
// getElementsByClassName() // HTML Collection
// querySelector() // element
// querySelectorALL() // nodeList


//////////////////
// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Arik Junior';

// ///////////////////
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';

// }
// const h1 = document.getElementsByTagName('h1')[0];

// h1.style.fontSize = '50px';

// //////////////////////
// const p1 = document.getElementsByClassName('p1')[0];

// p1.innerHTML = 'ini diubah dari javascript';


/////////////////////
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor = 'orange'

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah menggunakan javascript'




////////////////////
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue'
}
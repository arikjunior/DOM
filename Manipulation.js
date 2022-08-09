////element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Arik Junior</em>';


// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!'


////element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'


////element.setAttribute
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link') // menambah id = "link"



////element.classList.

// const p2 = document.querySelector('.p2');
// p2.elemenet.classList.add()
// p2.elemenet.classList.remove()
// p2.elemenet.classList.toggle()
// p2.elemenet.classList.item()
// p2.elemenet.classList.contains()
// p2.elemenet.classList.replace()


/////
//Manipulasi Node
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

//Buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const liTeks = document.createTextNode('item baru');
liBaru.appendChild(liTeks);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)')
ul.appendChild(liBaru);
ul.insertBefore(liBaru, li2); //menyisipkan ditengah-tengah



////////////// REMOVE
const hapusA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];
hapusA.removeChild(link)


///////////// REPLACE
const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
secB.replaceChild(h2Baru, p4);
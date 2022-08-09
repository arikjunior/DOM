//DOM (Document Object Model) adalah Representasi element HTML didalam document menjadi sebuah object

//DOM adalah Antarmuka pemrograman berbasis object yang mempresentasikan dokumen web

//DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi

//Komponen :
// element HTML
// atribut
// text
// dll

//DOM dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan javascript


//Struktur Hierarki DOM

//- Root Node :
//  node yang menjadi sumber dari semua node lain didalam DOM
// document

//- Parent Node :
//  node yang berada 1 tingkat diatas node yang lain
// body adalah parent dari h1,p,p,div dan a

//- Child Node :
//  node yang berada 1 tingkat dibawah node yang lain
//  h1 adalah child dari body


console.log(document);


// Dom Manipulation Method

//Manipulasi Element
    //element.innerHTML = mengubah text yang diseleksi
    //element.style.<property> = mengubah style atau css dari sebuah element yang diseleksi
    //element.setAttribute() = memanipulasi atribut pada sebuah element yang melekat pada element yang sudah kita seleksi
    //element.classList = memanipulasi class yan kita seleksi

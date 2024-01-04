
const menampilkan_bangun_datar = (argument) => {
    const segitiga = document.getElementById('segitiga')
    const jajargenjang = document.getElementById('jajargenjang')
    const persegi = document.getElementById('persegi')
    const nav_button_segitiga = document.getElementById('nav_button_segitiga')
    const nav_button_jajargenjang = document.getElementById('nav_button_jajargenjang')
    const nav_button_persegi = document.getElementById('nav_button_persegi')

    if(argument=="jajargenjang"){
        segitiga.classList.add('none')
        jajargenjang.classList.remove('none')
        persegi.classList.add('none')
        nav_button_segitiga.classList.remove('active')
        nav_button_jajargenjang.classList.add('active')
        nav_button_persegi.classList.remove('active')

    }else if(argument=="segitiga"){
        segitiga.classList.remove('none')
        jajargenjang.classList.add('none')
        persegi.classList.add('none')
        nav_button_segitiga.classList.add('active')
        nav_button_jajargenjang.classList.remove('active')
        nav_button_persegi.classList.remove('active')

    }else if(argument=="persegi"){
        segitiga.classList.add('none')
        jajargenjang.classList.add('none')
        persegi.classList.remove('none')
        nav_button_segitiga.classList.remove('active')
        nav_button_jajargenjang.classList.remove('active')
        nav_button_persegi.classList.add('active')
    }
}

// Segitiga =====================================================================

const luas_segitiga = document.getElementById("luas_segitiga");
const keliling_segitiga = document.getElementById("keliling_segitiga");
const button_luas_segitiga = document.getElementById("button_luas_segitiga")
const button_keliling_segitiga = document.getElementById("button_keliling_segitiga")

const tampil_rumus_segitiga = (argument) => {
    if (argument == "keliling"){
        luas_segitiga.classList.add("none");
        keliling_segitiga.classList.remove("none");
        button_luas_segitiga.classList.remove("active");
        button_keliling_segitiga.classList.add("active");

    } else {
        keliling_segitiga.classList.add("none");
        luas_segitiga.classList.remove("none");
        button_keliling_segitiga.classList.remove("active");
        button_luas_segitiga.classList.add("active");
    }
}


const hitung_luas_segitiga = () => {
    const alas_segitiga = document.getElementById('alas_segitiga');
    const tinggi_segitiga = document.getElementById('tinggi_segitiga');

    if (alas_segitiga.value === "" || tinggi_segitiga.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_alas = parseFloat(alas_segitiga.value);
    const nilai_tinggi = parseFloat(tinggi_segitiga.value);

    const hasil = (1/2) * nilai_alas * nilai_tinggi;
    const perhitungan = "1/2 x " + nilai_alas + " m x " + nilai_tinggi + " m";

    document.getElementById('perhitungan_luas_segitiga').textContent = perhitungan;
    document.getElementById('hasil_luas_segitiga').textContent = hasil + " m2";
 }

 const hitung_keliling_segitiga = () => {
    const sisi_1 = document.getElementById('sisi_1');
    const sisi_2 = document.getElementById('sisi_2');
    const sisi_3 = document.getElementById('sisi_3');

    if (sisi_1.value === "" || sisi_2.value === "" || sisi_3.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_sisi_1 = parseFloat(sisi_1.value);
    const nilai_sisi_2 = parseFloat(sisi_2.value);
    const nilai_sisi_3 = parseFloat(sisi_3.value);

    const hasil = nilai_sisi_1 + nilai_sisi_2 + nilai_sisi_3;
    const perhitungan = nilai_sisi_1+" m + "+ nilai_sisi_2 +" m + "+ nilai_sisi_3 +" m";

    document.getElementById('perhitungan_keliling_segitiga').textContent = perhitungan;
    document.getElementById('hasil_keliling_segitiga').textContent = hasil + " m";
 }

 const reset_hasil_segitiga = () => {
    document.getElementById('perhitungan_luas_segitiga').textContent = "";
    document.getElementById('hasil_luas_segitiga').textContent = "";
    document.getElementById('perhitungan_keliling_segitiga').textContent = "";
    document.getElementById('hasil_keliling_segitiga').textContent = "";
 }


// Jajargenjang =====================================================================

const luas_jajargenjang = document.getElementById("luas_jajargenjang");
const keliling_jajargenjang = document.getElementById("keliling_jajargenjang");
const button_luas_jajargenjang = document.getElementById("button_luas_jajargenjang")
const button_keliling_jajargenjang = document.getElementById("button_keliling_jajargenjang")

const tampil_rumus_jajargenjang = (argument) => {
    if (argument == "keliling"){
        luas_jajargenjang.classList.add("none");
        keliling_jajargenjang.classList.remove("none");
        button_luas_jajargenjang.classList.remove("active");
        button_keliling_jajargenjang.classList.add("active");

    } else {
        keliling_jajargenjang.classList.add("none");
        luas_jajargenjang.classList.remove("none");
        button_keliling_jajargenjang.classList.remove("active");
        button_luas_jajargenjang.classList.add("active");
    }
}

const hitung_luas_jajargenjang = () => {
    const alas_jajargenjang = document.getElementById('alas_jajargenjang');
    const tinggi_jajargenjang = document.getElementById('tinggi_jajargenjang');

    if (alas_jajargenjang.value === "" || tinggi_jajargenjang.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_alas = parseFloat(alas_jajargenjang.value);
    const nilai_tinggi = parseFloat(tinggi_jajargenjang.value);

    const hasil = nilai_alas * nilai_tinggi;
    const perhitungan = nilai_alas + " m x " + nilai_tinggi + " m";

    document.getElementById('perhitungan_luas_jajargenjang').textContent = perhitungan;
    document.getElementById('hasil_luas_jajargenjang').textContent = hasil + " m2";
}

const hitung_keliling_jajargenjang = () => {
    const sisi_1 = document.getElementById('sisi_1_jajargenjang');
    const sisi_2 = document.getElementById('sisi_2_jajargenjang');


    if (sisi_1.value === "" || sisi_2.value === "" ) {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_sisi_1 = parseFloat(sisi_1.value);
    const nilai_sisi_2 = parseFloat(sisi_2.value);

    const hasil = 2 * (nilai_sisi_1 + nilai_sisi_2);
    const perhitungan = 2 + " x (" + nilai_sisi_1+" m + "+ nilai_sisi_2 +" m)";

    document.getElementById('perhitungan_keliling_jajargenjang').textContent = perhitungan;
    document.getElementById('hasil_keliling_jajargenjang').textContent = hasil + " m";
 }

 const reset_hasil_jajargenjang = () => {
    document.getElementById('perhitungan_luas_jajargenjang').textContent = "";
    document.getElementById('hasil_luas_jajargenjang').textContent = "";
    document.getElementById('perhitungan_keliling_jajargenjang').textContent = "";
    document.getElementById('hasil_keliling_jajargenjang').textContent = "";
 }

 // Jajargenjang =====================================================================

const luas_persegi = document.getElementById("luas_persegi");
const keliling_persegi = document.getElementById("keliling_persegi");
const button_luas_persegi = document.getElementById("button_luas_persegi")
const button_keliling_persegi = document.getElementById("button_keliling_persegi")

const tampil_rumus_persegi = (argument) => {
    if (argument == "keliling"){
        luas_persegi.classList.add("none");
        keliling_persegi.classList.remove("none");
        button_luas_persegi.classList.remove("active");
        button_keliling_persegi.classList.add("active");

    } else {
        keliling_persegi.classList.add("none");
        luas_persegi.classList.remove("none");
        button_keliling_persegi.classList.remove("active");
        button_luas_persegi.classList.add("active");
    }
}

const hitung_luas_persegi = () => {
    const sisi_persegi_luas = document.getElementById('sisi_persegi_luas');

    if (sisi_persegi_luas.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_sisi = parseFloat(sisi_persegi_luas.value);

    const hasil = nilai_sisi * nilai_sisi;
    const perhitungan = nilai_sisi + " m x " + nilai_sisi + " m";

    document.getElementById('perhitungan_luas_persegi').textContent = perhitungan;
    document.getElementById('hasil_luas_persegi').textContent = hasil + " m2";
}

const hitung_keliling_persegi = () => {
    const sisi_persegi_keliling = document.getElementById('sisi_persegi_keliling');


    if (sisi_persegi_keliling.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const nilai_sisi = parseFloat(sisi_persegi_keliling.value);

    const hasil = nilai_sisi + nilai_sisi + nilai_sisi + nilai_sisi ;
    const perhitungan = nilai_sisi +" m + "+ nilai_sisi +" m + "+ nilai_sisi +" m + "+ nilai_sisi +" m";

    document.getElementById('perhitungan_keliling_persegi').textContent = perhitungan;
    document.getElementById('hasil_keliling_persegi').textContent = hasil + " m";
 }

 const reset_hasil_persegi = () => {
    document.getElementById('perhitungan_luas_persegi').textContent = "";
    document.getElementById('hasil_luas_persegi').textContent = "";
    document.getElementById('perhitungan_keliling_persegi').textContent = "";
    document.getElementById('hasil_keliling_persegi').textContent = "";
 }
let luas_segitiga = document.getElementById("luas_segitiga");
let keliling_segitiga = document.getElementById("keliling_segitiga");
let button_luas_segitiga = document.getElementById("button_luas_segitiga")
let button_keliling_segitiga = document.getElementById("button_keliling_segitiga")

function menampulkan_mentuk(argument){
    let segitiga = document.getElementById('segitiga')
    let jajargenjang = document.getElementById('jajargenjang')
    if(argument=="jajargenjang"){
        segitiga.classList.add('none')
        jajargenjang.classList.remove('none')
    }else{
        jajargenjang.classList.add('none')
        segitiga.classList.remove('none')
    }
}

function hiddendisplay(argument){
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


function hitung_luas_segitiga(){
    let alas_segitiga = document.getElementById('alas_segitiga');
    let tinggi_segitiga = document.getElementById('tinggi_segitiga');

    if (alas_segitiga.value === "" || tinggi_segitiga.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    let nilai_alas = parseFloat(alas_segitiga.value);
    let nilai_tinggi = parseFloat(tinggi_segitiga.value);

    let hasil = (1/2) * nilai_alas * nilai_tinggi;
    let perhitungan = "1/2 x " + nilai_alas + " m x " + nilai_tinggi + " m";

    document.getElementById('perhitungan_luas_segitiga').textContent = perhitungan;
    document.getElementById('hasil_luas_segitiga').textContent = hasil + " m2";
 }

 function hitung_keliling_segitiga(){
    let sisi_1 = document.getElementById('sisi_1');
    let sisi_2 = document.getElementById('sisi_2');
    let sisi_3 = document.getElementById('sisi_3');

    if (sisi_1.value === "" || sisi_2.value === "" || sisi_3.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    let nilai_sisi_1 = parseFloat(sisi_1.value);
    let nilai_sisi_2 = parseFloat(sisi_2.value);
    let nilai_sisi_3 = parseFloat(sisi_3.value);

    let hasil = nilai_sisi_1 + nilai_sisi_2 + nilai_sisi_3;
    let perhitungan = nilai_sisi_1+" m + "+ nilai_sisi_2 +" m + "+ nilai_sisi_3 +" m + ";

    document.getElementById('perhitungan_keliling_segitiga').textContent = perhitungan;
    document.getElementById('hasil_keliling_segitiga').textContent = hasil + " m";
 }

 function reset_hasil_segitiga() {
    document.getElementById('perhitungan_luas_segitiga').textContent = "";
    document.getElementById('hasil_luas_segitiga').textContent = "";
    document.getElementById('perhitungan_keliling_segitiga').textContent = "";
    document.getElementById('hasil_keliling_segitiga').textContent = "";
 }
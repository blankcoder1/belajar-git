// DOM
const tipedriverEl = document.getElementById('tipedriver')
const tanggalEl = document.getElementById('tangal')
const jamEl = document.getElementById('jam')
const penumpangEl = document.getElementById('penumpang')
const cariEl = document.getElementById('cari')

const filterData = {
    tipedriver: '',
    tanggal: '',
    waktu: '',
    jumlahPenumpang: ''
}

// trigger
cariEl.addEventListener('click', function(e){
    filterData.tipedriver = tipedriverEl.value
    filterData.tanggal = tanggalEl.value
    filterData.waktu = jamEl.value
    filterData.jumlahPenumpang = penumpangEl.value
    console.log(filterData)
})
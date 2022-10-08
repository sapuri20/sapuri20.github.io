$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_bagian = rid[1];
        let nama_mhs = $('#nama_mhs__'+id_bagian).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Anda yakin ingin menghapus data atas nama ${nama_mhs} ??`);
            if(!konfirmasi) return;

            $('#bagian__'+id_bagian).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})
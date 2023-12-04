$(document).ready(function() {
    $("#bayar").click(function() {
        console.log("Tombol 'bayar' ditekan!");
        var kiriID = $("#kiri").attr("id");
        console.log("ID kiri:", kiriID);

        // memunculkan alert sebelum ctrl + p
        showAlertBeforePrint();
    });

    $(document).keydown(function(event) {
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault();
            
            // memunculkan alert sebelum ctrl + p
            showAlertBeforePrint();
        }
    });

    // Function untuk memunculkan alert
    function showAlertBeforePrint() {
        // untuk pop up alert
        var confirmation = confirm("Sudah yakin dengan pesanan anda?");

        if (confirmation) {
            window.print();
        }
    }
});

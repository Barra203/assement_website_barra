$(document).ready(function() {
    $("#bayar").click(function() {
        console.log("Tombol 'bayar' ditekan!");
        var kiriID = $("#kiri").attr("id");
        console.log("ID kiri:", kiriID);

        window.print();
    });

    $(document).keydown(function(event) {
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault();
            window.print();
        }
    });
});

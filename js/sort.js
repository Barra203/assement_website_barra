$(document).ready(function () {
    let ascending = true;

    function toggleNotFoundMessage() {
        var $section = $('.kanan > section');
        var $notFoundMessage = $('#notFoundMessage');

        if ($section.children('.isi:visible').length === 0) {
            $notFoundMessage.show();
        } else {
            $notFoundMessage.hide();
        }
    }

    toggleNotFoundMessage();

    $('#sortByName').on('click', function () {
        var items = $('.isi:visible').detach();

        items.sort(function (a, b) {
            var nameA = $(a).find('p').text().toUpperCase();
            var nameB = $(b).find('p').text().toUpperCase();

            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        ascending = !ascending;

        var $section = $('.kanan > section');
        $section.append(items);

        toggleNotFoundMessage();
    });

    $('#sortByName').trigger('click');
});

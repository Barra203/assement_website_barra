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

    $('#searchIcon').on('click', function () {
        $('#searchInput').fadeToggle('fast').focus();
    });

    $('#searchInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        var $isiElements = $('.isi');

        var matchCount = 0;

        $isiElements.each(function () {
            var isMatch = $(this).text().toLowerCase().indexOf(value) > -1;
            if (isMatch) {
                $(this).show();
                matchCount++;
            } else {
                $(this).hide();
            }
        });

        toggleNotFoundMessage();
    });

    $('#searchInput').on('focusout', function () {
        $(this).fadeOut('fast');
        toggleNotFoundMessage();
    });

    $(document).on('keydown', function (event) {
        if (event.key === 'Escape') {
            $('#searchInput').fadeOut('fast');
            toggleNotFoundMessage();
        }
    });

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
});

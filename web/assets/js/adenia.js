/**
 * Fichier Javascript personnalisé du site Adenia.fr
 */

function clearmessages()
{
    var $successMessageField = $('.successMessage');
    if($successMessageField)
        $successMessageField.fadeOut();
    var $errorMessageField = $('.errorMessage');
    if($errorMessageField)
        $errorMessageField.fadeOut();
}

$(document).ready(function() {
    resizeThumbnail();
    resizeProductBox();

    if ($().pageScroller) {
        $('body').pageScroller({
            navigation: '.navbar-nav-left .onepage', sectionClass: 'section', scrollOffset: -110
        });
    }
});
$(window).resize(function() {
    resizeThumbnail();
    resizeProductBox();
});

function resizeThumbnail()
{
    var container = $('#container-thumbnail');
    // si le composant existe dans la page
    if(container.length > 0)
    {
        var maxheigth = 0;
        var thumbnails = [];
        $(container).children('div').each(function() // retourne les row
        {
            $(this).children('div').each(function() // retourne les col
            {
                $(this).children('div').each(function() // retourne les ct-squareThumbnail
                {
                    // "this" is a ct-squareThumbnail !
                    thumbnails.push($(this));
                    if($(this).height() > maxheigth)
                        maxheigth = $(this).height();
                });
            });
        });
        $.each(thumbnails, function(index, value)
            {
                value.height(maxheigth);
            }
        );
    }
}

function resizeProductBox()
{
    var container = $('.row-productBox');
    // si le composant existe dans la page
    for (i = 0; i <= container.length; i++)
    {
        var maxheigth = 0;
        var productBox = [];
        $(container[i]).children('div').each(function() // retourne les col
        {
            $(this).children('div').each(function() // retourne les productBox
            {
                // "this" is a ct-productBox !
                productBox.push($(this));
                if($(this).height() > maxheigth)
                    maxheigth = $(this).height();
            });
        });
        $.each(productBox, function(index, value)
            {
                value.height(maxheigth);
            }
        );
    }

}

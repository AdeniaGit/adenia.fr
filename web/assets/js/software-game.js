/** ------------------------------------------------------------------------------------- */
/** -------------------- GESTION DE LA POPUP DE JEU DES ERREURS D'OS -------------------- */
/** ------------------------------------------------------------------------------------- */
var popupVisible = false;
var popupWebVisible = false;
var errorTableIndice = 0;
var errorTableLength = errorTable.length;
function nextGameStep()
{
    // Si la popup Web n'est pas visible
    if (popupWebVisible == false)
    {
        stepTwo();
    }
    else
    {
        endGame();
    }
}

function stepTwo()
{
    // On cache la popup client lourd
    var popup = $('#popupWinSoftwareGameDiv');
    popup.css({display: 'none'});
    popup.hide();
    popupVisible = false;
    $('#gameHeader').text('Phase 2 : Applications Web');
    $('#regles-jeu').text('');
    // On affiche la popup Web
    var popupEnd = $('#popupWinSoftwareGameEndDiv');
    popupEnd.css({display: 'block'});
    popupEnd.show();
    popupWebVisible = true;
    $('#closeGameButton').text('Retour au site');
}

var inpopup = false;
// fonction déclenchée à l'entrée de la souris dans le body de la popup. Elle permet de déplacer aléatoirement la popup
// et d'en changer le texte au bout de 0,4s.
function attemptCloseWinSoftwareGame()
{
    if(inpopup == false)
    {
        inpopup = true;

        var maxWidth = $(window).width();
        var maxHeight = $(window).height();
        var popup = $('#popupWinSoftwareGameDiv');

        setTimeout(function(){
            // Changement du contenu
            errorTableIndice = (errorTableIndice + 1) % errorTableLength;
            $('#popupWinSoftwareGameImg').attr("src", errorTable[errorTableIndice].image);
            $('#popupWinSoftwareGameErrortext').html(errorTable[errorTableIndice].erreur);
            // Changement de la position
            var newTop = Math.random() * (maxHeight- popup.height());
            var newLeft = Math.random() * (maxWidth - popup.width());
            popup.css({top: newTop+'px', left: newLeft+'px', 'margin': '0'});

            inpopup = false;
        }, 400);
    }
}

// fonction qui ferme la popup de fin du jeu
function endGame()
{
    // on remet le texte du bouton à son origine
    var popup = $('#popupWinSoftwareGameEndDiv');
    //$('#'+buttonLaunchingPopup).text('Démarrer le jeu client lourd vs web');
    popup.css({display: 'none'});
    popup.hide();
    popupWebVisible = false;
    window.close();
}
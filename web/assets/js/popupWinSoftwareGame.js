/** ------------------------------------------------------------------------------------- */
/** -------------------- GESTION DE LA POPUP DE JEU DES ERREURS D'OS -------------------- */
/** ------------------------------------------------------------------------------------- */
var popupVisible = false;
var popupEndVisible = false;
var buttonLaunchingPopup = "";
var errorTableIndice = 0;
var errorTableLength = errorTable.length;
function runWinSoftwareGame(buttonPressed)
{
    // On conserve l'id du bouton qui a lancé la popup
    buttonLaunchingPopup = buttonPressed;
    // Si la popup n'est pas visible on la lance et on change le texte du bouton pour stoper le jeu
    if(popupVisible == false && popupEndVisible == false)
    {
        var popup = $('#popupWinSoftwareGameDiv');
        $('#'+buttonLaunchingPopup).text('Arrêter le jeu');
        popup.css({display: 'block', top: '50%', 'margin-top': '-60px', left: '50%', 'margin-left': '-200px'});
        popup.show();
        popupVisible = true;
    }
    // Sinon (si la popup est visible) on arrête le jeu
    else if (popupEndVisible == false)
        {
            closeWinSoftwareGame();
        }
        else
        {
            closeWinSoftwareGameEnd();
        }
}

function closeWinSoftwareGame()
{
    // On cache la popup
    var popup = $('#popupWinSoftwareGameDiv');
    popup.css({display: 'none'});
    popup.hide();
    popupVisible = false;
    var popupEnd = $('#popupWinSoftwareGameEndDiv');
    popupEnd.css({display: 'block'});
    popupEnd.show();
    popupEndVisible = true;
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
        var position = popup.position();
        var oldTop = position.top;
        var oldLeft = position.left;

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
function closeWinSoftwareGameEnd()
{
    // on remet le texte du bouton à son origine
    var popup = $('#popupWinSoftwareGameEndDiv');
    $('#'+buttonLaunchingPopup).text('Démarrer le jeu client lourd vs web');
    popup.css({display: 'none'});
    popup.hide();
    popupEndVisible = false;
}
/* catia */
( function( document, window ) {
    "use strict";
    
    window.onhashchange = gestionRaccourcis;

    function gestionRaccourcis() {

        // suppression des classes "survol"
        var raccourcis = document.querySelectorAll('#raccourcis a'), i;
        for (i = 0; i < raccourcis.length; ++i) {
            raccourcis[i].classList.remove("survol");
        }

        // ajout de la classe "survol" uniquement au bon lien
        // alert("The anchor part has changed!" + window.location.hash);
        var domElement = document.querySelector("#raccourcis a[href='"+ window.location.hash + "']"); 
        domElement.classList.add("survol");
    }


} )( document, window );

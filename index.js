function results () {    
    let noteprogrammation = parseFloat ( document.getElementById("prog").value );
    let noteArchitecture = parseFloat ( document.getElementById ("arch").value );
    let noteBase = parseFloat ( document.getElementById ("base").value );
    let noteSysteme = parseFloat ( document.getElementById ("systeme").value );
    let notePOO = parseFloat ( document.getElementById ("poo").value );
    let coefprogrammation = parseFloat ( document.getElementById ("coef-prog").value );
    let coefArchitecture = parseFloat ( document.getElementById ("coef-arch").value );
    let coefBase = parseFloat ( document.getElementById ("coef-base").value );
    let coefSysteme = parseFloat ( document.getElementById ("coef-sys").value );
    let coefPOO = parseFloat ( document.getElementById ("coef-poo").value );

    let moyenneEl = document.getElementById ("moyenne") ;
    let statutEl = document.getElementById ("statut") ;
    let mentionEl = document.getElementById ("mention") ;
    
    let totalCoef = coefprogrammation + coefArchitecture + coefBase + coefSysteme + coefPOO ;
    let moyenne = ( noteSysteme * coefSysteme + notePOO * coefPOO + noteprogrammation * coefprogrammation + noteArchitecture * coefArchitecture + noteBase * coefBase ) / totalCoef ;

    moyenneEl.textContent = moyenne;

    if ( moyenne >= 10 ) {
        statutEl.textContent = "Admis" ;
    } else {
       statutEl.textContent = "Redoublant" ;
    }
    if ( moyenne < 10 ) {
        mentionEl.textContent = "Pas de mention" ;
    } else if ( moyenne < 12 ) {
        mentionEl.textContent = "mention passable" ;
    } else if ( moyenne < 14 ) {
        mentionEl.textContent = "Assez bien" ;
    } else if ( moyenne < 16 ) {
        mentionEl.textContent = "Bien" ;
    } else {
        mentionEl.textContent = "Très bien" ;
    }
}
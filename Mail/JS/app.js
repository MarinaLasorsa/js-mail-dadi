/*ESERCIZIO: Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


//1. Creare input mail e bottone submit per ricevere i dati dall'utente. 
//Creare div dove inserire messaggio sull'esito del controllo.

//2. Recuperare dal DOM input mail con getElementById
const inputEmailElement = document.getElementById("email");
//console.log(inputEmailElement);

//3. Creare un array di varie mail che possono accedere
const emailsList = ["marina@gmail.com", "alberto@gmail.com", "donato@gmail.com", "samuel@gmail.com", "gianluca@gmail.com"];
//console.log(emailsList);

//4. Recuperare dal dom l'elemento bottone con querySelector
const ButtonElement = document.querySelector('[type="submit"]');
//console.log(ButtonElement);

//5. Creare un eventListener per il click dell'elemento bottone
ButtonElement.addEventListener('click', function() {

    //6. Dichiarare in variabile il valore di input mail
    let inputEmailValue = inputEmailElement.value;

    //7. Creare variabile di controllo "la mail è nell'array?" = false (fino a prova contraria non c'è)
    let isEmailInArray = false;

    //8. Creare ciclo per controllare ogni mail nell'array
    for (let i = 0; i < emailsList.length; i++) {

        //9. Creare variabile per elemento attuale dell'array (nomeArray[i])
        const email = emailsList[i];

        //10. SE l'elemento dell'array è uguale === al valore dell'input mail
        //ALLORA variabile di controllo "la mail è nell'array?" = true (in questo caso c'è)
        if (email === inputEmailValue) {
            isEmailInArray = true;
        }
        //11. Chiudere ciclo
    }

    //12. Recuperare dal dom l'elemento div dove inserire messaggio di esito
    const divResultMessageElement = document.querySelector(".result-message");
    //console.log(divResultMessageElement);

    //13. SE variabile di controllo = true
    //ALLORA inserisco nell'innerHTML dell'elemento div "Congratulazioni! Puoi accedere al portale."
    if (isEmailInArray === true) {
        divResultMessageElement.innerHTML = "Congratulazioni! Puoi accedere al portale.";
    } 
    
    //ALTRIMENTI inserisco nell'innerHTML dell'elemento div "Ci dispiace, non hai l'autorizzazione ad accedere al portale."
    else {
        divResultMessageElement.innerHTML = "Ci dispiace, non hai l'autorizzazione ad accedere al portale.";
    }

})





    





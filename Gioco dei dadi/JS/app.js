/*ESERCIZIO: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


//Recuperare il bottone dal DOM tramite querySelector

const buttonElement = document.querySelector('[type="button"]');
//console.log(buttonElement);

//Recuperare elemento div user-result tramite querySelector
const divUserResultElement = document.querySelector(".user-result");
//console.log(divUserResultElement);

//Recuperare elemento div computer-result tramite querySelector
const divComputerResultElement = document.querySelector('.computer-result');

//Recuperare elemento div game-result dal DOM tramite querySelector
const divGameResultElement = document.querySelector('.game-result');

//Creare un eventListener per il click del bottone
buttonElement.addEventListener('click', function(){

    //Dichiarare variabile numero random utente da 1 a 6
    let randomNumberUser = Math.floor(Math.random() * 6) + 1;

    //Inserire numero random in elemento div user-result tramite innerHTML
    divUserResultElement.innerHTML = randomNumberUser;

    //Dichiarare variabile numero random computer da 1 a 6
    let randomNumberComputer = Math.floor(Math.random() * 6) + 1;

    //Inserire numero random computer in elemento div tramite innerHTML
    divComputerResultElement.innerHTML = randomNumberComputer;

    //SE numero random utente è maggiore di numero random computer,
    if (randomNumberUser > randomNumberComputer) {
        //ALLORA 
        //Inserire in div game-result "HAI VINTO!" tramite innerHTML
        divGameResultElement.innerHTML = "HAI VINTO!";
    }
    //ALTRIMENTI SE numero random utente è uguale a numero random computer,
    else if (randomNumberUser === randomNumberComputer) {
        //ALLORA
        //Inserire in div game-result "HAI PAREGGIATO!" tramite innerHTML
        divGameResultElement.innerHTML = "HAI PAREGGIATO!"
    }

    //ALTRIMENTI
    //Inserire in div game-result "HAI PERSO!" tramite innerHTML
    else {
        divGameResultElement.innerHTML = "HAI PERSO!" 
    }
})







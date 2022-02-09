// Déclaration de fonction

let pourcent = (firstValue, secondValue, thirdvalue) => {
    let countMatches = firstValue + secondValue + thirdvalue;
    console.log(firstValue);
    console.log(secondValue);
    console.log(countMatches);
    console.log((firstValue*100)/countMatches);
    return((firstValue*100)/countMatches).toFixed(2);
}


// Déclaration des variables

let grolem = document.querySelector('.grolem');
let roucarnage = document.querySelector('.roucarnage');
let mackogneur = document.querySelector('.mackogneur');
let randomSelectCpu = document.querySelector('#randomSelectCpu');
let fight = document.querySelector('#fight');
let fighter1 = document.querySelector('#fighter1');
let fighter2 = document.querySelector('#fighter2');
let scoreMsg = document.querySelector('#scoreMsg');
let playerPts = document.querySelector('#playerPts');
let cpuPts = document.querySelector('#cpuPts');
let rate = document.querySelector('#rate');
let rate2 = document.querySelector('#rate2');
let playerCount = 0;
let cpuCount = 0;
let egality = 0;


// Sélection du pokémon au clic sur l'image

grolem.addEventListener('click', () => {
    playerChoice = 1
    grolem.classList.add('red');
    roucarnage.classList.remove('red');
    mackogneur.classList.remove('red');
    fighter1.classList.add('grolem');
    fighter1.classList.remove('mackogneur');
    fighter1.classList.remove('roucarnage');
});

roucarnage.addEventListener('click', () => {
    playerChoice = 2
    roucarnage.classList.add('red');
    grolem.classList.remove('red');
    mackogneur.classList.remove('red');
    fighter1.classList.add('roucarnage');
    fighter1.classList.remove('mackogneur');
    fighter1.classList.remove('grolem');
});

mackogneur.addEventListener('click', () => {
    playerChoice = 3
    mackogneur.classList.add('red');
    grolem.classList.remove('red');
    roucarnage.classList.remove('red');
    fighter1.classList.add('mackogneur');
    fighter1.classList.remove('grolem');
    fighter1.classList.remove('roucarnage');
});


// Sélection aléatoire du CPU lors du clic sur le bouton

randomSelectCpu.addEventListener('click', () => {
    cpuChoice = Math.floor(Math.random()*3) + 1;
    if (cpuChoice == 1 ) {
        fighter2.classList.add('grolem');
        fighter2.classList.remove('mackogneur');
        fighter2.classList.remove('roucarnage');
    } else if (cpuChoice == 2 ) { 
        fighter2.classList.add('roucarnage');
        fighter2.classList.remove('mackogneur');
        fighter2.classList.remove('grolem');
    } else {
        fighter2.classList.add('mackogneur');
        fighter2.classList.remove('grolem');
        fighter2.classList.remove('roucarnage');
    };
});


// Début du combat lors du clic sur le bouton

fight.addEventListener('click', () => {
    if (playerChoice == cpuChoice ) {
        scoreMsg.innerHTML = 'Egalité';
        egality = egality ++ +1;
        console.log(egality);
    } else if (playerChoice == 1 && cpuChoice == 2 || playerChoice == 2 && cpuChoice == 3 || playerChoice == 3 && cpuChoice == 1 ) { 
        scoreMsg.innerHTML = 'Vous avez gagné!';
        playerPts.innerHTML = playerCount++ +1;
    } else {
        scoreMsg.innerHTML = 'Vous avez perdu!';
        cpuPts.innerHTML = cpuCount++ +1 ;
    };
    console.log(scoreMsg.innerHTML);
    rate.innerHTML = pourcent(playerCount, cpuCount, egality) + ' %';
    rate2.innerHTML = pourcent(cpuCount, playerCount, egality) + ' %';
});


// Autre solution 

let selectedItems = document.querySelectorAll('.ShufumiItem'); 

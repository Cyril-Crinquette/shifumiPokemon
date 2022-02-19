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
let fighter11 = document.querySelector('#fighter11');
let fighter22 = document.querySelector('#fighter22');
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
    fighter11.src= 'assets/img/076.png';
    fighter11.style.display ='block';
});

roucarnage.addEventListener('click', () => {
    playerChoice = 2
    roucarnage.classList.add('red');
    grolem.classList.remove('red');
    mackogneur.classList.remove('red');
    fighter11.src= 'assets/img/1200px-Roucarnage-RFVF.png';
    fighter11.style.display ='block';
});

mackogneur.addEventListener('click', () => {
    playerChoice = 3
    mackogneur.classList.add('red');
    grolem.classList.remove('red');
    roucarnage.classList.remove('red');
    fighter11.src= 'assets/img/068.png';
    fighter11.style.display ='block';
});


// Sélection aléatoire du CPU lors du clic sur le bouton

randomSelectCpu.addEventListener('click', () => {
    cpuChoice = Math.floor(Math.random()*3) + 1;
    if (cpuChoice == 1 ) {
        fighter22.src= 'assets/img/076.png';
        fighter22.style.display ='block';
    } else if (cpuChoice == 2 ) { 
        fighter22.src= 'assets/img/1200px-Roucarnage-RFVF.png';
        fighter22.style.display ='block';
    } else {
        fighter22.src= 'assets/img/068.png';
        fighter22.style.display ='block';
    };
});


// Début du combat lors du clic sur le bouton

fight.addEventListener('click', () => {
    if (playerChoice == cpuChoice ) {
        modal.style.display = 'block';
        scoreMsg.innerHTML = 'Egalité';
        egality = egality ++ +1;
        console.log(egality);
    } else if (playerChoice == 1 && cpuChoice == 2 || playerChoice == 2 && cpuChoice == 3 || playerChoice == 3 && cpuChoice == 1 ) { 
        modal.style.display = 'block';
        scoreMsg.innerHTML = 'Vous avez gagné!';
        playerPts.innerHTML = playerCount++ +1;
    } else {
        modal.style.display = 'block';
        scoreMsg.innerHTML = 'Vous avez perdu!';
        cpuPts.innerHTML = cpuCount++ +1 ;
    };
    console.log(scoreMsg.innerHTML);
    rate.innerHTML = 'Joueur: ' + pourcent(playerCount, cpuCount, egality) + ' %';
    rate2.innerHTML = 'Ordinateur: ' + pourcent(cpuCount, playerCount, egality) + ' %';
});

// Modale

    let modal = document.getElementById('myModal');
    let btn = document.getElementById('myBtn');
    let span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
    modal.style.display= 'block';     }

    span.onclick = function() {
    modal.style.display = 'none';
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        }
    }
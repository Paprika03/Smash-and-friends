// --- 1. CONFIGURATION : Remplissez cette liste ! ---
const friends = [
    { name: "Onyankopon", image: "images/onyankopon.jpg" },
    { name: "Pervers", image: "images/pervers.jpg" },
    { name: "Claire", image: "images/claire.jpg },
    { name: "Maël", image: "images/mael.jpeg" }
    { name: "Pervers", image: "images/pervers.jpg" },
    { name: "Corentin", image: "images/corentin.jpg },
    { name: "Benshrek", image: "images/benshrek.png" }
    { name: "Le Front national", image: "images/frontnational.jpg" },
    { name: "Hentai main character", image: "images/hentaimaincharacter.jpg },
    { name: "C'est qui?", image: "images/jenesaispasquic.jpg" }
    { name: "Est-ce que je peux toucher tes cheveux?", image: "images/jepeuxtouchertescheveux.jpg" }
    { name: "Durkarog Agopian", image: "images/kikiculotte.jpg" },
    { name: "C'est quoi un classique burger?", image: "images/kikiburger.jpg },
    { name: "Maël x Together", image: "images/kpopeur.jpg" }
    { name: "Lyxday", image: "images/lyxday.jpg" }
    { name: "Mathieu blanc x Hugo", image: "images/mathieuxhugo.jpg" },
    { name: "Nathan Chad", image: "images/nathanchad.jpg},
    { name: "Noir", image: "images/noir.jpg" }
    { name: "Power x Reze", image: "images/powerxreze.jpg },
    { name: "Garde le smile", image: "images/smile.jpg" }
    { name: "Arabe", image: "images/arabe.jpg" }   
];

// --- 2. Sélection des éléments HTML ---
const friendImageEl = document.getElementById("friendImage");
const friendNameEl = document.getElementById("friendName");
const passButton = document.getElementById("passButton");
const smashButton = document.getElementById("smashButton");

// Éléments pour la fin du jeu
const cardEl = document.querySelector(".card");
const buttonsEl = document.querySelector(".buttons");
const endScreenEl = document.getElementById("endScreen");

// --- 3. Logique du jeu ---
let currentIndex = 0; // Garde la trace de l'ami actuellement affiché

// Fonction pour afficher l'ami actuel
function showFriend(index) {
    if (index < friends.length) {
        const friend = friends[index];
        friendImageEl.src = friend.image;
        friendImageEl.alt = `Photo de ${friend.name}`;
        friendNameEl.textContent = friend.name;
    } else {
        // C'est la fin du jeu
        showEndScreen();
    }
}

// Fonction pour passer à l'ami suivant
function nextFriend() {
    currentIndex++; // Passe à l'index suivant
    showFriend(currentIndex);
}

// Fonction pour afficher l'écran de fin
function showEndScreen() {
    cardEl.classList.add("hidden"); // Cache la carte de l'ami
    buttonsEl.classList.add("hidden"); // Cache les boutons
    endScreenEl.classList.remove("hidden"); // Montre l'écran de fin
}

// --- 4. Écouteurs d'événements ---
// Quand on clique sur "Pass" ou "Smash", on passe au suivant
passButton.addEventListener("click", nextFriend);
smashButton.addEventListener("click", nextFriend);

// --- 5. Démarrage ---
// Affiche le premier ami au chargement de la page
showFriend(currentIndex);
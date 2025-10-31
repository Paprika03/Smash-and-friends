// --- 1. CONFIGURATION : Remplissez cette liste ! ---
const friends = [
    { name: "Onyankopon", image: "images/onyankopon.jpg" },
    { name: "Pervers", image: "images/pervers.jpg" },
    { name: "Claire", image: "images/claire.jpg" },
    { name: "Maël", image: "images/mael.jpeg" },
    { name: "Corentin", image: "images/corentin.jpg" },
    { name: "Benshrek", image: "images/benshrek.png" },
    { name: "Le Front national", image: "images/frontnational.jpg" },
    { name: "Hentai main character", image: "images/hentaimaincharacter.jpg" },
    { name: "C'est qui?", image: "images/jenesaispasquic.jpg" },
    { name: "Est-ce que je peux toucher tes cheveux?", image: "images/jepeuxtouchertescheveux.jpg" },
    { name: "Durkarog Agopian", image: "images/kikiculotte.jpg" },
    { name: "C'est quoi un classique burger?", image: "images/kikiburger.jpg" },
    { name: "Maël x Together", image: "images/kpopeur.jpg" },
    { name: "Lyxday", image: "images/lyxday.jpg" },
    { name: "Mathieu blanc x Hugo", image: "images/mathieuxhugo.jpg" },
    { name: "Nathan Chad", image: "images/nathanchad.jpg" },
    { name: "Noir", image: "images/noir.jpg" },
    { name: "Power x Reze", image: "images/powerxreze.jpg" },
    { name: "Garde le smile", image: "images/smile.jpg" },
    { name: "Arabe", image: "images/arabe.jpg" }    
];

// --- 2. Sélection des éléments HTML ---
const friendCard = document.getElementById("friendCard"); // La carte entière
const friendImageEl = document.getElementById("friendImage");
const friendNameEl = document.getElementById("friendName");
const passButton = document.getElementById("passButton");
const smashButton = document.getElementById("smashButton");
const endScreenEl = document.getElementById("endScreen");
const smashCountDisplay = document.getElementById("smashCountDisplay"); // Nouvel élément
const restartButton = document.getElementById("restartButton"); // Nouveau bouton

// Éléments pour cacher/montrer
const buttonsEl = document.querySelector(".buttons");

// --- 3. Logique du jeu ---
let currentIndex = 0;
let smashCount = 0; // Nouveau compteur pour les "Smash"

// Fonction pour afficher l'ami actuel
function showFriend(index) {
    // Réinitialise la position de la carte pour la prochaine image
    friendCard.style.transform = 'translateX(0) rotate(0deg)';
    friendCard.style.opacity = '1';

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

// Fonction pour gérer le choix et l'animation
function handleChoice(choice) {
    if (choice === 'smash') {
        smashCount++; // Incrémente le compteur
        friendCard.classList.add('animate-smash');
    } else {
        friendCard.classList.add('animate-pass');
    }

    // Après l'animation, passer à l'ami suivant
    // La durée de transition est 0.5s dans le CSS
    setTimeout(() => {
        friendCard.classList.remove('animate-smash', 'animate-pass'); // Nettoie les classes d'animation
        currentIndex++;
        showFriend(currentIndex);
    }, 500); // Attendre la fin de l'animation (0.5 secondes)
}


// Fonction pour afficher l'écran de fin
function showEndScreen() {
    friendCard.classList.add("hidden");
    buttonsEl.classList.add("hidden");
    endScreenEl.classList.remove("hidden");
    smashCountDisplay.textContent = smashCount; // Affiche le score final
}

// Fonction pour redémarrer le jeu
function restartGame() {
    currentIndex = 0;
    smashCount = 0; // Réinitialise le compteur
    endScreenEl.classList.add("hidden");
    friendCard.classList.remove("hidden");
    buttonsEl.classList.remove("hidden");
    showFriend(currentIndex);
}

// --- 4. Écouteurs d'événements ---
passButton.addEventListener("click", () => handleChoice('pass'));
smashButton.addEventListener("click", () => handleChoice('smash'));
restartButton.addEventListener("click", restartGame); // Écouteur pour le bouton de redémarrage

// --- 5. Démarrage ---
showFriend(currentIndex);

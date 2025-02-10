function response(answer) {
    if(answer) {
        alert("Yay! 😻 Let's make this Valentine's purr-fect! 🐾❤️");
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        alert("Oh no! The cat got my tongue... try again? 😿");
    }
}

function moveButton() {
    const btn = document.querySelector('button:last-child');
    btn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
}

// Simple confetti effect
function confetti({ particleCount, spread, origin }) {
    for(let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = `hsl(${Math.random() * 360}deg, 100%, 50%)`;
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${origin.x * 100 + Math.random() * spread - spread/2}%`;
        confetti.style.top = `${origin.y * 100}%`;
        confetti.style.animation = `fall ${1 + Math.random() * 2}s ease-out`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `@keyframes fall {
    to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);

/* Add these new styles */
.gif-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.valentine-gif {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #FF69B4;
    box-shadow: 0 0 20px rgba(255,105,180,0.5);
}

/* Update flower positions */
.flower:nth-child(1) { top: 5%; left: 10%; }
.flower:nth-child(2) { top: 80%; right: 10%; }
.flower:nth-child(3) { top: 50%; left: 3%; }

/* Make no button harder to click */
button:last-child {
    position: relative;
    transition: all 0.1s ease;
    pointer-events: none;
}

/* Disable hover effect for no button */
button:last-child:hover {
    background: #FF69B4;
    transform: none;
}

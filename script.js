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
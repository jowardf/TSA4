function focusCard(selectedCard) {
    document.getElementById('menuContainer').classList.add('focus-card');
    document.querySelectorAll('.menu-item').forEach(card => {
        if (card !== selectedCard) {
            card.classList.add('hidden');
        }
    });
    setTimeout(() => {
        document.querySelectorAll('.hidden').forEach(card => card.style.display = 'none');
    }, 500);
    document.getElementById('backButton').style.display = 'block';
}

function showMainMenu() {
    document.querySelectorAll('.menu-item').forEach(card => {
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden');
        }, 50);
    });
    document.getElementById('menuContainer').classList.remove('focus-card');
    document.getElementById('backButton').style.display = 'none';
}
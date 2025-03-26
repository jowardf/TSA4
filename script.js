function focusCard(selectedCard) {
    const menuContainer = document.getElementById('menuContainer');
    const backButton = document.getElementById('backButton');

    // Hide other cards
    document.querySelectorAll('.menu-item').forEach(card => {
        card.style.display = 'none';
    });

    // Create detailed card
    const detailedCard = document.createElement('div');
    detailedCard.classList.add('detailed-card');

    const imgSrc = selectedCard.querySelector('img').src;
    const title = selectedCard.querySelector('.card-title').textContent;
    const description = selectedCard.querySelector('.card-text').textContent;

    detailedCard.innerHTML = `
        <img src="${imgSrc}" class="detailed-img" alt="${title}">
        <div class="detailed-info">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;

    menuContainer.appendChild(detailedCard);
    backButton.style.display = 'block';
}

function showMainMenu() {
    document.querySelector('.detailed-card').remove();
    document.querySelectorAll('.menu-item').forEach(card => {
        card.style.display = 'block';
    });
    document.getElementById('backButton').style.display = 'none';
}

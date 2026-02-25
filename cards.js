fetch('cards.json')
    .then(response => response.json())
    .then(allCards => {

        const containers = document.querySelectorAll('.cards-grid');

        containers.forEach(container => {

            const requiredCategory = container.dataset.category;

            if (!requiredCategory) return;

            const filteredCards = allCards.filter(card => card.category === requiredCategory);

            filteredCards.forEach(card => {
                const cardHTML = `
                    <div class="card">
                        <img src="${card.image}" alt="${card.title}" class="card-img">
                        <div class="card-content">
                            <h3 class="card-title">${card.title}</h3>
                            <p class="card-text">${card.text}</p>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        });
    })
    .catch(error => console.error('Помилка:', error));
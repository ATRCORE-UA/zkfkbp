fetch('clients.json')
    .then(response => response.json())
    .then(allCards => {

        const containers = document.querySelectorAll('.cl-grid');

        containers.forEach(container => {

            const requiredCategory = container.dataset.category;

            if (!requiredCategory) return;

            const filteredCards = allCards.filter(card => card.category === requiredCategory);

            filteredCards.forEach(card => {
                const cardHTML = `
                    <div class="cl-c">
                        <img src="${card.image}" alt="${card.title}" class="cl-img">
                        <div class="cl-content">
                            </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        });
    })
    .catch(error => console.error('Помилка:', error));
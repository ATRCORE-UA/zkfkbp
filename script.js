const track = document.getElementById('track');

fetch('slides.json')
        .then(response => response.json())
        .then(data => {
            track.style.width = `${data.length * 100}%`;

            data.forEach((slide) => {

                const slideHTML = `
            <div class="hero-slide" style="width: ${100 / data.length}%">
                <div class="hero-content">
                    <img src="${slide.image}" alt="${slide.title}" class="hero-card-image">
                    <h2>${slide.title}</h2>
                    <p>${slide.description}</p>
                </div>
            </div>
            `;

                track.innerHTML += slideHTML;
            });

            let currentIndex = 0;
            const totalSlides = data.length;
            const step = 100 / totalSlides;

            function moveSlide() {
                track.style.transform = `translate3d(-${currentIndex * step}%, 0px, 0px)`;
            }

            setInterval(() => {
                currentIndex++;

                if (currentIndex >= totalSlides) {
                    currentIndex = 0;
                }

                moveSlide();
            }, 5000);

        })
        .catch(error => console.error('Помилка завантаження JSON:', error));
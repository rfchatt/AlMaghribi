       // Auto-changing slideshow
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Wrap around if at end
            if (n >= slides.length) currentSlide = 0;
            if (n < 0) currentSlide = slides.length - 1;
            
            // Show current slide
            slides[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }
        
        // Change slide every 3 seconds
        setInterval(nextSlide, 3000);
        
        // Initial display
        showSlide(currentSlide);

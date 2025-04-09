const slidesData = [
    {
      src: 'pictures/band_sale_pending.jpeg',
      alt: 'Members of Sale Pending standing outside',
      caption: ''
      
    },
    {
      src: 'pictures/MID photo 8.png',
      alt: 'Steven of Sale Pending shredding on guitar',
      caption: 'Steven shredding on guitar'
    },
    {
      src: 'pictures/4W6A0378.png',
      alt: 'Riah of Sale Pending playing the keys',
      caption: 'Riah on the keys'
    },
    {
       src: 'pictures/4W6A0538.png',
       alt: 'Charlie of Sale Pending playing drums',
       caption: 'Charlie playing drums'
    },
    {
        src: 'pictures/IMG_2501.png',
        alt: 'Sale Pending on stage in a crowded venue',
        caption: "The band's first ever gig in Rexburg at The Venue 101"
    },
    {
        src: 'pictures/SPL1104665.png',
        alt: 'Tess of Sale Pending singing on a stage',
        caption: 'Tess on vocals'
    },
    {
        src: 'pictures/4W6A0369.jpeg',
        alt: 'Zach of Sale Pending playing bass on stage',
        caption: 'Zach on bass'
    },
    {
        src: 'pictures/4W6A0504.jpeg',
        alt: 'Kaylee of Sale Pending playing guitar and singing on stage',
        caption: 'Kaylee on rhythm guitar'
    },
    {
        src: 'pictures/SPL1104617.jpg',
        alt: 'Owen of Sale Pending standing',
        caption: 'Owen on lead/rhythm guitar'
    },
    {
        src: 'pictures/sale_recording.jpeg',
        alt: 'Members of Sale Pending in a vocal recording booth with a microphone',
        caption: 'New music coming soon??'
    }
  ];
  
  let currentSlide = 0;
  
  export function initSlideshow() {
    const container = document.querySelector('.slideshow-container');
  
    slidesData.forEach((slide) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('slide');
      slideDiv.innerHTML = `
        <img src="${slide.src}" alt="${slide.alt}">
        <div class="caption">${slide.caption}</div>
      `;
      container.insertBefore(slideDiv, container.querySelector('.prev'));
    });
  
    const slides = container.querySelectorAll('.slide');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
  
    function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'block';
    }
  
    prev.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    next.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    showSlide(currentSlide);
  }
  
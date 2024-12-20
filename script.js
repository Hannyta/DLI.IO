const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById('menu-close');
const navAccount = document.querySelector('.navlist-account');

// Función para verificar el tamaño de pantalla y actualizar el menú
const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
        
        navMenu.classList.add("active");
        menuToggle.style.display = "none"; 
        menuClose.style.display = "none";
        if (navAccount) navAccount.style.display = "none"; 
    } else {
        navMenu.classList.remove("active");
        menuToggle.style.display = "block";
        menuClose.style.display = "block";
        if (navAccount) navAccount.style.display = "block";
    }
};

window.addEventListener("resize", checkScreenSize);
checkScreenSize();

// Funcionalidad del menú (hamburguesa)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
    if (expanded) {
        navMenu.querySelector('a').focus();
    }
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove("active"); // Cierra el menú
    menuToggle.setAttribute("aria-expanded", "false"); // Actualiza el estado de expansión
});

// Swiper para el banner
let swiperBanner = new Swiper('.swiper-container', { 
    loop: true, 
    spaceBetween: 32,
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true, 
    }, 
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }, 
    autoplay: {
         delay: 2000,
         pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
});
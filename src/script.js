// navDesktop
const navLinks = document.querySelectorAll('.nav a');

const changeLinkColorOnClick = () => {
    navLinks.forEach(link => {
        link.onclick = () => {
            // Menghapus kelas 'text-orange-200' dari semua link
            navLinks.forEach(item => item.classList.remove('text-orange-200'));

            // Menambahkan kelas 'text-orange-200' pada link yang diklik
            link.classList.add('text-orange-200');
        };
    });
};

// Menambahkan logika untuk "Home" yang berwarna dari awal
const setInitialActiveLink = () => {
    const homeLink = document.querySelector('.hero'); // Mengambil link Home
    homeLink.classList.add('text-orange-200'); // Memberikan kelas 'text-orange-200' pada link Home
};

setInitialActiveLink();
changeLinkColorOnClick();

// end of navDesktop

// mobileNav
const mobileNav = document.getElementById('mobileNav')
const icon = document.getElementById('icon')

const btnNav = () => {
    mobileNav.classList.toggle("translate-x-full")
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-x")
    } else {
        icon.classList.replace("fa-x", "fa-bars")
    }
}

const navMobile = document.querySelectorAll('.mobile a')
const changeLinkColorOnMobile = () => {
    navMobile.forEach(link => {
        link.onclick = () => {
            navMobile.forEach(item => item.classList.remove('text-orange-200'))
            link.classList.add('text-orange-200')
        };
    });
};

const setInitialActiveLinkMobile = () => {
    const homeLink = document.querySelector('.mobileHero')
    homeLink.classList.add('text-orange-200')
}

setInitialActiveLinkMobile()
changeLinkColorOnMobile()
// end of mobile Nav

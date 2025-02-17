// navDesktop
const navLinks = document.querySelectorAll(".nav a")

const changeLinkColorOnClick = () => {
    navLinks.forEach(link => {
        link.onclick = () => {
            // Menghapus kelas 'text-orange-200' dari semua link
            navLinks.forEach(item => item.classList.remove('text-orange-200'))

            // Menambahkan kelas 'text-orange-200' pada link yang diklik
            link.classList.add('text-orange-200')
        };
    });
};

// Menambahkan logika untuk "Home" yang berwarna dari awal
const setInitialActiveLink = () => {
    const homeLink = document.querySelector('.hero') // Mengambil link Home
    homeLink.classList.add('text-orange-200') // Memberikan kelas 'text-orange-200' pada link Home
};

setInitialActiveLink()
changeLinkColorOnClick()

// Function untuk update warna link saat scroll
const updateActiveLinkOnScroll = () => {
    const sections = document.querySelectorAll('section') // Atau selector untuk elemen target
    let currentLink = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom >= 0) {
            // Temukan link yang sesuai dengan section yang sedang di-scroll
            currentLink = document.querySelector(`a[href="#${section.id}"]`)
        }
    });

    // Update link yang aktif
    if (currentLink) {
        // Reset semua link
        navLinks.forEach(link => link.classList.remove('text-orange-200'))
        currentLink.classList.add('text-orange-200')
    }
};

// Jalankan fungsi saat scroll
window.addEventListener('scroll', updateActiveLinkOnScroll)

// Jalankan sekali untuk memastikan saat halaman pertama kali dimuat
updateActiveLinkOnScroll()
// end of navDesktop

// mobileNav
// mobileNav
const mobileNav = document.getElementById('mobileNav')
const icon = document.getElementById('icon')

// Toggle untuk membuka dan menutup menu
const btnNav = () => {
    mobileNav.classList.toggle("translate-x-full")
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-x")
    } else {
        icon.classList.replace("fa-x", "fa-bars")
    }
};

const navMobile = document.querySelectorAll('.mobile a')

// Fungsi untuk mengubah warna link di mobile saat diklik
const changeLinkColorOnMobile = () => {
    navMobile.forEach(link => {
        link.onclick = () => {
            navMobile.forEach(item => item.classList.remove('text-orange-200'))
            link.classList.add('text-orange-200');
        };
    });
};

// Fungsi untuk menetapkan warna link aktif pertama kali
const setInitialActiveLinkMobile = () => {
    const homeLink = document.querySelector('.mobileHero')
    homeLink.classList.add('text-orange-200')
};

// Fungsi untuk update warna link saat scroll di mobile
const updateActiveLinkOnScrollMobile = () => {
    const sections = document.querySelectorAll('section') // Atau selector untuk elemen target
    let currentLink = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom >= 0) {
            // Temukan link yang sesuai dengan section yang sedang di-scroll
            currentLink = document.querySelector(`.mobile a[href="#${section.id}"]`)
        }
    });

    // Update link yang aktif
    if (currentLink) {
        // Reset semua link
        navMobile.forEach(link => link.classList.remove('text-orange-200'))
        currentLink.classList.add('text-orange-200')
    }
};

// Jalankan fungsi saat scroll pada mobile
window.addEventListener('scroll', updateActiveLinkOnScrollMobile)

// Jalankan sekali untuk memastikan saat halaman pertama kali dimuat
updateActiveLinkOnScrollMobile()

setInitialActiveLinkMobile()
changeLinkColorOnMobile()
// end of mobile Nav

// end of mobile Nav

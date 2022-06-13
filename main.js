const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButtonClose = document.getElementById("menu-close-button");
const openVideoModalButton = document.getElementById("play-video");
const videoModal = document.getElementById("modal");
const modalCloseButton = document.getElementById("close-modal");



mobileMenuButton.addEventListener('click', () => {
    mobileMenu.setAttribute("style", "left: 0");
    mobileMenuButtonClose.setAttribute("style", "display: block !important");
    mobileMenuButton.setAttribute("style", "display: none !important");
});

mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.setAttribute("style", "left: -100%");
    mobileMenuButtonClose.setAttribute("style", "display: none");
    mobileMenuButton.setAttribute("style", "display: block");
});

openVideoModalButton.addEventListener('click', () => {
    videoModal.setAttribute("style", "display: flex")
})


modalCloseButton.addEventListener('click', () => {
    videoModal.setAttribute("style", "display: none")
})

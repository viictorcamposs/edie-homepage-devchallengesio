const openNavbar = document.getElementById('openNavbar');
const closeNavbar = document.getElementById('closeNavbar');
const navbar = document.getElementById('navbar');
const menuLinks = document.querySelectorAll('li.menuLinks');

openNavbar.addEventListener('click', () => {

  navbar.style.transform = 'translateX(0%)';
  for(let i = 1; i <= menuLinks.length; i++) {
    setTimeout(() => {
      menuLinks[i - 1].style.opacity = 1
      menuLinks[i - 1].style.marginTop = 0;
    }, (i*100));
  }

  setTimeout(() => {
    closeNavbar.style.transform = 'scale(1)';
  }, 800);
});
closeNavbar.addEventListener('click', () => {

  navbar.style.transform = 'translateX(110%)';
  closeNavbar.style.transform = 'scale(0)';
  for(let link of menuLinks) {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.marginTop = `${0.5}rem`
    }, 800);
  }
});
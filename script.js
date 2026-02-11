document.addEventListener('DOMContentLoaded', () => {
  console.log("Main page loaded");

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
      navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    } else {
      navbar.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    }
  });
});
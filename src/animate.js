// SCRIPT DE ANIMAÇÃO DA HOME PAGE

export const animate = (el) => {

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", function () {

    if (isElementInViewport(el)) {
      el.classList.add('animacao-home');

    } else {
      el.classList.remove('animacao-home');

    }
  });

};



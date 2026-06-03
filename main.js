(function () {
  // Smooth scroll for all [data-go] buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-go]');
    if (!btn) return;
    var target = document.getElementById(btn.dataset.go);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  // Nav background on scroll
  var nav = document.querySelector('.cc-nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('nav-on');
    } else {
      nav.classList.remove('nav-on');
    }
  });

  // Reveal on scroll (IntersectionObserver)
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('revealed');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });
})();

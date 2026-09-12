// EnergyGlass — iconos SVG personalizados + reveal-on-scroll
// Nada se mueve solo: los iconos se dibujan y las cards aparecen al entrar en pantalla
(function(){
  'use strict';

  // Mapa de emoji -> ruta del icono SVG personalizado
  var ICONS = {
    '🏢': 'icons/edificios.svg',
    '🌱': 'icons/invernadero.svg',
    '🛡️': 'icons/seguridad.svg',
    '🔬': 'icons/tecnologia.svg',
    '🏭': 'icons/fabricacion.svg',
    '💼': 'icons/ip.svg'
  };

  // 1) Reemplaza cada <span class="ico">emoji</span> por un <img> al SVG custom
  document.querySelectorAll('.ico').forEach(function(span){
    var emoji = (span.textContent || '').trim();
    var src = ICONS[emoji];
    if(!src) return;
    var img = document.createElement('img');
    img.className = 'ico-svg';
    img.src = src;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.setAttribute('loading', 'lazy');
    span.replaceWith(img);
  });

  // 2) Reveal al scroll (cards, splits, iconos)
  var revealables = document.querySelectorAll('.reveal, .ico-svg');
  if(!('IntersectionObserver' in window)){
    revealables.forEach(function(el){ el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealables.forEach(function(el){ io.observe(el); });
})();

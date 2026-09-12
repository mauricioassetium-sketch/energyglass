// EnergyGlass — iconos SVG personalizados + animación de dibujo al scroll
// Nada se mueve solo: los iconos se dibujan y las cards aparecen al entrar en pantalla
(function(){
  'use strict';

  var INLINE = {
    '🏢': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path class="d" d="M6 18h36M16 18V8M32 18V8M6 18v22M42 18v22"/><path class="d" d="M10 26h8M10 32h8M20 26h8M20 32h8M30 26h8M30 32h8"/></g></svg>',
    '🌱': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path class="d" d="M22 44V20M42 20v24M2 20v24"/><path class="d" d="M2 44h44M22 20c0-6 4-8 8-8"/><path class="d" d="M18 14c-4 2-6 6-6 8M26 14h4c5 0 9 3 9 8M30 16c4 1 8 4 8 8M38 18c3 2 4 4 4 6"/></g></svg>',
    '🛡️': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path class="d" d="M24 3l15 7v14a15 15 0 0 1-30 0V10z"/><path class="d" d="M14 22v4M24 22v4M34 22v4"/><path class="d" d="M11 13h26"/></g></svg>',
    '🔬': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path class="d" d="M24 2C16 8 16 20 16 30H12"/><path class="d" d="M16 30h16"/><path class="d" d="M32 30c0-10 0-22-8-28"/><path class="d" d="M28 30l10 6"/><path class="d" d="M28 30l-6 8"/><circle class="d" cx="38" cy="36" r="2.5"/><path class="d" d="M22 44l2-6"/></g></svg>',
    '🏭': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path class="d" d="M5 42h38M9 42V14l6-6v34M15 8l12 6 12-6-16 8-8-8z"/><path class="d" d="M33 30h4M33 36h6"/></g></svg>',
    '💼': '<svg class="ico-svg" viewBox="0 0 48 48" fill="none"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle class="d" cx="24" cy="24" r="15"/><path class="d" d="M24 9v15h13"/><path class="d" d="M9 18h30M24 9c-2 4-2 8 0 12 2 4 5 6 8 8"/></g></svg>'
  };

  // 1) Reemplaza cada <span class="ico">emoji</span> por el SVG inline custom,
  //    con cada trazo listo para animarse
  document.querySelectorAll('.ico').forEach(function(span){
    var emoji = (span.textContent || '').trim();
    var svg = INLINE[emoji];
    if(!svg) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = svg;
    var node = tmp.firstChild;
    node.classList.add('pending');        // trazos ocultos hasta entrar en pantalla
    node.setAttribute('aria-hidden', 'true');
    span.replaceWith(node);
  });

  // 2) Revela al scroll: dibuja el trazo de los SVG y desvanece las cards
  var revealables = document.querySelectorAll('.reveal, .ico-svg.pending');
  if(!('IntersectionObserver' in window)){
    revealables.forEach(function(el){ el.classList.add('in-view'); el.classList.remove('pending'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        e.target.classList.remove('pending');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealables.forEach(function(el){ io.observe(el); });
})();
